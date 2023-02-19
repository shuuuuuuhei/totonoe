import React, { Fragment, useEffect, useState } from 'react'
import { BaseURI } from '../../utils/constants';
import { MapComponent } from '../../components/Map/MapComponent'
import { useCookies } from 'react-cookie';
import { useAuth0 } from '@auth0/auth0-react';
import { IsNullOrUndefinedOrEmpty } from '../../common/Check';
import { useNavigate } from 'react-router-dom';

export const SearchMapPage = () => {

    const [isMapSubmitAuth, setIsMapSubmitAuth] = useState(false);
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
            // 未ログインの場合はエラーになるが正常終了する(施設登録が不可であってもマップは表示するため)
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
                    // 権限がない場合もレスポンスエラーになるがエラー処理は行わない(施設登録が不可であってもマップは表示するため)
                    return;
                }
                // 施設管理者なので状態を更新する
                setIsMapSubmitAuth(true);
                return;
            })
    }

    return (
        <Fragment>
            <MapComponent isMapSubmitAuth={isMapSubmitAuth} />
        </Fragment>
    )
}