import React, { Component, Fragment, useEffect, useState } from 'react'
import { ListItemButton, ListItemText, Collapse, List, ListItemIcon } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import QueueIcon from '@mui/icons-material/Queue';
import { ApplyingUserMangeComponent } from '../components/Authorization/ApplyingUserMangeComponent';
import { AppliedUserMangeComponent } from '../components/Authorization/AppliedUserMangeComponent';
import { useAuth0 } from '@auth0/auth0-react';
import { IsNullOrUndefinedOrEmpty } from '../common/Check';
import { useCookies } from 'react-cookie';
import { ErrorPageProps } from '../@types/ErrorPage';
import { useNavigate } from 'react-router-dom';
import { ConvertErrorMessageToErrorPageProps, ConvertErrorCodeToErrorMessage } from '../common/Convert';
import { BaseURI } from '../utils/constants';

// 権限申請中
const applyingActiveMode = 1;

/**
 * 権限承認済
 */
const appliedActiveMode = 2;

export const AdminPage = () => {
    // アクティブコンポーネント管理
    const [activeMode, setActiveMode] = useState(applyingActiveMode);
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const { getAccessTokenSilently, loginWithRedirect } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    const [isAdminFlg, setIsAdminFlg] = useState(false);

    useEffect(() => {
        // 権限チェック
        checkIsAdminUser();
    }, [])

    // 管理者ユーザーかチェックを行う
    const checkIsAdminUser = async () => {
        let accessToken = "";
        try {
            accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            })
            if (IsNullOrUndefinedOrEmpty(cookies.userID)) {
                throw new Error("クッキー情報がありません")
            }
        } catch (error) {
            console.log(error);
            const errorInfo: ErrorPageProps = ConvertErrorCodeToErrorMessage(403);

            navigate('/error', { state: errorInfo });
            return;
        }
        const uri = BaseURI + "/authorization/check";
        const requestOption: RequestInit = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            // ユーザーIDと権限区分(管理者：999)をリクエストに含める
            body: JSON.stringify({ 'user_id': cookies.userID, 'auth_kb': '999' })
        }
        await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    // エラーメッセージを受け取りエラーページの引数を設定する
                    const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                    navigate('/error', { state: errorInfo });
                    return;
                }
                // 管理者ユーザーなのでOK
                setIsAdminFlg(true);
                return;
            })
            .catch((err) => {
                // エラーメッセージを受け取りエラーページの引数を設定する
                const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                navigate('/error', { state: errorInfo });
                return;
            })
    }

    if (isAdminFlg) {
        return (
            <Fragment>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-2 px-3 border" style={{ height: "300px" }}>
                            {/* 投稿権限申請管理 */}
                            <ListItemButton onClick={handleClick}>
                                <ListItemText primary="施設投稿権限" />
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {/* 投稿権限申請中 */}
                                    <ListItemButton sx={{ pl: 2 }} onClick={() => setActiveMode(applyingActiveMode)}>
                                        <QueueIcon />
                                        <ListItemText primary="申請中" />
                                    </ListItemButton>
                                    {/* 投稿権限承認済 */}
                                    <ListItemButton sx={{ pl: 2 }} onClick={() => setActiveMode(appliedActiveMode)}>
                                        <CheckCircleOutlineIcon />
                                        <ListItemText primary="承認済" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </div>
                        <div className="col-9 px-5">
                            {
                                (() => {
                                    switch (activeMode) {
                                        // 権限申請中
                                        case applyingActiveMode:
                                            return (
                                                <ApplyingUserMangeComponent />
                                            )

                                        // 権限承認済
                                        case appliedActiveMode:
                                            return (
                                                <AppliedUserMangeComponent />
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
}