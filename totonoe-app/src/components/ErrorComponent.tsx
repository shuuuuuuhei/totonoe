import { Button } from '@mui/material'
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { themeColor } from '../utils/dist/constants'

type ErrorComponentProps = {
    errorCode: number,
    errorMessage: string,
}
export const ErrorComponent = (props: ErrorComponentProps) => {

    return (
        <Fragment>
            <div className="container py-5 border my-5">
                <div className="row text-center">
                    <h2 className="fw-bold">{props.errorCode}</h2>
                </div>
                <div className="row text-center">
                    <p className="">{props.errorMessage}</p>
                </div>
                <div className="row justify-content-center">
                    <Button variant="contained" className="col-4" color="warning">
                        <Link to="/" className="text-white">Topに戻る</Link>
                    </Button>
                </div>
            </div>
        </Fragment>
    )
}