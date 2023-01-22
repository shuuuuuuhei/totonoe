import React, { Component, Fragment, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ErrorPageProps } from '../../@types/ErrorPage';
import { ErrorComponent } from '../../components/ErrorComponent';

export const ErrorPage = () => {
    const location = useLocation();
    /**
     * エラー情報(ステータスコード, エラーメッセージ)
     */
    const errorInfo = location.state as ErrorPageProps;

    return (
        <ErrorComponent errorCode={errorInfo.statusCode} errorMessage={errorInfo.message} />
    )
}