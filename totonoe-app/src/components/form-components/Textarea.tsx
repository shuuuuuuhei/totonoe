import React, { ChangeEventHandler, Component } from 'react'
type TextareaProps = {
    name: string,
    rows: number,
    value: string,
    onChange: React.ChangeEventHandler,
}

export const Textarea = (props: TextareaProps) => {

    const propsState = props;
    return(
        <div className="mb-3">
        <textarea
            className="form-control"
            id={props.name}
            name={props.name}
            rows={propsState.rows}
            value={propsState.value}
            onChange={propsState.onChange}
        />
        </div>
    )
};