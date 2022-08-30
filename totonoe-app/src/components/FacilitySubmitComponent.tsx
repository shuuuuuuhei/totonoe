import React, { Component, Fragment, useState, useEffect } from 'react'
import { Input } from './form-components/Input'
import { InputScope } from './form-components/InputScope'
import { DropdownButton, Dropdown, ButtonGroup, Button, Form } from 'react-bootstrap'
import '../style/QuantityInput.css'
import { SelectAddress } from './form-components/SelectAdress'
import { TermsCheckBox } from './form-components/TermsCheckBox'
import { SaunaSubmitComponent } from './SaunaSubmitComponent'
import { WaterBathSubmitComponent } from './WaterBathSubmitComponent'
import { useCookies } from 'react-cookie'
import { useAuth0 } from '@auth0/auth0-react'

export const FacilitySubmitComponent = () => {

    const {getAccessTokenSilently} = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();

    const [saunas, setSaunas] = useState<NewSauna[]>([
        {
            id: "",
            facility_id: "",
            sauna_type: 0,
            temperature: 0,
            capacity: 0,
            rouryu_kb: "",
            bgm_kb: "",
            tv_kb: "",
            sauna_mat_kb: "",
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
            street: "",
        },
        eigyo_start: "",
        eigyo_end: "",
        access: "",
        tel: "",
        restaurant_flg: "",
        lodging_flg: "",
        workingspace_flg: "",
        books_flg: "",
        heatwave_flg: "",
        airbath_flg: "",
        breakspace_flg: "",
        waterserver_flg: "",
        saunas: saunas,
        waterbaths: waterBaths,
        amenities: [],
    });

    // SelectAddressコンポーネントで変更があれば更新を行う
    const [address, setAddress] = useState({
        prefecture_id: 0,
        city_id: 0,
        street: "",
    });

    const [terms, setTerms] = useState<{id: string;name: string;}[]>();

    // 登録前にfacilityの更新を行うと最新のfacilityを登録できないので、useEffect内で該当の要素に変更があればfacilityの更新を行うようにする
    useEffect(() => {

        setFacilityState((prevState) => ({
            ...prevState,
            address: address,
            saunas: saunas,
            waterbaths: waterBaths,
        }));

        terms?.map((term, index) => {
            setFacilityState((prevState) => ({
                ...prevState,
                [term.id]: "1",
            }))
        })

    }, [address, saunas, waterBaths, terms])

    console.log(facility)
    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const name = event.target.name;
        const value = event.target.value;

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
                rouryu_kb: "",
                bgm_kb: "",
                tv_kb: "",
                sauna_mat_kb: "",
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
                    body: JSON.stringify({facility, 'user_id': cookies.userID,})
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

    console.log(address)

    return(
        <Fragment>
            <div className="container p-5">
                <div className="row py-5">
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center py-3">サウナ施設を登録する</h2>
                        <label htmlFor="">施設名</label>
                        <Input 
                                type="text"
                                className="input-sm"
                                name="name"
                                value={facility.name}
                                onChange={handleChange}
                                placehodlder="〇〇温泉"
                                errorDiv=""
                                errorMsg=""
                        />
                        <label htmlFor="">住所</label>
                        <SelectAddress address={address} setAddress={setAddress}/>
                        <label htmlFor="">営業時間</label>
                        <div className="eigyo-time row">
                            <div className="col-5">
                                <Input 
                                        type="time"
                                        className="input-sm"
                                        name="eigyo_start"
                                        value={facility.eigyo_start}
                                        onChange={handleChange}
                                        placehodlder=""
                                        errorDiv=""
                                        errorMsg=""
                                />
                            </div>
                            <p className="col-1 text-center">~</p>
                            <div className="col-5">
                                <Input 
                                        type="time"
                                        className="input-sm"
                                        name="eigyo_end"
                                        value={facility.eigyo_end}
                                        onChange={handleChange}
                                        placehodlder=""
                                        errorDiv=""
                                        errorMsg=""
                                />
                            </div>
                        </div>
                        <label htmlFor="">値段</label>
                        <Input 
                                type="number"
                                className="input-sm"
                                name="price"
                                value={facility.price.toString()}
                                onChange={handleChange}
                                placehodlder="値段"
                                errorDiv=""
                                errorMsg=""
                        />
                        <div className="row py-4">
                            <div className="col-6">
                                <div className="row">
                                    <label htmlFor="" className="col-6">サウナ</label>
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
                                    <label htmlFor="" className="col-6">水風呂</label>
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