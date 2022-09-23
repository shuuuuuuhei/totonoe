import React, { Component, Fragment } from 'react'
import { Input } from './Input'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Form } from 'react-bootstrap'

type InputScopeProps = {
    name: string,
    valueStart: string,
    valueEnd: string,
    onChange: React.ChangeEventHandler,
    placehodlder: string,
    className: string,
}

export const InputScope = (props: InputScopeProps) => {

    return(
        <Fragment>
            <div className="col-5 text-center">
                <Form.Control 
                    type="number"
                    className={props.className}
                    id="start"
                    name={props.name}
                    value={props.valueStart}
                    onChange={(e) => (props.onChange(e))}
                    placeholder={props.placehodlder}
                />
            </div>
            <div className="col-2 text-center">
                <p className="m-0">
                    ~
                </p>
            </div>
            <div className="col-5">
                <Form.Control 
                    type="number"
                    className={props.className}
                    id="end"
                    name={props.name}
                    value={props.valueEnd}
                    onChange={props.onChange}
                    placeholder={props.placehodlder}
                />
            </div>
        </Fragment>
    )
}