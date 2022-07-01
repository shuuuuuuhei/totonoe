import React, { Fragment, useEffect, useState, VFC } from 'react';
import { Button } from 'react-bootstrap';
import '../style/Profile.css'
import {MdInsertEmoticon} from 'react-icons/md'
import {CgDetailsMore} from 'react-icons/cg'
import { Profile } from '../@types/Profile';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const ProfileComponent = () => {
    const [profile, setProfile] = useState<Profile>();
    const {getAccessTokenSilently, user} = useAuth0();
   
    useEffect(() => {
        const fetchProfile = async() => {
            const uri = "http://localhost:4000/profile";
            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            });

            if (!accessToken || !user) {
                throw Error("アクセストークンがありません。");
            }

            const requestOption: RequestInit = {
                method: "POST",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: user.sub?.split('|').at(1)
                })
            };
            await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    const err = new Error;
                    console.log(response);
                    err.message = "プロフィールが見つかりませんでした。" + response.status;
                    throw err;
                };
                return response.json();
            })
            .then((resData) => {
                setProfile(resData);
            })
            .catch(err => {
                console.log(err)
            });
        }
        fetchProfile();
    }, [])

    if(!profile) {
        return(
            <Navigate to="/profile" />
        )
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
                                {profile.nick_name}
                            </div>
                            <div className="email">
                                @yamada
                            </div>
                        </div>
                        <div className="col-4 follow-wrap float-right">
                            <div className="follow-btn">
                                <Button>フォローする</Button>
                                <CgDetailsMore />
                            </div>
                            <div className="follow-info row">
                                <p className="col-6">フォロワー{profile.followerCount}人</p>
                                <p className="col-6">フォロワー{profile.followingCount}人</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 user-introduce">
                            サウナ歴10年目です！
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}