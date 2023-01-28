import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ErrorCodeWithMessage } from '../../utils/constants';
import { ErrorComponent } from '../../components/ErrorComponent';
import { ConvertErrorCodeToErrorMessage } from '../../common/Convert';
import { ErrorPageProps } from '../../@types/ErrorPage';


export const ErrorPage404 = () => {
    const error404PageInfo: ErrorPageProps = ConvertErrorCodeToErrorMessage(404);

    return (
        <ErrorComponent errorCode={error404PageInfo.statusCode} errorMessage={error404PageInfo.message} />
    )
}