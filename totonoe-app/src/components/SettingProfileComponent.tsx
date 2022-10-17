import React, { Component, Fragment } from 'react'
import { Form } from 'react-bootstrap'

export const SettingProfileComponent = () => {
    return (
        <Fragment>
            <div className="setting-top">
                公開プロフィール
            </div>
            <div className="profile-name row py-3">
                <Form.Label>名前</Form.Label>
                <Form.Group className="temperature col-6">
                    <Form.Control
                        type="text"
                        className="input-sm"
                        placeholder="姓"
                    />
                    <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="temperature col-6">
                    <Form.Control
                        type="text"
                        className="input-sm"
                        placeholder="名"
                    />
                    <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                </Form.Group>
            </div>
            <div className="profile-name row py-3">
                <Form.Label>自己紹介</Form.Label>
                <Form.Group className="form-content">
                    <Form.Control
                        as="textarea"
                        className="input-sm"
                        name="Content"
                        required={true}
                        rows={10}
                    />
                </Form.Group>
            </div>
        </Fragment>
    )
}