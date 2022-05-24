import React, { Fragment, VFC } from 'react';
import { Button } from 'react-bootstrap';
import '../style/Profile.css'
import {MdInsertEmoticon} from 'react-icons/md'
import {CgDetailsMore} from 'react-icons/cg'
import { Profile } from '../@types/Profile';

type ProfileProps = {
    profile: Profile
}

export const ProfileComponent: React.VFC<ProfileProps> = (props) => {
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
                                {props.profile.name}
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
                                <p className="col-6">フォロワー{props.profile.followerCount}人</p>
                                <p className="col-6">フォロワー{props.profile.following}人</p>
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