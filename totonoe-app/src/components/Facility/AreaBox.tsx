import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { prefectureListPerArea } from '../../utils/constants';

const searchLink = "/search?lang=jp&page=1&area=";

/**
 * 地方文字スタイル
 */
const areaStyleProperty: React.CSSProperties = {
    color: '#595960',
    fontSize: '14px',
    fontWeight: '600'
};

/**
 * 都道府県文字スタイル
 */
const prefectureStyleProperty: React.CSSProperties = {
    color: "#06c",
    fontSize: '10px',
    width: '100%',
}
export const AreaBox = () => {
    return (
        <Fragment>
            <div className="container my-5">
                <div className="row border py-4 text-start px-3">
                    <h3>エリアから探す</h3>
                    <div className="row py-3 px-1" style={areaStyleProperty}>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-3">
                                    <p>北海道・東北</p>
                                </div>
                                <div className="col-9 px-0 row">
                                    {prefectureListPerArea["北海道・東北"].map((prefecture, index) => {
                                        return (
                                            <div key={index} className="col-1 px-0 mx-1"><Link to={searchLink + prefecture} style={prefectureStyleProperty}>{prefecture}</Link></div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2">
                                    <p>関東</p>
                                </div>
                                <div className="col-10 px-0 row">
                                    {prefectureListPerArea.関東.map((prefecture, index) => {
                                        return (
                                            <div key={index} className="col-1 px-0 mx-1"><Link to={searchLink + prefecture} style={prefectureStyleProperty}>{prefecture}</Link></div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2">
                                    <p>中部</p>
                                </div>
                                <div className="col-10 px-0 row">
                                    {prefectureListPerArea.中部.map((prefecture, index) => {
                                        return (
                                            <div key={index} className="col-1 px-0 mx-1"><Link to={searchLink + prefecture} style={prefectureStyleProperty}>{prefecture}</Link></div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2">
                                    <p>近畿</p>
                                </div>
                                <div className="col-10 px-0 row">
                                    {prefectureListPerArea.近畿.map((prefecture, index) => {
                                        return (
                                            <div key={index} className="col-1 px-0 mx-1"><Link to={searchLink + prefecture} style={prefectureStyleProperty}>{prefecture}</Link></div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2">
                                    <p>中国・四国</p>
                                </div>
                                <div className="col-10 px-0 row">
                                    {prefectureListPerArea["中国・四国"].map((prefecture, index) => {
                                        return (
                                            <div key={index} className="col-1 px-0 mx-1"><Link to={searchLink + prefecture} style={prefectureStyleProperty}>{prefecture}</Link></div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2">
                                    <p>九州・沖縄</p>
                                </div>
                                <div className="col-10 px-0 row">
                                    {prefectureListPerArea["九州・沖縄"].map((prefecture, index) => {
                                        return (
                                            <div key={index} className="col-1 px-0 mx-1"><Link to={searchLink + prefecture} style={prefectureStyleProperty}>{prefecture}</Link></div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}