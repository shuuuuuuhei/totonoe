import React, { Component, Fragment } from 'react'
import {Navigate} from 'react-router-dom'
import { Profile } from '../@types/Profile'
import { ArticleList } from '../components/ArticleList'
import { ProfileComponent } from '../components/ProfileComponent'
import { useFetchUserInfo } from '../hooks/useFetchUserProfile'


export const ProfilePage = () => {
    const profile: Profile|Error = useFetchUserInfo();
    if(profile instanceof Error) {
        console.log("プロフィール取得に失敗")
        return <Navigate to="/"/>
    }
    return (
        <Fragment>
            <ProfileComponent profile={profile}/>
            <ArticleList/>
        </Fragment>
    )
}