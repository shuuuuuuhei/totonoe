import React, { Component, Fragment, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

/**
 * 権限区分：1 (投稿可能)
 */
const APPLY_AUTH_KB = '1';

/**
 * 権限区分：999 (管理者権限)
 */
const ADMIN_AUTH_KB = '999';

/**
 * 権限申請状態：1 (申請中)
 */
const AUTH_REQUESTED_STATE = '1';
/**
 * 権限申請状態：2 (承認済み)
 */
const AUTH_AUTHORIZED_STATE = '2';

/**
 * 権限申請状態：3 (承認棄却)
 */
const AUTH_UNAUTHORIZED_STATE = '3';

type authState = {
    authKB: string,
    requestState: string,
}

export const AccountSettingComponent = () => {
    const { getAccessTokenSilently } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [authState, setAuthState] = useState<authState>();

    useEffect(() => {

        // 権限情報取得
        getAuthKB();
    }, []);

    /**
     * 権限状態取得
     */
    const getAuthKB = async () => {
        const userID = cookies.userID;
        const uri = "http://localhost:4000/authorization" + userID;
        const accessToken = await getAccessTokenSilently({
            audience: 'https://totonoe-app.com',
            scope: 'read:posts',
        });

        if (!accessToken) {
            throw Error("アクセストークンがありません。");
        }

        const requestOption: RequestInit = {
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                "User-ID": userID,
            },
        };
        await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    const err = new Error;
                    err.message = "権限情報が取得できませんでした" + response.text + response.status;
                    throw err;
                }
                return response.json();
            })
            .then((resData: authState) => {
                setAuthState(resData)
            })
            .catch(err => {
                console.log(err)
            });
    }

    /**
     * 権限申請処理ハンドラ
     */
    const handleSubmitApply = async () => {

        const uri = "http://localhost:4000/authorization/post/facilities";
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
                auth_kb: APPLY_AUTH_KB,
            })
        };
        await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    const err = new Error;
                    err.message = "申請登録ができませんでした" + response.text + response.status;
                    throw err;
                }
                return response.json();
            })
            .then(() => {
                toast.success('施設投稿権限を申請が完了しました。申請承認までお待ちください。');
            })
            .catch(err => {
                console.log(err)
            });
    }


    console.log("test:", authState)
    /**
     * 投稿権限承認済み
     */
    const isAuthorized = () => {

        // 管理者権限
        if (authState.authKB === ADMIN_AUTH_KB) {
            return true;
        }

        // 権限状態が存在かつ、申請状態が申請済みである
        return authState.authKB && authState.requestState === AUTH_AUTHORIZED_STATE;
    }

    console.log("isAuthorized", isAuthorized);
    return (
        <Fragment>
            <div className="row">
                <h4>アカウント</h4>
            </div>
            <div className="user-name row py-3">
                <Form.Label>アカウント名</Form.Label>
                <Form.Group className="">
                    <Form.Control
                        type="text"
                        className="input-sm"
                        placeholder=""
                    />
                    <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                    <Button
                        color='primary'
                        variant='outlined'
                        className="col-3 my-2"
                        size="small"
                    >
                        更新
                    </Button>
                </Form.Group>
            </div>
            <div className="row apply-auth py-3">
                <div className="facility-submit row">
                    <div className="top">
                        施設投稿権限申請
                    </div>
                    <div className="row">
                        <p style={{ color: "gray" }}>
                            未登録のサウナ施設の登録を行うためには、事前に施設投稿権限の申請が必要です。
                            <br />
                            施設投稿権限申請がアプリ管理者に承認された場合は、施設投稿が可能になります。
                            <br />
                            施設登録ユーザになってTotonoeアプリを盛り上げましょう！
                        </p>
                    </div>
                    {
                        isAuthorized ?
                            "a"
                            :
                            <Button
                                color='primary'
                                variant='outlined'
                                className="col-3"
                                onClick={handleSubmitApply}
                            >
                                施設投稿権限を申請する
                            </Button>
                    }
                </div>
            </div>
            <div className="row apply-auth py-3">
                <div className="facility-submit row">
                    <div className="top">
                        アカウント削除
                    </div>
                    <Button
                        color='warning'
                        size='small'
                        className="col-3"
                        variant='outlined'>
                        アカウントを削除する
                    </Button>
                </div>
            </div>
        </Fragment>
    )
}