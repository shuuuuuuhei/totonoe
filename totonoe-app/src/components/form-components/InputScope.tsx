import React, { Component, Fragment } from 'react'
import { Input } from './Input'
import { propTypes } from 'react-bootstrap/esm/Image'

type InputScopeProps = {
    name: string,
    value: string,
    onChange: React.ChangeEventHandler,
    placehodlder?: string,
    errorDiv: string,
    errorMsg: string,
    className: string,
}

export const InputScope = (props: InputScopeProps) => {

    return(
        <Fragment>
            <div className="col-5 text-center">
                <Input 
                    type="text"
                    className={props.className}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placehodlder={props.placehodlder}
                    errorDiv={props.errorDiv}
                    errorMsg={props.errorMsg}
                />
            </div>
            <div className="col-2 text-center">
                <p className="m-0">
                    ~
                </p>
            </div>
            <div className="col-5">
                <Input 
                    type="text"
                    className="input-sm"
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placehodlder={props.placehodlder}
                    errorDiv={props.errorDiv}
                    errorMsg={props.errorMsg}
                />
            </div>
        </Fragment>
    )
}