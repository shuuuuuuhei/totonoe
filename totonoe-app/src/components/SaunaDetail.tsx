import React, { Component, Fragment } from 'react'
import { StrConvertStrTime, ConvertKBToMaruORHyphen, UndefinedOrNullConvertToEmpty } from '../common/Convert'
import { Facility } from '../@types/sauna/Facility'

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
    console.log(props.facility)
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
                                <td>{StrConvertStrTime(props.facility.eigyo_start, props.facility.eigyo_end)}</td>
                            </tr>
                            <tr>
                                <td>料金</td>
                                <td>¥{props.facility.price}</td>
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
                        {!props.facility.saunas ? <p>サウナ情報なし</p>
                            :
                            props.facility.saunas.map((sauna, index) => {
                                console.log("saunas", sauna)
                                return(
                                    <div className="sauna-contents container text-center py-5">
                                        <div className="sauna-basic-info">
                                            <h4>サウナ{index+1}</h4>
                                            <p>{sauna.sauna_type}</p>
                                            <p>温度　{sauna.temperature}度</p>
                                            <p>収容人数 {sauna.capacity}人</p>
                                        </div>
                                        <div className="sauna-options text-center">
                                            <div className="row py-2">
                                                <div className="col-4">
                                                    <p>ロウリュウ</p>
                                                    {ConvertKBToMaruORHyphen(sauna.rouryu_flg)}
                                                </div>
                                                <div className="col-4">
                                                    <p>サウナマット</p>
                                                    {ConvertKBToMaruORHyphen(sauna.sauna_mat_flg)}
                                                </div>
                                                <div className="col-4">
                                                    <p>TV</p>
                                                    {ConvertKBToMaruORHyphen(sauna.tv_flg)}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p>BGM</p>
                                                    {ConvertKBToMaruORHyphen(sauna.bgm_flg)}
                                                </div>
                                                <div className="col-4">
                                                    <p>サウナマット</p>
                                                    {ConvertKBToMaruORHyphen(sauna.sauna_mat_flg)}
    
                                                </div>
                                                <div className="col-4">
                                                    <p>TV</p>
                                                    {ConvertKBToMaruORHyphen(sauna.tv_flg)}
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-6 waterbaths">
                        {!props.facility.water_baths ? <p>水風呂情報なし</p> 
                            :
                            props.facility.water_baths?.map((waterbath, index) => {
                                return(
                                    <div className="water-bath container text-center py-5">
                                        <div className="waterbath-basic-info">
                                            <h4>水風呂{index+1}</h4>
                                            <p>温度　{waterbath.temperature}度</p>
                                            <p>収容人数 {waterbath.capacity}人</p>
                                        </div>
                                        <hr/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* 
                    ---------
                    サウナ&水風呂情報終了
                    ---------
                */}
                {/* 
                    ---------
                    施設設備情報開始
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
                                {ConvertKBToMaruORHyphen(props.facility.lodging_flg)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">コワーキングスペース</p>
                                {ConvertKBToMaruORHyphen(props.facility.working_space_flg)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">飯処</p>
                                {ConvertKBToMaruORHyphen(props.facility.restaurant_flg)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">漫画</p>
                                {ConvertKBToMaruORHyphen(props.facility.books_flg)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">アウフグース</p>
                                {ConvertKBToMaruORHyphen(props.facility.heat_wave_flg)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">外気浴</p>
                                {ConvertKBToMaruORHyphen(props.facility.air_bath_flg)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">休憩スペース</p>
                                {ConvertKBToMaruORHyphen(props.facility.break_space_flg)}
                            </div>
                            <div className="col-3 py-2 text-center">
                                <p className="m-0">給水機</p>
                                {ConvertKBToMaruORHyphen(props.facility.water_server_flg)}
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
                    ---------
                    施設設備情報終了
                    ---------
                */}
                {/* 
                    ---------
                    アメニティ情報開始
                    ---------
                */}
                <hr/>
                <div className="row facility-amenity">
                    <div className="col-3">
                        <h5>アメニティ</h5>
                    </div>
                    <div className="col-9">
                        <div className="row facility-amenities">
                            {!props.facility.amenities ? <p>アメニティ情報なし</p> 
                            : 
                                props.facility.amenities?.map((amenity, index) => {
                                    return(
                                        <div className="amenity">
                                            <p>・{amenity.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* 
                    ---------
                    アメニティ情報終了
                    ---------
                */}
                <hr/>
            </div>

        </Fragment>
    )
}