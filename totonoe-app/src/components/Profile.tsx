import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import '../style/Profile.css'
import {MdInsertEmoticon} from 'react-icons/md'
import {CgDetailsMore} from 'react-icons/cg'


export const Profile = () => {
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
                                山田太郎
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
                                <p className="col-6">フォロワー300人</p>
                                <p className="col-6">フォロワー300人</p>
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