import React, { Component, useEffect } from 'react'
import { Profile } from '../@types/article/Profile'

const url: string = 'http://localhost:4000/articles'

export const useFetchUserInfo = (): Profile => {
    let profile: Profile = {
        id:"2",
        name: "山田",
        followerCount: 200,
        following: 500,
        introduce: ""
    };

    // useEffect(() => {
    //     fetch(url)
    //     .then((response) => {
    //         if(response.status !== 200) {
    //             const err = new Error;
    //             err.message = "Invaild response code" + response.status;
    //             throw err;
    //         }
    //         return response.json();
    //     })
    //     .then((resData) => {
    //         // チェック処理を行いたい
    //         profile = resData;
    //     })
    //     .catch(err => {
    //         console.log("Error", err);
    //         return Error;
    //     })
    // }, [])
    return profile;
}