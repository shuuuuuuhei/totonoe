import React, { Component, Fragment } from 'react'
import { StrConvertStrTime, ConvertKBToMaruORHyphen } from '../common/Convert'

type SaunaDetailProps = {
    facility: Facility|undefined
}
export const SaunaDetail = (props: SaunaDetailProps) => {

    if(!props.facility) {
        return(
            <Fragment>
                ロード中...
            </Fragment>
        )
    }
    return(
        <Fragment>
            <div className="container facility-info">
                {/* 
                    ---------
                    基本情報
                    ---------
                */}
                <label htmlFor=""><h3>○基本情報</h3></label>
                <div className="row basic-info py-4">
                    <div className="col-5">
                        <div className="facility-image py-5">
                            ここには画像が入る
                        </div>
                        <div className="facility-map py-5">
                            ここにはマップが入る
                        </div>
                    </div>

                    <div className="col-7">
                    <table className="table table-striped">                  
                        <tbody>
                            <tr>
                                <td>施設名</td>
                                <td>{props.facility.name}</td>
                            </tr>
                            <tr>
                                <td>住所</td>
                                <td>{props.facility.address}</td>
                            </tr>
                            <tr>
                                <td>アクセス</td>
                                <td>{props.facility.access}</td>
                            </tr>
                            <tr>
                                <td>TEL</td>
                                <td>{props.facility.tel}</td>
                            </tr>
                            <tr>
                                <td>営業時間</td>
                                <td>{StrConvertStrTime(props.facility.eigyo_start)}~{StrConvertStrTime(props.facility.eigyo_end)}</td>
                            </tr>
                            <tr>
                                <td>料金</td>
                                <td>{props.facility.access}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                {/* 
                    ---------
                    サウナ&水風呂情報
                    ---------
                */}
                <label htmlFor=""><h3>○サウナ＆水風呂</h3></label>
                <div className="row">
                    <div className="col-6 saunas">
                        {props.facility.saunas.map((sauna, index) => {
                            return(
                                <div className="sauna-contents container text-center py-5">
                                    <div className="sauna-basic-info">
                                        <h4>サウナ{index+1}</h4>
                                        <p>{sauna.sauna_type}</p>
                                        <p>温度　{sauna.temperature}</p>
                                        <p>収容人数 {sauna.capacity}人</p>
                                    </div>
                                    <div className="sauna-options text-center">
                                        <div className="row py-2">
                                            <div className="col-4">
                                                <p>ロウリュウ</p>
                                                {ConvertKBToMaruORHyphen(sauna.rouryu_kb)}
                                            </div>
                                            <div className="col-4">
                                                <p>サウナマット</p>
                                            </div>
                                            <div className="col-4">
                                                <p>TV</p>
                                                {ConvertKBToMaruORHyphen(sauna.tv_kb)}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <p>BGM</p>
                                                {ConvertKBToMaruORHyphen(sauna.bgm_kb)}
                                            </div>
                                            <div className="col-4">
                                                <p>サウナマット</p>
                                            </div>
                                            <div className="col-4">
                                                <p>TV</p>
                                                {ConvertKBToMaruORHyphen(sauna.tv_kb)}
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-6 waterBaths">
                        水風呂情報を加える
                    </div>
                </div>
                {/* 
                    ---------
                    サウナ&水風呂情報終了
                    ---------
                */}
                <label htmlFor=""><h3>○設備</h3></label>
                <div className="row facility-option py-4">
                    <div className="col-3">
                        <h5>施設設備</h5>
                    </div>
                    <div className="col-9 py-3">
                        <div className="row">
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">宿泊</p>
                                {ConvertKBToMaruORHyphen(props.facility.lodging_kb)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">コワーキングスペース</p>
                                {ConvertKBToMaruORHyphen(props.facility.workingspace_kb)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">飯処</p>
                                {ConvertKBToMaruORHyphen(props.facility.restaurant_kb)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">漫画</p>
                                {ConvertKBToMaruORHyphen(props.facility.books_kb)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">アウフグース</p>
                                {ConvertKBToMaruORHyphen(props.facility.heatwave_kb)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">休憩スペース</p>
                                {ConvertKBToMaruORHyphen(props.facility.breakspace_kb)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">給水機</p>
                                {ConvertKBToMaruORHyphen(props.facility.waterserver_kb)}
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row facility-amenity">
                    <div className="col-3">
                        <p>アメニティ</p>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
                <hr/>
            </div>

        </Fragment>
    )
}