import React, { Component, Fragment, useState, useEffect, ChangeEvent } from 'react'
import { Form } from 'react-bootstrap'
import { Profile } from '../@types/Profile';
import { ConvertErrorMessageToErrorPageProps, UndefinedOrNullConvertToEmpty } from '../common/Convert';
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { Button } from '@mui/material';
import { IsNullOrUndefinedOrEmpty } from '../common/Check';
import { toast } from 'react-toastify';
import { ErrorPageProps } from '../@types/ErrorPage';
import { useNavigate } from 'react-router-dom';

export const SettingProfileComponent = () => {
    const [introduction, setIntroduction] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [lastName, setLastName] = useState("");
    const { getAccessTokenSilently } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    /**
     * プロフィール情報取得
     */
    const getFetchProfile = async () => {
        const uri = "http://localhost:4000/profile";
        const accessToken = await getAccessTokenSilently({
            audience: 'https://totonoe-app.com',
            scope: 'read:posts',
        });

        if (!accessToken) {
            throw Error("アクセストークンがありません。");
        }

        const requestOption: RequestInit = {
            method: "POST",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                "User-ID": cookies.userID,
            },
            body: JSON.stringify({
                user_id: cookies.userID,
            })
        };
        await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                    const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                    navigate('/error', { state: errorInfo });
                    return;
                }
                return response.json();
            })
            .then((resData: Profile) => {
                setFamilyName(resData.family_name)
                setLastName(resData.last_name)
                setIntroduction(resData.introduction)
                console.log(resData);
            })
            .catch(err => {
                // エラーメッセージを受け取りエラーページの引数を設定する
                const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                navigate('/error', { state: errorInfo });
                return;
            });
    }

    /**
     * 姓変更ハンドラ
     * @param event 
     */
    const handleFamilyNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newFamilyName = event.target.value;
        setFamilyName(newFamilyName);
    }

    /**
     * 名変更ハンドラ
     * @param event 
     */
    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newLastName = event.target.value;
        setLastName(newLastName);
    }
    /**
     * 自己紹介変更ハンドラ
     * @param event 
     */
    const handleIntroductionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newIntroduction = event.target.value;
        setIntroduction(newIntroduction);
    }


    useEffect(() => {
        console.log("test");

        //プロフィール情報の取得
        getFetchProfile();
    }, [])

    /**
     * プロフィール情報更新ハンドラ
     */
    const handleUpdateProfile = () => {
        try {

            // チェック処理
            //const err = checkUpdateParams();

            // if (err) {
            //     throw err;
            // }
            //更新処理
            updateFetchProfile();

        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 更新パラメータチェック処理
     */
    const checkUpdateParams = () => {

        if (IsNullOrUndefinedOrEmpty(familyName)) {
            return new Error("姓がない");
        }
        if (IsNullOrUndefinedOrEmpty(lastName)) {
            return new Error("名がない");
        }
        if (IsNullOrUndefinedOrEmpty(introduction)) {
            return new Error("自己紹介がない");
        }

        return
    }


    /**
     * プロフィール更新処理
     */
    const updateFetchProfile = async () => {
        const uri = "http://localhost:4000/profile";
        const accessToken = await getAccessTokenSilently({
            audience: 'https://totonoe-app.com',
            scope: 'read:posts',
        });

        if (!accessToken) {
            throw Error("アクセストークンがありません。");
        }

        const requestOption: RequestInit = {
            method: "PUT",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                "User-ID": cookies.userID,
            },
            body: JSON.stringify({
                user_id: cookies.userID,
                family_name: familyName,
                last_name: lastName,
                introduction: introduction,
            })
        };
        await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                    const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                    navigate('/error', { state: errorInfo });
                    return;
                }
                return response.json();
            })
            .then((resData: Profile) => {
                toast.success('プロフィールを更新しました！');

            })
            .catch(err => {
                // エラーメッセージを受け取りエラーページの引数を設定する
                const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                navigate('/error', { state: errorInfo });
                return;
            });
    }

    return (
        <Fragment>
            <div className="setting-top">
                <h4>公開プロフィール</h4>
            </div>
            <div className="profile-name row py-3">
                <Form.Label>名前</Form.Label>
                <Form.Group className="temperature col-6">
                    <Form.Control
                        type="text"
                        className="input-sm"
                        placeholder="姓"
                        value={familyName}
                        onChange={handleFamilyNameChange}
                    />
                    <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="temperature col-6">
                    <Form.Control
                        type="text"
                        className="input-sm"
                        placeholder="名"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                    <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                </Form.Group>
            </div>
            <div className="profile-name row py-3">
                <Form.Label>自己紹介</Form.Label>
                <Form.Group className="form-content">
                    <Form.Control
                        as="textarea"
                        className="input-sm"
                        name="Content"
                        required={true}
                        rows={10}
                        value={introduction}
                        onChange={handleIntroductionChange}
                    />
                </Form.Group>
            </div>
            <Button
                color='primary'
                variant='outlined'
                className="col-3 my-2"
                onClick={handleUpdateProfile}
            >
                更新
            </Button>
        </Fragment>
    )
}