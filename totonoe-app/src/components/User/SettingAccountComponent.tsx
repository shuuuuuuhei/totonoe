import React, { Component, Fragment, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { Button, Chip } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { AuthState } from '../../@types/Authorization';
import { APPLY_AUTH_KB, ADMIN_AUTH_KB, AUTH_REQUESTED_STATE, BaseURI, GetTokenSilentlyParams } from '../../utils/constants';
import { isAdminUser, isAppliedUser, isApplyingUser, IsNullOrUndefinedOrEmpty, isUnAuthorizedUser, isGeneralUser } from '../../common/Check';
import { ManagementClient } from 'auth0';
import { ErrorPageProps } from '../../@types/ErrorPage';
import { useNavigate } from 'react-router-dom';
import { ConvertErrorMessageToErrorPageProps } from '../../common/Convert';

// ButtonState
const generalState = 0;
const adminState = 1;
const appliedState = 2;
const applyingState = 3;
const unApplied = 4;
export const SettingAccountComponent = () => {
    const { getAccessTokenSilently, logout } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [authState, setAuthState] = useState<AuthState>();
    const navigate = useNavigate();
    useEffect(() => {

        // 権限情報取得
        getAuthorization();

    }, []);

    /**
     * 権限情報取得
     */
    const getAuthorization = async () => {
        const userID = cookies.userID;
        const uri = BaseURI + "/authorization";
        const accessToken = await getAccessTokenSilently({
            authorizationParams: GetTokenSilentlyParams
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
                "User-ID": userID,
            },
            body: JSON.stringify({ 'user_id': userID, })
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
            .then((resData: AuthState) => {
                setAuthState(resData)
            })
            .catch(err => {
                // エラーメッセージを受け取りエラーページの引数を設定する
                const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                navigate('/error', { state: errorInfo });
                return;
            });
    }

    /**
     * 権限申請処理ハンドラ
     */
    const handleSubmitApply = async () => {

        const uri = BaseURI + "/authorization/post/facilities";
        const accessToken = await getAccessTokenSilently({
            authorizationParams: GetTokenSilentlyParams
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
                    // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                    const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                    navigate('/error', { state: errorInfo });
                    return;
                }
                return response.json();
            })
            .then(() => {
                toast.success('施設投稿権限を申請が完了しました。申請承認までお待ちください。');
            })
            .catch(err => {
                // エラーメッセージを受け取りエラーページの引数を設定する
                const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                navigate('/error', { state: errorInfo });
                return;
            });
    }

    if (IsNullOrUndefinedOrEmpty(authState)) {
        return (
            <div>
                権限情報取得中
            </div>
        )
    }

    /**
    * アカウント削除処理
    */
    const handleAccountDeleteButton = async () => {
        console.log("テスト");
        const userID = cookies.userID;

        if (IsNullOrUndefinedOrEmpty(userID)) {
            console.log("ユーザーIDなし");
            return;
        }

        const accessToken = await getAccessTokenSilently({
            authorizationParams: GetTokenSilentlyParams
        });
        const uri = BaseURI + "/account";
        const requestOption: RequestInit = {
            method: "DELETE",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                "User-ID": userID,
            },
            body: JSON.stringify({ 'user_id': userID, })
        };
        fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                    const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                    navigate('/error', { state: errorInfo });
                    return;
                }
            })
            .then(() => {
                removeCookie("userID", { path: '/' });
                logout({ logoutParams: { returnTo: window.location.origin } });
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
                        color='warning'
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
                    <div className="col-3">
                        {/* 管理者表示 */}
                        {isAdminUser(authState) &&
                            <Chip
                                label="管理者"
                                color="warning"
                            />
                        }
                        {isAppliedUser(authState) &&
                            <Chip
                                label="申請済"
                                color="warning"
                            />
                        }
                        {isApplyingUser(authState) &&
                            <Chip
                                label="申請中"
                                color="warning"
                            />
                        }
                        {isUnAuthorizedUser(authState) &&
                            <>
                                <Chip
                                    label="申請が棄却されました"
                                    color="warning"
                                />
                                <Button
                                    color='warning'
                                    variant='outlined'
                                    className="col-3"
                                    onClick={handleSubmitApply}
                                >
                                    施設投稿権限を申請する
                                </Button>
                            </>
                        }
                        {isGeneralUser(authState)
                            &&
                            <Button
                                color='warning'
                                variant='outlined'
                                onClick={handleSubmitApply}
                            >
                                施設投稿権限を申請する
                            </Button>
                        }
                    </div>

                </div>
            </div>
            <div className="row apply-auth py-3">
                <div className="facility-submit row">
                    <div className="top">
                        アカウント削除
                    </div>
                    <Button
                        color='error'
                        size='small'
                        className="col-3"
                        variant='outlined'
                        onClick={handleAccountDeleteButton}
                    >
                        アカウントを削除する
                    </Button>
                </div>
            </div>
        </Fragment>
    )
}