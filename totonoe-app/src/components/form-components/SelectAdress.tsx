import React, { Component, Fragment, useState, ChangeEvent } from 'react'
import { Form } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { Input } from './Input';
import { prefectureList } from '../../utils/constants';

type selectAddressProps = {
    address: {
        prefecture_id: number,
        city_id: number,
        street_name: string,
    }
    setAddress: React.Dispatch<React.SetStateAction<{
        prefecture_id: number;
        city_id: number;
        street_name: string;
    }>>
    error: {
        prefecture: string|undefined, 
        city:string|undefined, 
        street:string|undefined,
    }|undefined,
    handleSetAddressErrorNull: (name: string) => void,
}

type City = {
    id: number,
    name: string,
}

/**
* 住所入力用コンポーネント
* @param address 入力した住所の状態を管理
* @param setAddress 入力した住所を更新
* @param error 入力エラーの状態を管理 
* @return 住所入力用コンポーネント
*/

export const SelectAddress = (props: selectAddressProps) => {
    const {getAccessTokenSilently} = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();
    
    const [prefectureIndex, setPrefectureIndex] = useState(0);
    const [cityList, setCityList] = useState<City[]>();
    const [cityIndex, setCityIndex] = useState(0);

    const handlePrefecture = (event: ChangeEvent<HTMLSelectElement>) => {
        const index = parseInt(event.target.value);

        if(props.error?.prefecture) {
            // エラーをクリアする
            props.handleSetAddressErrorNull("prefecture");
        }

        setPrefectureIndex(index);
        setCityIndex(0);
        const prefectureID = index + 1;
        const fetchCityInfo = async() => {
            try {
                const uri = "http://localhost:4000/prefecture/"+prefectureID+"/cities";
                console.log(uri)
                const requestOption: RequestInit = {
                method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
                fetch(uri, requestOption)
                    .then((response) => {
                        if(!response.ok) {
                            throw(new Error("市町村情報の取得に失敗しました。"+response.status));
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setCityList(data);

                        // prefectureID(引数)の更新を行う
                        props.setAddress((prevState) => ({
                            ...prevState,
                            prefecture_id: prefectureID,
                        }));
                    })
            }
            catch(err) {
                console.log("エラー",err)
            }
        }
        fetchCityInfo();
    }

    const handleCity = (event: ChangeEvent<HTMLSelectElement>) => {
        const index = parseInt(event.target.value);
        
        if(props.error?.city) {
            // エラーをクリアする
            props.handleSetAddressErrorNull("city");
        }

        setCityIndex(index);
        
        if(!cityList) {
            return
        }

        // 市町村ID（引数)の更新を行う
        props.setAddress((prevState) => ({
            ...prevState,
            city_id: cityList[index].id,
        }));
    }

    const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const street = event.currentTarget.value;

        if(props.error?.street) {
            // エラーをクリアする
            props.handleSetAddressErrorNull("street");
        }

        // 住所詳細の更新を行う
        props.setAddress((prevState) => ({
            ...prevState,
            street_name: street,
        }))
    }

    return(
        <Fragment>
            <div className="py-3">
                <label htmlFor="">都道府県</label>
                <div className="py-1">
                    <Form.Group>
                        <Form.Select aria-label="Default select example" onChange={handlePrefecture} defaultValue="都道府県を選択" isInvalid={!!props.error?.prefecture}>
                            <option className="d-none" value="">都道府県を選択</option>
                            {prefectureList.map((prefecture, index) => {
                                return(
                                    <option value={index.toString()} key={index}>{prefecture}</option>
                                )
                            })}
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                            {props.error?.prefecture}
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <label htmlFor="">市区町村</label>
                <div className="py-1">
                    <Form.Group>
                        <Form.Select aria-label="Default select example" onChange={handleCity} isInvalid={!!props.error?.city}>
                            <option className="d-none" value="">市町村を選択</option>
                            {cityList?.map((city, index) => {
                                return(
                                    <option value={index.toString()} key={index}>{city.name}</option>
                                )
                            })}
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                            {props.error?.city}
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <label htmlFor="">町名番地</label>
                <div className="py-1">
                    <Form.Group>
                        <Form.Control
                                type="text"
                                className="input-sm"
                                name="name"
                                value={props.address?.street_name}
                                onChange={handleStreetChange}
                                placeholder="町名番地を入力"
                                isInvalid={!!props.error?.street}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {props.error?.street}
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
            </div>
        </Fragment>
    )
}