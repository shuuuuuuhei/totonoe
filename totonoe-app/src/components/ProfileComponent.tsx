import React, { Fragment, useEffect, useState, VFC } from 'react';
import { Button } from 'react-bootstrap';
import '../style/Profile.css'
import {MdInsertEmoticon} from 'react-icons/md'
import {CgDetailsMore} from 'react-icons/cg'
import { Profile } from '../@types/Profile';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

type profileProps = {
    profile: Profile|undefined
    setProfile: React.Dispatch<React.SetStateAction<Profile | null | undefined>>
}
export const ProfileComponent: React.VFC<profileProps> = ({profile, setProfile}) => {
    const {getAccessTokenSilently, user} = useAuth0();

    const handleFollow = async() => {
        if(!user) {
            return
        }

        try {
            const uri = "http://localhost:4000/follow";
            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            })
            const requestOption: RequestInit = {
            method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({'user_id': user.sub?.split('|').at(1), "following_id": profile?.UserID})
            }
            fetch(uri, requestOption)
            .then((response) => response.json())
            .then(data => {
                setProfile((prevState) => (
                    prevState ? { ...prevState, IsFollowing: true, followed_count: prevState.followed_count + 1,} : null
                ))
            })
        }
        catch(err) {
            console.log("エラー",err)
        }
    }

    const handleUnfollow = async() => {
        if(!user) {
            return
        }

        try {
            const uri = "http://localhost:4000/unfollow";
            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            })
            const requestOption: RequestInit = {
            method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({'user_id': user.sub?.split('|').at(1), "following_id": profile?.UserID})
            }
            fetch(uri, requestOption)
            .then((response) => response.json())
            .then(data => {
                setProfile((prevState) => (
                    prevState && prevState.followed_count ? { ...prevState, IsFollowing: false, followed_count: prevState.followed_count - 1,} : null
                ))
            })
        }
        catch(err) {
            console.log("エラー",err)
        }
    }

    return (
        <Fragment>
            <h3>Profile</h3>
            <div className="container profile-wrap">
                <div className="user-info">
                    <div className="row justify-content-center">
                        <div className="col-1 user-image">
                            <MdInsertEmoticon size={50}/>
                        </div>
                        <div className="col-2 user-name">
                            <div className="name">
                                name:
                                {profile?.NickName}
                            </div>
                            <div className="email">
                                @yamada
                            </div>
                        </div>
                        <div className="col-4 follow-wrap float-right">
                                {profile?.IsMe
                                    ? ""
                                    : 
                                    profile?.IsFollowing ?
                                        <div className="follow-btn">
                                            <Button onClick={handleUnfollow}>フォロー中</Button>
                                            <CgDetailsMore />
                                        </div>
                                    :
                                        <div className="follow-btn">
                                            <Button onClick={handleFollow}>フォローする</Button>
                                            <CgDetailsMore />
                                        </div>
                                        
                                }
                            <div className="follow-info row">
                                <p className="col-6">フォロワー{profile?.followed_count}人</p>
                                <p className="col-6">フォロー{profile?.following_count}人</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="user-introduce">
                            {profile?.Introduction}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
