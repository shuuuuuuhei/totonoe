import React, { Component, Fragment } from 'react'

type SaunaDetailProps = {
    sauna: Sauna|undefined
}
export const SaunaDetail = (props: SaunaDetailProps) => {

    // if(!props.sauna) {
    //     return(
    //         <Fragment>
    //             ロード中...
    //         </Fragment>
    //     )
    // }
    return(
        <Fragment>
            <div className="container">
                <label htmlFor="">○基本情報</label>
                <div className="">
                    {props.sauna?.address}
                </div>
            </div>
            {props.sauna?.eigyo_start}
        </Fragment>
    )
}