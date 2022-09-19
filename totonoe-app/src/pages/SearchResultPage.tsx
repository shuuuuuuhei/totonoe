import React, { Component, Fragment, useState, useEffect, useRef } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { ModalHover } from 'react-modal-hover'
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BsHeart } from 'react-icons/bs';
import { FacilityList } from '../components/SaunaList';
import { SearchOption } from '../components/SearchOption';
import { Link, useLocation } from 'react-router-dom';
import { UndefinedOrNullConvertToEmpty } from '../common/Convert';
import { prefectureList } from '../utils/constants';

const baseUri = 'http://localhost:4000/facilities?';

type city = {
    id: string,
    name: string,
    prefectureID: string,
}

export const SearchResultPage = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const areaParams = UndefinedOrNullConvertToEmpty(queryParams.get("area"));
    const facilityName = UndefinedOrNullConvertToEmpty(queryParams.get("name"));
    const priceStart = UndefinedOrNullConvertToEmpty(queryParams.get("price_start"));
    const priceEnd = UndefinedOrNullConvertToEmpty(queryParams.get("price_end"));
    const temperatureStart = UndefinedOrNullConvertToEmpty(queryParams.get("temperature_start"));
    const temperatureEnd = UndefinedOrNullConvertToEmpty(queryParams.get("temperature_end"));
    const [detailAreaPrefectureList, setDetailArea] = useState<string[]>();
    const [detailAreaCityList, setDetailAreaCityList] = useState<city[]>([]);

    const [selected, setSelected] = useState({
        key: "",
        value: "",
    });

    const list = [
        { key: "Yellow", value: "yellow" },
        { key: "Blue", value: "blue" },
        { key: "Green", value: "green" }
    ];

    const [facilities, setFacilitiesState] = useState<Facility[]>();
    const [show, setShow] = useState(false);


    const handleSearch = (searchOption: string) => {
        const uri = baseUri+`area=${areaParams}&facilityName=${facilityName}${searchOption}`;

        const requestOption: RequestInit = {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const fetchSaunas = async() => {
            await fetch(uri, requestOption)
                .then((response) => {
                    if (!response.ok) {
                        const err = new Error;
                        err.message = "サウナ施設一覧取得に失敗しました" + response.status;
                        throw err;
                    }
                    return response.json();
                })
                .then((resData) => {
                    setFacilitiesState(resData);
                    console.log(resData)
                })
            .catch(err => {
                console.log(err)
            });
        }
        fetchSaunas();
       }

    useEffect(() => {
        const fetchSaunas = async() => {
            const uri = `http://localhost:4000/facilities?area=${areaParams}&facilityName=${facilityName}&priceStart=${priceStart}&priceEnd=${priceEnd}&priceStart=${priceStart}&temperatureStart=${temperatureStart}&temperatureEnd=${temperatureEnd}`;
            const requestOption: RequestInit = {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
            };
            console.log(uri)
            await fetch(uri, requestOption)
                .then((response) => {
                    if (!response.ok) {
                        const err = new Error;
                        err.message = "サウナ施設一覧取得に失敗しました" + response.status;
                        throw err;
                    }
                    return response.json();
                })
                .then((resData) => {
                    setFacilitiesState(resData);
                    console.log(resData)
                })
            .catch(err => {
                console.log(err)
            });
        }
        fetchSaunas();

        // 全国の場合は都道府県リストを参照するため、都道府県リストをエリアリストに格納して処理を終了
        if(areaParams === '') {
            setDetailArea(prefectureList)
            return
        }

        // 取得した都道府県から市区町村を取得する
        const fetchAreaDetail = async () => {
            // 「県」を省いた検索になるので前方一致で検索をかける
            const prefectureID = prefectureList.findIndex(prefecture => prefecture.startsWith(areaParams)) + 1;
            const uri = `http://localhost:4000/prefecture/${prefectureID}/cities`;
            const requestOption: RequestInit = {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
            };
            await fetch(uri, requestOption)
                .then((response) => {
                    if (!response.ok) {
                        const err = new Error;
                        err.message = "市区町村取得に失敗しました" + response.status;
                        throw err;
                    }
                    return response.json();
                })
                .then((resData) => {
                    setDetailAreaCityList(resData);
                })
            .catch(err => {
                console.log(err)
            });
        }

        fetchAreaDetail();

    }, [areaParams])

    if(!facilities) {
        return(
            <Fragment>
                <p>ロード中...</p>
            </Fragment>
        )
    }

    // エリアフィールドのホバー時に表示するエリア詳細を設定する
    const AreaDetail = () => {

        // 都道府県+市区町村を検索済みの場合は表示しない
        if(areaParams && detailAreaCityList.length === 0) {
            return(
                null
            )
        }

        return(
            <Fragment>
                <div className="border row container" style={{position: "absolute", top: "450px", left: "400px", backgroundColor: "white", width: "850px",}} onClick={() => setShow(false)}>
                    {areaParams === '' ?
                    // 全国の都道府県を表示
                        detailAreaPrefectureList?.map((detailArea) => {
                            return(
                                <div className="col-1 py-2 text-center">
                                    <Link to={`/search?lang=jp&area=${detailArea}`}><p className="m-0 py-1" style={{fontSize: "10px",fontWeight: 'bold'}}>{detailArea}</p></Link>
                                </div>
                            )
                        })
                    :
                    //　都道府県に所属する市区町村を表示
                        detailAreaCityList.map((detailAreaCity) => {
                            return(
                                <div className="col-1 py-2 text-center">
                                    <Link to={`/search?lang=jp&area=${areaParams}${detailAreaCity.name}`}><p className="m-0 py-1" style={{fontSize: "10px",fontWeight: 'bold'}}>{detailAreaCity.name}</p></Link>
                                </div>
                            )
                        })
                    } 
                </div>
            </Fragment>
        )
    }

    //{show && <p style={{ color: 'red', fontWeight: 'bold' }}>{prefectureList.map((prefecture) => prefecture)}</p>}

    return(
        <Fragment>
                <div className="container text-center">
                <div className="row">
                    <div className="search-option col-3 py-5">
                        <div className="row text-start border p-3 mb-3">
                            <label htmlFor="" className="py-3">■エリアを絞る</label>
                            <div className="area" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                                <p className="border-bottom" style={{cursor: 'pointer', fontWeight: 'bold'}}>{areaParams === '' ? "全国" : areaParams}</p>
                                {show && <AreaDetail />}
                            </div>
                            <button><Link to='/map'>GoogleMapで探す</Link></button>
                        </div>
                        <SearchOption handleSearch={handleSearch}/>
                    </div>
                    <div className="result-list col-9 pt-5 px-5">
                            <div className="list-header row">
                                {facilities.length === 0 ? <p>サウナ施設が見つかりませんでした</p> :
                                    <>
                                        <div className="list-header-left col-8 text-start">
                                            <h3>サウナ一覧</h3>
                                            <p>{facilities.length}件(1~20)</p>
                                        </div>
                                        <div className="list-option col-4 text-end">
                                            <DropdownButton
                                                id="dropdown-basic-button"
                                                variant="info"
                                                className="floatRight"
                                                title={selected?.key || list[0].key}
                                            >
                                                {list.map((item, index) => {
                                                    return(
                                                        <DropdownItem key={index} eventKey={item.key}>
                                                            {item.value}
                                                        </DropdownItem>
                                                    )
                                                })}
                                            </DropdownButton>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="search-contents text-start">
                                <FacilityList facilities={facilities}/>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}