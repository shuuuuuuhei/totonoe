import React, { Component, Fragment, useState, useEffect } from 'react'
import { DropdownButton, Dropdown, ButtonGroup, Button, Form, Col, Alert } from 'react-bootstrap'
import '../style/QuantityInput.css'
import { SaunaSubmitComponent } from './SaunaSubmitComponent'
import { WaterBathSubmitComponent } from './WaterBathSubmitComponent'
import { useCookies } from 'react-cookie'
import { useAuth0 } from '@auth0/auth0-react'
import { SelectAddress } from './form-components/SelectAdress'
import { TermsCheckBox } from './form-components/TermsCheckBox'
import { IsRequiredCheckForm } from '../@types/Form'
const MinPrice = 1;
export const FacilitySubmitComponent = () => {
    const {getAccessTokenSilently} = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState<IsRequiredCheckForm>();

    const [saunas, setSaunas] = useState<NewSauna[]>([
        {
            id: "",
            facility_id: "",
            sauna_type: 0,
            temperature: 0 ,
            capacity: 1,
            rouryu_flg: "",
            bgm_flg: "",
            tv_flg: "",
            sauna_mat_flg: "",
        }
    ]);

    const [waterBaths, setWaterBaths] = useState<WaterBath[]>([{
        id: "",
        facility_id: "",
        temperature: 0,
        capacity: 0,
    }]);

    const [facility, setFacilityState] = useState<NewFacility>({
        id: "",
        name: "",
        price: 0,
        address: {
            prefecture_id: 0,
            city_id: 0,
            street_name: "",
        },
        eigyo_start: "",
        eigyo_end: "",
        access: "",
        tel: "",
        restaurant_flg: "",
        lodging_flg: "",
        working_space_flg: "",
        books_flg: "",
        heat_wave_flg: "",
        air_bath_flg: "",
        break_space_flg: "",
        water_server_flg: "",
        saunas: saunas,
        water_baths: waterBaths,
        amenities: [],
    });

    // SelectAddressコンポーネントで変更があれば更新を行う
    const [address, setAddress] = useState({
        prefecture_id: 0,
        city_id: 0,
        street_name: "",
    });

    const [terms, setTerms] = useState<{id: string;name: string;}[]>();

    // 登録前にfacilityの更新を行うと最新のfacilityを登録できないので、useEffect内で該当の要素に変更があればfacilityの更新を行うようにする
    useEffect(() => {

        setFacilityState((prevState) => ({
            ...prevState,
            address: address,
            saunas: saunas,
            water_baths: waterBaths,
        }));

        terms?.map((term, index) => {
            setFacilityState((prevState) => ({
                ...prevState,
                [term.id]: "1",
            }))
        })

    }, [address, saunas, waterBaths, terms])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        if(errors) {
            if(errors[name as keyof IsRequiredCheckForm]) setErrors({...errors, [name]: null})
        }

        // number型の更新の場合
        if(typeof facility[name as keyof NewFacility] === 'number') {
            const numValue = parseInt(value);
            setFacilityState((prevState) => (
                {...prevState, [name]: numValue,}
            ));
            return
        }

        setFacilityState((prevState) => (
            {...prevState, [name]: value,}
        ));
    };

    const handleSetSaunas = (updateIndex: number, name: string, value: string|number) => {
        console.log(name,value);
        // sauna個別コンポーネントから saunaState を受け取ってsaunasの更新を行うこうと、saunaStateを更新していない(レンダリングしていない)状態で更新するので、saunasの更新が正しく行われない。
        // 更新する項目と値を受け取って更新を行う。
        setSaunas((prevState) => (
            prevState.map((prevSaunaState, index) => (index === updateIndex ? {...prevSaunaState, [name]: value} : prevSaunaState))
        ));
    };

    const handleSetWaterBath = (updateIndex: number, name: string, value: string|number) => {
        console.log(name,value);
        // waterBath個別コンポーネントから waterBathState を受け取ってwaterBathsの更新を行うこうと、waterBathStateを更新していない(レンダリングしていない)状態で更新するので、waterBathsの更新が正しく行われない。
        // 更新する項目と値を受け取って更新を行う。
        setWaterBaths((prevState) => (
            prevState.map((prevWaterBathState, index) => (index === updateIndex ? {...prevWaterBathState, [name]: value} : prevWaterBathState))
        ));
    };

    const handleAddSauna = () => {
        setSaunas((prevState) => ([
            ...prevState,
            {
                id: "",
                facility_id: "",
                sauna_type: 0,
                temperature: 0,
                capacity: 0,
                humidity_start: 0,
                humidity_end: 0,
                rouryu_flg: "",
                bgm_flg: "",
                tv_flg: "",
                sauna_mat_flg: "",
            },
        ]))
    }

    const handleAddWaterBath = () => {
        setWaterBaths((prevState) => ([
            ...prevState,
            {
                id: "",
                facility_id: "",
                temperature: 0,
                capacity: 0,
            },
        ]))
    }

    const handleDeleteSauna = ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        
        // 要素を指定するindexを受け取る
        const deleteIndex = parseInt(event.currentTarget.id);

        const newSaunas = saunas.filter((sauna, index) => {
            return index !== deleteIndex
        })
        setSaunas((prevSaunas) => newSaunas);
    })

    const handleDeleteWaterBath = ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        // 要素を指定するindexを受け取る
        const deleteIndex = parseInt(event.currentTarget.id);

        const newWaterBaths = waterBaths.filter((sauna, index) => {
            return index !== deleteIndex
        })
        setWaterBaths((prevWaterBaths) => newWaterBaths);
    })

    // address component用のerror更新
    const handleSetAddressErrorNull = (name: string) => {
        if(errors) {
            setErrors({...errors, address: {...errors?.address, [name]: null}});
        }
    }

    // 保存前入力チェック
    const validateForm = () => {

        const newErrors: IsRequiredCheckForm = {
            name: "",
            address: {
                prefecture: "",
                city: "",
                street: "",
            },
            price: "",
        }

        if(!facility.name || facility.name === '') newErrors.name = '施設名を入力してください'
        if(!facility.address.prefecture_id) newErrors.address.prefecture = '都道府県を選択してください'
        if(!facility.address.city_id ) newErrors.address.city = '市町村を選択してください'
        if(!facility.address.street_name || facility.address.street_name === '') newErrors.address.street = '町名番地を入力してください'
        if(!facility.price || facility.price <=0 ) newErrors.price = '1円以上を入力してください'

        // サウナのバリデーションは保留
        const hasErrorSaunas = facility.saunas.filter((sauna) => !sauna.sauna_type || sauna.temperature <= 0 || sauna.capacity <= 0)

        return newErrors;
    }

    const returnTop = () => {
        window.scrollTo({
            top: 10,
            behavior: "auto",
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setValidated(true)
            returnTop();
            return
        }

        console.log("prev",facility)
        const fetchPostFacility = async() => {
            try {
                const uri = "http://localhost:4000/facilities/new";
                const accessToken = await getAccessTokenSilently({
                    audience: 'https://totonoe-app.com',
                    scope: 'read:posts',
                })
                const requestOption: RequestInit = {
                method: "POST",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({'facility':facility, 'user_id': cookies.userID,})
                }
                fetch(uri, requestOption)
                    .then((response) => {
                        if(!response.ok) {
                            throw(new Error("サウナ施設の登録に失敗しました。"+response.status))
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log("登録成功", data)
                    })
            } catch (err)
            { 
                console.log(err) 
            }
        }
        fetchPostFacility();
    }

    const GetErrors = () => {
        if(errors) {
            return <>・入力に不備があります</>
        }
    }

    return(
        <Fragment>
            <div className="container p-5">
                <div className="row py-5">
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center py-3">サウナ施設を登録する</h2>
                        <Alert variant="danger" show={validated}>
                            {GetErrors()}
                        </Alert>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label htmlFor="">施設名</Form.Label>
                            <Form.Control 
                                    type="text"
                                    className="input-sm"
                                    name="name"
                                    value={facility.name}
                                    onChange={handleChange}
                                    placeholder="〇〇温泉"
                                    isInvalid={!!errors?.name}
                            />
                            <Form.Control.Feedback type='invalid'>{errors?.name}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Label htmlFor="">住所</Form.Label>
                        <SelectAddress address={address} setAddress={setAddress} error={errors?.address} handleSetAddressErrorNull={handleSetAddressErrorNull}/>
                        <Form.Label htmlFor="">営業時間</Form.Label>
                        <div className="eigyo-time row">
                            <div className="col-5">
                                <Form.Group>
                                    <Form.Control
                                            type="time"
                                            className="input-sm"
                                            name="eigyo_start"
                                            value={facility.eigyo_start}
                                            onChange={handleChange}
                                            placeholder=""
                                            required={false}
                                    />
                                </Form.Group>
                            </div>
                            <p className="col-1 text-center">~</p>
                            <div className="col-5">
                                <Form.Group>
                                    <Form.Control 
                                            type="time"
                                            className="input-sm"
                                            name="eigyo_end"
                                            value={facility.eigyo_end}
                                            onChange={handleChange}
                                            placeholder=""
                                            required={false}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <Form.Group>
                            <Form.Label htmlFor="">値段</Form.Label>
                            <Form.Control 
                                    type="number"
                                    className="input-sm"
                                    name="price"
                                    value={facility.price.toString()}
                                    onChange={handleChange}
                                    placeholder="値段"
                                    isInvalid={!!errors?.price}
                                    min={MinPrice}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors?.price}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="row py-4">
                            <div className="col-6">
                                <div className="row">
                                    <Form.Label htmlFor="" className="col-6">サウナ</Form.Label>
                                    <div className="col-6 text-end">
                                        <Button onClick={handleAddSauna}>
                                            サウナを追加
                                        </Button>
                                    </div>
                                </div>
                                {saunas.map((sauna, index) => {
                                    return(
                                        <SaunaSubmitComponent sauna={sauna} index={index} handleDeleteSauna={handleDeleteSauna} handleSetSaunas={handleSetSaunas} key={index}/>
                                    )
                                })}
                            </div>
                            
                            <div className="col-6">
                                <div className="row">
                                    <Form.Label htmlFor="" className="col-6">水風呂</Form.Label>
                                    <div className="col-6 text-end">
                                        <Button onClick={handleAddWaterBath}>
                                            水風呂を追加
                                        </Button>
                                    </div>
                                </div>
                                {waterBaths.map((waterBath, index) => {
                                    return(
                                        <WaterBathSubmitComponent waterBath={waterBath} index={index} handleDeleteWaterBath={handleDeleteWaterBath} handleSetWaterBath={handleSetWaterBath} key={index}/>
                                    )
                                })}
                            </div>
                        </div>
                        <TermsCheckBox terms={terms} setTerms={setTerms}/>
                        <Button type="submit" variant="primary" className="submit-btn my-3">
                            保存する
                        </Button>
                    </Form>
                </div>
            </div>
        </Fragment>
    )
}