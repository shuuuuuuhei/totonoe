import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { prefectureListPerArea } from '../../utils/constants';

const searchLink = "/search?lang=jp&page=1&area=";

export const AreaBox = () => {
    return (
        <Fragment>
            <div className="row border py-4 text-start">
                <h3>エリアから探す</h3>
                <div className="row py-3 px-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <p>北海道・東北</p>
                            </div>
                            <div className="col-9 px-0">
                                {prefectureListPerArea["北海道・東北"].map((prefecture, index) => {
                                    return (
                                        <><Link to={searchLink + prefecture} style={{ fontSize: 13 }}>{prefecture}</Link><span> </span></>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <p>関東</p>
                            </div>
                            <div className="col-9 px-0">
                                {prefectureListPerArea.関東.map((prefecture, index) => {
                                    return (
                                        <><Link to={searchLink + prefecture} style={{ fontSize: 13 }}>{prefecture}</Link><span> </span></>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <p>中部</p>
                            </div>
                            <div className="col-9 px-0">
                                {prefectureListPerArea.中部.map((prefecture, index) => {
                                    return (
                                        <><Link to={searchLink + prefecture} style={{ fontSize: 13 }}>{prefecture}</Link><span> </span></>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <p>近畿</p>
                            </div>
                            <div className="col-9 px-0">
                                {prefectureListPerArea.近畿.map((prefecture, index) => {
                                    return (
                                        <><Link to={searchLink + prefecture} style={{ fontSize: 13 }}>{prefecture}</Link><span> </span></>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <p>中国・四国</p>
                            </div>
                            <div className="col-9 px-0">
                                {prefectureListPerArea["中国・四国"].map((prefecture, index) => {
                                    return (
                                        <><Link to={searchLink + prefecture} style={{ fontSize: 13 }}>{prefecture}</Link><span> </span></>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <p>九州・沖縄</p>
                            </div>
                            <div className="col-9 px-0">
                                {prefectureListPerArea["九州・沖縄"].map((prefecture, index) => {
                                    return (
                                        <><Link to={searchLink + prefecture} style={{ fontSize: 13 }}>{prefecture}</Link><span> </span></>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}