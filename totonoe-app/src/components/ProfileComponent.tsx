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
}
export const ProfileComponent: React.VFC<profileProps> = ({profile}) => {
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
                                    : <div className="follow-btn">
                                        <Button>フォローする</Button>
                                        <CgDetailsMore />
                                        </div>
                                }
                            <div className="follow-info row">
                                <p className="col-6">フォロワー{profile?.followed_count}人</p>
                                <p className="col-6">フォロワー{profile?.following_count}人</p>
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