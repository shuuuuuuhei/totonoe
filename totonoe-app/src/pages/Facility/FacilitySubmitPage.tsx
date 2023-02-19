import React, { Component, Fragment, useEffect } from 'react'
import { Input } from '../../components/form-components/Input'
import { FacilitySubmitComponent } from '../../components/Facility/FacilitySubmitComponent'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ErrorPageProps } from '../../@types/ErrorPage';
import { IsNullOrUndefinedOrEmpty } from '../../common/Check';
import { ConvertErrorCodeToErrorMessage } from '../../common/Convert';
import { BaseURI } from '../../utils/constants';

export const SaunaSubmitPage = () => {

    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        fetchGetMapSubmitAuth();
    }, [])

    // 施設管理者か判断する
    const fetchGetMapSubmitAuth = async () => {

        let accessToken = "";
        try {
            accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            })
            if (IsNullOrUndefinedOrEmpty(cookies.userID)) {
                throw new Error("クッキー情報がありません")
            }
        } catch (error) {
            const errorInfo: ErrorPageProps = ConvertErrorCodeToErrorMessage(403);
            navigate('/error', { state: errorInfo });
            return;
        }
        const uri = BaseURI + "/authorization/check";
        const requestOption: RequestInit = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            // ユーザーIDと権限区分(施設管理者：1)をリクエストに含める
            body: JSON.stringify({ 'user_id': cookies.userID, 'auth_kb': '1' })
        }
        await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    // エラーメッセージを受け取りエラーページの引数を設定する
                    // 施設管理者でない場合はエラーページ(403)に遷移する
                    const errorInfo: ErrorPageProps = { statusCode: response.status, message: "サウナ施設管理者ではありませんので、設定ページより「施設投稿権限申請」を行ってください。" };
                    navigate('/error', { state: errorInfo });
                    return;
                }
                return;
            })
    }
    return (
        <Fragment>
            <FacilitySubmitComponent />
        </Fragment>
    )
}