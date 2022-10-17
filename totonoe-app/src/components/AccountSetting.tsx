import React, { Component, Fragment } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from '@mui/material'

export const AccountSettingComponent = () => {
    return (
        <Fragment>
            <div className="row">
                <h4>アカウント</h4>
            </div>
            <div className="user-name row py-3">
                <Form.Label>アカウント名</Form.Label>
                <Form.Group className="">
                    <Form.Control
                        type="text"
                        className="input-sm"
                        placeholder=""
                    />
                    <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                    <Button
                        color='primary'
                        variant='outlined'
                        className="col-3 my-2"
                        size="small"
                    >
                        更新
                    </Button>
                </Form.Group>
            </div>
            <div className="row apply-auth py-3">
                <div className="facility-submit row">
                    <div className="top">
                        施設投稿権限申請
                    </div>
                    <div className="row">
                        <p style={{ color: "gray" }}>
                            未登録のサウナ施設の登録を行うためには、事前に施設投稿権限の申請が必要です。
                            <br />
                            施設投稿権限申請がアプリ管理者に承認された場合は、施設投稿が可能になります。
                            <br />
                            施設登録ユーザになってTotonoeアプリを盛り上げましょう！
                        </p>
                    </div>
                    <Button
                        color='primary'
                        variant='outlined'
                        className="col-3"
                    >
                        施設投稿権限を申請する
                    </Button>
                </div>
            </div>
            <div className="row apply-auth py-3">
                <div className="facility-submit row">
                    <div className="top">
                        アカウント削除
                    </div>
                    <Button
                        color='warning'
                        size='small'
                        className="col-3"
                        variant='outlined'>
                        アカウントを削除する
                    </Button>
                </div>
            </div>
        </Fragment>
    )
}