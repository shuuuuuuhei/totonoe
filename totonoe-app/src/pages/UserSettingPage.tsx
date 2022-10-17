import React, { Component, Fragment, useState } from 'react'
import { Form } from 'react-bootstrap'
import { ListItemButton, ListItemText } from '@mui/material'
import { SettingProfileComponent } from '../components/SettingProfileComponent';
import { AccountSettingComponent } from '../components/AccountSetting';

// プロフィール設定用
const profileActiveMode = 1;
// 権限申請用
const applyAuthActiveMode = 2;

export const UserSettingPage = () => {

    // アクティブコンポーネント管理
    const [activeMode, setActiveMode] = useState(profileActiveMode);

    return (
        <Fragment>
            <div className="container">
                <div className="row py-5">
                    <div className="col-2 px-3 border" style={{ height: "300px" }}>
                        <div className="row border-bottom py-2">
                            <ListItemButton onClick={() => setActiveMode(profileActiveMode)}>
                                <ListItemText primary="プロフィール設定" />
                            </ListItemButton>
                        </div>
                        <div className="row border-bottom py-2">
                            <ListItemButton onClick={() => setActiveMode(applyAuthActiveMode)}>
                                <ListItemText primary="アカウント" />
                            </ListItemButton>
                        </div>
                    </div>
                    <div className="col-9 px-5">
                        {
                            (() => {
                                switch (activeMode) {
                                    case profileActiveMode:
                                        return (
                                            <SettingProfileComponent />
                                        )

                                    case applyAuthActiveMode:
                                        return (
                                            <AccountSettingComponent />
                                        )
                                }
                            })()
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}