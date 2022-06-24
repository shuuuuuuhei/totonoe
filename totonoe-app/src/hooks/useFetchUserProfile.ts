import { useAuth0 } from '@auth0/auth0-react';
import { rejects } from 'assert';
import { resolve } from 'path';
import React, { Component, useEffect, useState } from 'react'
import { parseJsonSourceFileConfigFileContent } from 'typescript';
import { Profile } from '../@types/Profile'

export const useFetchUserInfo = (): Profile | Error => {
    const {getAccessTokenSilently} = useAuth0();
    const [profile, setProfile] = useState<Profile>();
    const [error, setError]  = useState<any>();

    const fetchProfile = async () => {
        try {
            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            })
            const uri = "http://localhost:4000/profile"
            const requestOption: RequestInit = {
                method: "POST",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    'user_id': "this is test",
                })
            };
            const res = await fetch(uri, requestOption)
                .then((response) => {
                        console.log("this is in fethc")
                        if(response.status !== 200) {
                            const err = new Error;
                            console.log(response)
                            err.message = "プロフィールが見つかりませんでした。" + response.status;
                            throw err;
                        }
                        return response.json();
                    })
                    .then((resData) => {
                        setProfile(resData);
                    })
                return res;
            }
        catch(error) {
            console.log("error",error);
            setError(error);
        }
    }
    fetchProfile()

    if(profile) {
        return profile;
    }
    return(
        new Error(error)
    )
}