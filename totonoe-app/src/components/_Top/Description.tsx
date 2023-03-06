import React, { Component, Fragment } from 'react'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { themeColor } from '../../utils/constants';

export const TotonoeDescription = () => {
    return (
        <Fragment>
            <div className="container description text-center">
                <div className="row py-3">
                    <h3>Totonoeとは</h3>
                </div>
                <div className="row text-center py-2">
                    <p style={{ fontWeight: "bold" }}>Totonoeは、
                        <span style={{ background: `linear-gradient(transparent 70%,${themeColor}  0%)` }}>お気に入りのサウナ</span>や
                        <span style={{ background: `linear-gradient(transparent 70%, ${themeColor} 0%)` }}>気になるサウナ</span>を検索したり、</p>
                    <p style={{ fontWeight: "bold" }}>訪れたサウナで体験した<span style={{ background: `linear-gradient(transparent 70%, ${themeColor} 0%)` }}>ととのいを共有する</span>
                        ことができます。</p>
                </div>
                <div className="row justify-content-center py-3">
                    <div className="col-3 border mx-2">
                        <HiOutlinePencilAlt color={themeColor} size={40} className="my-3" />
                        <div className="row">
                            <h5>投稿</h5>
                            <p style={{ fontSize: "12px" }}>
                                サウナでのととのいを共有することができます。
                                <br />
                                また、他の人のサウナ投稿をチェックすることができます。
                            </p>
                        </div>
                    </div>
                    <div className="col-3 border mx-2">
                        <AddLocationAltIcon fontSize="large" htmlColor={themeColor} className="my-3" />
                        <div className="row">
                            <h5>マップ検索</h5>
                            <p style={{ fontSize: "12px" }}>
                                地名を指定してマップからサウナ施設を
                                <br />
                                検索することができます。
                            </p>
                        </div>
                    </div>
                    <div className="col-3 border mx-2">
                        <ManageSearchIcon fontSize="large" htmlColor={themeColor} className="my-3" />
                        <h5>エリア別・条件検索</h5>
                        <p style={{ fontSize: "12px" }}>
                            エリアと条件を絞ってサウナ施設を
                            <br />
                            検索することができます。
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}