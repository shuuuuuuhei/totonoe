import React, { Component, Fragment } from 'react'
import { Profile } from '../@types/Profile'
import { ArticleList } from '../components/ArticleList'
import { ProfileComponent } from '../components/ProfileComponent'
import { useFetchUserInfo } from '../hooks/useFetchUserProfile'


export const ProfilePage = () => {
    const profile: Profile = useFetchUserInfo();
    return (
        <Fragment>
            <ProfileComponent profile={profile}/>
            <ArticleList/>
        </Fragment>
    )
}