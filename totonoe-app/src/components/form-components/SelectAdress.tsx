import React, { Component, Fragment, useState } from 'react'
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';

type City = {
    id: number,
    name: string,
}
export const SelectAddress = () => {
    const {getAccessTokenSilently} = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();
    
    const [prefectureIndex, setPrefectureIndex] = useState(0);
    const [cityList, setCityList] = useState<City[]>();
    const [cityIndex, setCityIndex] = useState(0);
    
    const prefectureList = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];

    const handlePrefecture = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const index = parseInt(event.currentTarget.id);
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
                        setCityList(data)
                    })
            }
            catch(err) {
                console.log("エラー",err)
            }
        }
        fetchCityInfo();
    }

    const handleCity = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const index = parseInt(event.currentTarget.id);
        setCityIndex(index)
    }

    return(
        <Fragment>
            <div className="row py-3">
                <label htmlFor="">都道府県</label>
                <div className="col-12">
                    <DropdownButton
                            as={ButtonGroup}
                            id="dropdown-menu-align-responsive-1"
                            title={prefectureList[prefectureIndex]}
                            onChange={handlePrefecture}
                        >
                        <div className="row">    
                            {prefectureList.map((prefecture, index) => {
                                return(
                                    <div className="col-3 px-3">
                                        <Dropdown.Item as="button" onClick={handlePrefecture} id={index.toString()}>{prefecture}</Dropdown.Item>
                                    </div>
                                )
                            })}
                        </div>
                    </DropdownButton>
                </div>
                <label htmlFor="">市町村</label>
                <div className="col-12">
                    <DropdownButton
                        as={ButtonGroup}
                        id="dropdown-menu-align-responsive-1"
                        title={!cityList ? <>都道府県を選択</> : cityList[cityIndex].name }
                        onChange={handlePrefecture}
                    >
                        <div className="row">
                            {cityList?.map((city, index) => {
                                return(
                                    <div className="col-3 px-3">
                                        <Dropdown.Item as="button" id={index.toString()} onClick={handleCity}>{city.name}</Dropdown.Item>
                                    </div>
                                )
                            })}
                        </div>
                    </DropdownButton>
                </div>
            </div>
        </Fragment>
    )
}