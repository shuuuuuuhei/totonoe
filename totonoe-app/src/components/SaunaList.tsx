import React, { Component, Fragment } from 'react'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { BsHeart } from 'react-icons/bs'

export const SaunaList = () => {
    return(
        <Fragment>
            <div className="facility py-4">
                <div className="row facility-top">
                    <div className="col-10 facility-name">
                        <h3>タイムズ スパ・レスタ </h3>
                    </div>
                    <div className="facility-action col-2 row">
                        <HiOutlinePencilAlt size={40} className="col-6"/>
                        <BsHeart size={35} className="col-6"/>
                    </div>
                    <p className="facility-address">東京都 江戸川区</p>
                    <p>温度：100℃ ととのい度：平均4.6 スペース広い</p>
                </div>
            </div>
        </Fragment>
    )
}