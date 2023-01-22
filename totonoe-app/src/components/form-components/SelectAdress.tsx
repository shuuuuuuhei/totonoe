import React, { Component, Fragment, useState, ChangeEvent, useContext } from 'react'
import { Form } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { Input } from './Input';
import { prefectureList } from '../../utils/constants';
import { AddressState } from '../Facility/FacilitySubmitComponent';
import { toast } from 'react-toastify';
import { ErrorPageProps } from '../../@types/ErrorPage';
import { useNavigate } from 'react-router-dom';

const defaultIndex = 0;
type City = {
    id: number,
    name: string,
}

export const SelectAddress = () => {

    const navigate = useNavigate();
    const { address, setAddress } = useContext(AddressState);
    const [cityList, setCityList] = useState<City[]>([{
        id: address?.city_id,
        name: address?.city_name,
    }]);

    /**
     * 都道府県変更ハンドラ
     * @param event 
     */
    const handlePrefecture = (event: ChangeEvent<HTMLSelectElement>) => {

        try {

            // 選択した都道府県インデックスを取得
            const prefectureSelectedIndex = parseInt(event.target.value);

            // 都道府県インデックスを更新
            setAddress({
                ...address,
                prefecture_id: prefectureSelectedIndex,
            });
            // if (props.error?.prefecture) {
            //     // エラーをクリアする
            //     props.handleSetAddressErrorNull("prefecture");
            // }

            // 選択した都道府県インデックス+1(都道府県ID)を指定し市区町村を取得する
            fetchCityInfo(prefectureSelectedIndex + 1);

        } catch (error) {
            toast.error(error)
        }
    }

    /**
     *  選択した都道府県から市区町村を取得する 
     * */
    const fetchCityInfo = async (prefectureID: number) => {
        try {
            const uri = "http://localhost:4000/prefecture/" + prefectureID + "/cities";
            console.log(uri)
            const requestOption: RequestInit = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
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
                .then((data: City[]) => {
                    // 取得した市区町村リストを設定する
                    setCityList(data);
                })
        }
        catch (err) {
            return err;
        }
    }


    /**
     * 市区町村変更ハンドラ
     * @param event 
     */
    const handleCity = (event: ChangeEvent<HTMLSelectElement>) => {

        // 都道府県が指定されておらず、市区町村リストがない場合は処理終了
        if (!cityList) {
            return
        }

        // 選択した市区町村インデックスを取得
        const index = parseInt(event.target.value);

        // if (props.error?.city) {
        //     // エラーをクリアする
        //     props.handleSetAddressErrorNull("city");
        // }

        // 市町村ID（コンテキスト)の更新を行う
        setAddress((prevState) => ({
            ...prevState,
            city_id: cityList[index].id,
        }));
    }

    /**
     * 番地名称変更ハンドラ
     * @param event 
     */
    const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        // if (props.error?.street) {
        //     // エラーをクリアする
        //     props.handleSetAddressErrorNull("street");
        // }

        // 入力した番地名称を取得
        const street = event.currentTarget.value;

        // 番地名称の更新を行う
        setAddress((prevState) => ({
            ...prevState,
            street_name: street,
        }))
    }

    return (
        <Fragment>
            <div className="py-3">
                <label htmlFor="">都道府県</label>
                <div className="py-1">
                    <Form.Group>
                        <Form.Select aria-label="Default select example" onChange={handlePrefecture} value={address.prefecture_id.toString()}
                        // isInvalid={!!props.error?.prefecture}
                        >
                            <option className="d-none" value="">都道府県を選択</option>
                            {prefectureList.map((prefecture, index) => {
                                return (
                                    <option value={index.toString()} key={index}>{prefecture}</option>
                                )
                            })}
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                            {/* {props.error?.prefecture} */}
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <label htmlFor="">市区町村</label>
                <div className="py-1">
                    <Form.Group>
                        <Form.Select aria-label="Default select example" onChange={handleCity}
                        // isInvalid={!!props.error?.city}
                        >
                            <option className="d-none" value="">市町村を選択</option>
                            {cityList?.map((city, index) => {
                                return (
                                    <option value={index.toString()} key={index}>{city.name}</option>
                                )
                            })}
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                            {/* {props.error?.city} */}
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
                            value={address?.street_name}
                            onChange={handleStreetChange}
                            placeholder="町名番地を入力"
                        // isInvalid={!!props.error?.street}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {/* {props.error?.street} */}
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
            </div>
        </Fragment>
    )
}