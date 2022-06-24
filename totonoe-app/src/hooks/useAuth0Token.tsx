import { useAuth0 } from '@auth0/auth0-react'
import React, { Component, useEffect, useState } from 'react'

export const useAuth0Token = () => {
    const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
    const [accessToken, setAccessToken] = useState<string|null>(null);

    useEffect(() => {
        const fetchToken = async () => {
            // JWTを取得する
            setAccessToken(await getAccessTokenSilently());
        };

        // ログイン済み
        if(isAuthenticated) {
            fetchToken();
        }
    }, [isAuthenticated, user?.sub])

    return accessToken;
}