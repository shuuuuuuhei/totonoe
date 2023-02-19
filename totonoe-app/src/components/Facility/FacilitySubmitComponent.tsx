import React, { Component, Fragment, useState, useEffect, createContext } from 'react'
import { DropdownButton, Dropdown, ButtonGroup, Button, Form, Col, Alert } from 'react-bootstrap'
import { WaterBathSubmitComponent } from './WaterBathSubmitComponent'
import { useCookies } from 'react-cookie'
import { useAuth0 } from '@auth0/auth0-react'
import { SelectAddress } from '../form-components/SelectAdress'
import { TermsCheckBox } from '../form-components/TermsCheckBox'
import { IsRequiredCheckFacilitySubmitForm } from '../../@types/Form'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IsNullOrUndefinedOrEmpty } from '../../common/Check'
import { WaterBath } from '../../@types/sauna/Waterbath'
import { NewFacility, Facility, Address, City } from '../../@types/sauna/Facility'
import { NewSauna } from '../../@types/sauna/Sauna'
import { ConvertErrorMessageToErrorPageProps, ConvertPrefectureNameToIndex } from '../../common/Convert'
import { AddressTextBox } from './AddressTextBox'
import { SaunaSubmitComponent } from './SaunaSubmitComponent'
import { ErrorPageProps } from '../../@types/ErrorPage'
import { BaseURI } from '../../utils/constants'
const MinPrice = 1;
interface MapInfo {
    map_name: string | null,
    map_lat: number | null,
    map_lng: number | null,
}
/**
 * 住所コンテキスト
 */
type AddressContext = {
    address: Address,
    setAddress: React.Dispatch<React.SetStateAction<Address>>,
};

/**
 * 市区町村コンテキスト
 */
type CityListContext = {
    cityList: City[],
    setCityList: React.Dispatch<React.SetStateAction<City[]>>,
}

const initialAddressState: Address = {
    prefecture_id: 0,
    city_id: 0,
    city_name: "",
    street_name: "",
    latitude: 0,
    longitude: 0,
}
/**
 * 住所Stateコンテキスト
 */
export const AddressState = createContext<AddressContext>({
    address: initialAddressState,
    setAddress: () => { }
});

/**
 * 市区町村リストStateコンテキスト
 */
export const CityListState = createContext<CityListContext>({
    cityList: [],
    setCityList: () => { }
})

