import React, { Component, Fragment, useState, ChangeEvent } from 'react'
import { Form } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { Input } from './Input';

type selectAddressProps = {
    address: {
        prefectureID: number,
        cityID: number,
        street: string,

    }
    setAddress: React.Dispatch<React.SetStateAction<{
        prefectureID: number;
        cityID: number;
        street: string;
    }>>
}

type City = {
    id: number,
    name: string,
}

export const SelectAddress = (props: selectAddressProps) => {
    const {getAccessTokenSilently} = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();
    
    const [prefectureIndex, setPrefectureIndex] = useState(0);
    const [cityList, setCityList] = useState<City[]>();
    const [cityIndex, setCityIndex] = useState(0);
    
    const prefectureList = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];


    const handlePrefecture = (event: ChangeEvent<HTMLSelectElement>) => {
        const index = parseInt(event.target.value);
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
                            prefectureID: prefectureID,
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
        console.log(index)
        setCityIndex(index);
        
        if(!cityList) {
            return
        }

        // 市町村ID（引数)の更新を行う
        props.setAddress((prevState) => ({
            ...prevState,
            cityID: cityList[index].id,
        }));
    }

    const handleStreetChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const street = event.currentTarget.value;

        // 住所詳細の更新を行う
        props.setAddress((prevState) => ({
            ...prevState,
            street: street,
        }))
    }

    return(
        <Fragment>
            <div className="py-3">
                <label htmlFor="">都道府県</label>
                <div className="py-1">
                    <Form.Select aria-label="Default select example" onChange={handlePrefecture} defaultValue="都道府県を選択">
                        <option className="d-none" value="">都道府県を選択</option>
                        {prefectureList.map((prefecture, index) => {
                            return(
                                <option value={index.toString()}>{prefecture}</option>
                            )
                        })}
                    </Form.Select>
                </div>
                <label htmlFor="">市区町村</label>
                <div className="py-1">
                    <Form.Select aria-label="Default select example" onChange={handleCity}>
                        <option className="d-none" value="">市町村を選択</option>
                        {cityList?.map((city, index) => {
                            return(
                                <option value={index.toString()}>{city.name}</option>
                            )
                        })}
                </Form.Select>
                </div>
                <label htmlFor="">町名番地</label>
                <div className="py-1">
                    <Input 
                            type="text"
                            className="input-sm"
                            name="name"
                            value={props.address?.street}
                            onChange={handleStreetChange}
                            placehodlder="町名番地を入力"
                            errorDiv=""
                            errorMsg=""
                    />
                </div>
            </div>
        </Fragment>
    )
}