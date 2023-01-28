import { Button } from '@mui/material'
import React, { Component, Fragment } from 'react'
import { FallbackProps } from 'react-error-boundary'
import { ErrorComponent } from '../../components/ErrorComponent';

const clientUnexpectedError = 400;
// エラー時のフォールバック用のコンポーネント
export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {

    console.log(error);

    // /**
    //  * エラーコードからメッセージを生成する
    //  */
    // if(error.statusCode) {
    //     return(
    //         <Fragment>

    //         </Fragment>
    //     )
    // }

    return (
        <Fragment>
            <ErrorComponent errorCode={clientUnexpectedError} errorMessage={"予期しないエラーが起こりました。管理者に連絡してください。"} />
        </Fragment>
    )
}