export const FacilitySubmitComponent = () => {
    const navigate = useNavigate();
    const { getAccessTokenSilently, isAuthenticated, loginWithRedirect } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState<IsRequiredCheckFacilitySubmitForm>();
    const location = useLocation();
    const { map_name, map_lat, map_lng } = location?.state as MapInfo || {};

    /**
     * 住所情報取得済(マップページから遷移)
     */
    const [isMentionedAddress, setIsMentionedAddress] = useState(false);

    // サウナState
    const [saunas, setSaunas] = useState<NewSauna[]>([
        {
            id: "",
            facility_id: "",
            sauna_type: 0,
            temperature: 0,
            capacity: 1,
            rouryu_flg: "",
            bgm_flg: "",
            tv_flg: "",
            sauna_mat_flg: "",
        }
    ]);

    // 水風呂State
    const [waterBaths, setWaterBaths] = useState<WaterBath[]>([{
        id: "",
        facility_id: "",
        temperature: 0,
        capacity: 0,
    }]);

    // 施設State
    const [facility, setFacilityState] = useState<NewFacility>({
        id: "",
        // マップから登録の場合は自動入力
        name: map_name ? map_name : "",
        price: 0,
        address: {
            prefecture_id: 0,
            city_id: 0,
            city_name: "",
            street_name: "",
            latitude: 0,
            longitude: 0,
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
    const [address, setAddress] = useState<Address>({
        prefecture_id: 0,
        city_id: 0,
        city_name: "",
        street_name: "",
        latitude: 0,
        longitude: 0,
    });

    const [terms, setTerms] = useState<{ id: string; name: string; }[]>();

    // 初回ロード時
    useEffect(() => {

        // ログイン認証前であればログイン画面に遷移
        if (!isAuthenticated && IsNullOrUndefinedOrEmpty(cookies.userID)) {
            loginWithRedirect();
        }

        getAddressByLatLng();
    }, []);

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

    /**
     * 経度緯度情報から住所情報取得(マップから遷移)
     */
    const getAddressByLatLng = () => {

        // 経度緯度情報がなければ処理を終了する
        if (IsNullOrUndefinedOrEmpty(map_lat) || IsNullOrUndefinedOrEmpty(map_lng)) {
            return
        }

        try {
            // Geocode情報を取得
            const geocoder = new google.maps.Geocoder();

            geocoder.geocode({ location: { lat: map_lat, lng: map_lng } }, (results, status) => {
                if (status === 'OK' && results) {
                    console.log(results[0])

                    const addressInformationList = results[0].address_components;
                    const lastIndex = addressInformationList.length - 1;
                    const prefectureName = addressInformationList[lastIndex - 2].long_name;
                    const cityName = addressInformationList[lastIndex - 3].long_name;
                    let streetName = "";

                    // lastIndexから4を引いたindexから町村以下の情報になるのでindexが0になるまでループを行い、文字列を連結する
                    for (let i = lastIndex - 4; i >= 0; i--) {
                        streetName += addressInformationList[i].long_name;
                    }

                    const prefectureIndex = ConvertPrefectureNameToIndex(prefectureName);

                    // 都道府県IDと市区町村名から市区町村情報を取得
                    fetchCityInfo(prefectureIndex + 1, cityName)
                        .then((city: City) => {
                            setAddress({
                                ...address,
                                prefecture_id: prefectureIndex + 1,
                                city_id: city.id,
                                city_name: cityName,
                                street_name: streetName,
                                latitude: map_lat,
                                longitude: map_lng,
                            });

                            // 住所情報取得済に更新
                            setIsMentionedAddress(true);
                        })
                        .catch((error) => {
                            console.log(error)
                            setAddress({
                                ...address,
                                prefecture_id: prefectureIndex,
                                street_name: streetName,
                                latitude: map_lat,
                                longitude: map_lng,
                            });
                            toast.warning("市区町村情報が取得できなかったため、入力してください。")
                        })

                }
            })
        } catch (error) {
            toast.warning("住所情報が取得できなかったので手入力してください")
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        if (errors) {
            if (errors[name as keyof IsRequiredCheckFacilitySubmitForm]) setErrors({ ...errors, [name]: null })
        }

        // number型の更新の場合
        if (typeof facility[name as keyof NewFacility] === 'number') {
            const numValue = parseInt(value);
            setFacilityState((prevState) => (
                { ...prevState, [name]: numValue, }
            ));
            return
        }

        setFacilityState((prevState) => (
            { ...prevState, [name]: value, }
        ));
    };

    const handleSetSaunas = (updateIndex: number, name: string, value: string | number) => {
        console.log(name, value);
        // sauna個別コンポーネントから saunaState を受け取ってsaunasの更新を行うこうと、saunaStateを更新していない(レンダリングしていない)状態で更新するので、saunasの更新が正しく行われない。
        // 更新する項目と値を受け取って更新を行う。
        setSaunas((prevState) => (
            prevState.map((prevSaunaState, index) => (index === updateIndex ? { ...prevSaunaState, [name]: value } : prevSaunaState))
        ));
    };

    const handleSetWaterBath = (updateIndex: number, name: string, value: string | number) => {
        console.log(name, value);
        // waterBath個別コンポーネントから waterBathState を受け取ってwaterBathsの更新を行うこうと、waterBathStateを更新していない(レンダリングしていない)状態で更新するので、waterBathsの更新が正しく行われない。
        // 更新する項目と値を受け取って更新を行う。
        setWaterBaths((prevState) => (
            prevState.map((prevWaterBathState, index) => (index === updateIndex ? { ...prevWaterBathState, [name]: value } : prevWaterBathState))
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
        if (errors) {
            setErrors({ ...errors, [name]: null });
        }
    }

    // 保存前入力チェック
    const validateForm = () => {

        const newErrors: IsRequiredCheckFacilitySubmitForm = {
            name: "",
            prefecture: "",
            city: "",
            street: "",
            price: "",
        }

        if (!facility.name || facility.name === '') newErrors.name = '施設名を入力してください'
        if (!facility.address.prefecture_id) newErrors.prefecture = '都道府県を選択してください'
        if (!facility.address.city_id) newErrors.city = '市町村を選択してください'
        if (!facility.address.street_name || facility.address.street_name === '') newErrors.street = '町名番地を入力してください'
        if (!facility.price || facility.price <= 0) newErrors.price = '1円以上を入力してください'

        // サウナのバリデーションは保留
        const hasErrorSaunas = facility.saunas.filter((sauna) => !sauna.sauna_type || sauna.temperature <= 0 || sauna.capacity <= 0)

        return newErrors;
    }

    // errorListの位置までスクロールする
    const returnPositionFromTop = () => {
        const positionFromTop = document.getElementById('errors-list')?.offsetTop;
        window.scrollTo({
            top: positionFromTop,
            behavior: "auto",
        })
    }

    /**
     * 登録ボタン押下時に発火
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formErrors = validateForm();

        // エラーメッセージがあれば処理中断
        if (Object.values(formErrors).some((formError) => formError !== "")) {
            setErrors(formErrors);
            setValidated(true)
            returnPositionFromTop();
            return
        }

        const fetchPostFacility = async () => {
            try {
                const uri = BaseURI + "/facilities/new";
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
                    body: JSON.stringify({ 'facility': facility, 'user_id': cookies.userID, })
                }
                fetch(uri, requestOption)
                    .then((response) => {
                        if (!response.ok) {
                            // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                            const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                            navigate('/error', { state: errorInfo });
                            return;
                        }
                        return response.json();
                    })
                    .then((data: Facility) => {
                        console.log("登録成功", data)
                        toast.success('サウナ施設の新規登録が成功しました！');
                        navigate('/saunas/' + data.id);
                    })
            } catch (err) {
                // エラーメッセージを受け取りエラーページの引数を設定する
                const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                navigate('/error', { state: errorInfo });
                return;
            }
        }
        fetchPostFacility();
    }

    /**
     * 入力エラーを取得
     */
    const GetErrors = () => {
        if (errors) {
            return (
                <div>
                    <p>入力に不備があります</p>
                    {Object.values(errors).map((error) => {
                        return (
                            <div className="row">
                                ・{error}
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    /**
     *  都道府県と市区町村名から市区町村IDを取得する
     * */
    const fetchCityInfo = async (prefectureID: number, cityName: string) => {
        try {
            const uri = BaseURI + "/prefecture/" + prefectureID + "/cities/" + cityName;
            console.log(uri)
            const requestOption: RequestInit = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const city = await fetch(uri, requestOption)
                .then((response) => {
                    if (!response.ok) {
                        // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                        const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                        navigate('/error', { state: errorInfo });
                        return;
                    }
                    return response.json();
                })
                .then((cityData: City) => {
                    // 取得した市区町村リストを設定する
                    return cityData;
                })
            return city;
        }
        catch (err) {
            // エラーメッセージを受け取りエラーページの引数を設定する
            const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
            navigate('/error', { state: errorInfo });
            return;
        }
    }

    return (
        <Fragment>
            <div className="container p-5">
                <div className="row py-5">
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center py-3">サウナ施設を登録する</h2>
                        <Alert variant="danger" show={validated} id="errors-list">
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
                        <Form.Label className="py-2" htmlFor="">住所</Form.Label>
                        {/* 住所情報取得済(マップページから遷移)の場合は固定にするために入力ボックスとテキストボックスを切り替える */}
                        <AddressState.Provider value={{ address, setAddress }}>
                            {
                                isMentionedAddress
                                    ?
                                    <AddressTextBox />
                                    :
                                    <SelectAddress />
                            }
                        </AddressState.Provider>
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
                                    return (
                                        <SaunaSubmitComponent sauna={sauna} index={index} handleDeleteSauna={handleDeleteSauna} handleSetSaunas={handleSetSaunas} key={index} />
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
                                    return (
                                        <WaterBathSubmitComponent waterBath={waterBath} index={index} handleDeleteWaterBath={handleDeleteWaterBath} handleSetWaterBath={handleSetWaterBath} key={index} />
                                    )
                                })}
                            </div>
                        </div>
                        <TermsCheckBox terms={terms} setTerms={setTerms} />
                        <Button type="submit" variant="primary" className="submit-btn my-3">
                            保存する
                        </Button>
                    </Form>
                </div>
            </div>
        </Fragment >
    )
}