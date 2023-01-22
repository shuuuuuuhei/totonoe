import React, { Component, Fragment, useState } from 'react'
import { ListItemButton, ListItemText, Collapse, List, ListItemIcon } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import QueueIcon from '@mui/icons-material/Queue';
import { ApplyingUserMangeComponent } from '../components/Authorization/ApplyingUserMangeComponent';
import { AppliedUserMangeComponent } from '../components/Authorization/AppliedUserMangeComponent';

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