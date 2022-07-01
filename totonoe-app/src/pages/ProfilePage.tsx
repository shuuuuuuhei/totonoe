import { useAuth0 } from '@auth0/auth0-react'
import React, { Component, Fragment, useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom'
import { Profile } from '../@types/Profile'
import { ArticleList } from '../components/ArticleList'
import { ProfileComponent } from '../components/ProfileComponent'



export const ProfilePage = () => {
    return (
        <Fragment>
            <ProfileComponent />
            <ArticleList/>
        </Fragment>
    )
}