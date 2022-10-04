import React, { Component, Fragment, useState, useEffect, useRef } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton, Pagination } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { FacilityList } from '../components/FacilityList';
import { SearchOption } from '../components/SearchOption';
import { Link, useLocation } from 'react-router-dom';
import { UndefinedOrNullConvertToEmpty, ConvertNaNToOne } from '../common/Convert';
import { prefectureList } from '../utils/constants';
import { Facility } from '../@types/sauna/Facility';

const baseUri = 'http://localhost:4000/facilities?';
const facilityCountPerPage = 20;

type city = {
    id: string,
    name: string,
    prefectureID: string,
}

const MinPageCount = 1;

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
    const [pageCount, setPageCount] = useState({
        targetPage: parseInt(UndefinedOrNullConvertToEmpty(queryParams.get("page"))),
        prevPage: parseInt(UndefinedOrNullConvertToEmpty(queryParams.get("page"))) - 1,
        nextPage: parseInt(UndefinedOrNullConvertToEmpty(queryParams.get("page"))) + 1,
    });
    const url = `/search?lang=jp&area=${areaParams}&facilityName=${facilityName}&priceStart=${priceStart}&priceEnd=${priceEnd}&temperatureStart=${temperatureStart}&temperatureEnd=${temperatureEnd}`
    const [maxPageCount, setMaxPage] = useState(1);

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

    const handlePageCount = (targetPage: number) => {
        setPageCount({
            targetPage: targetPage,
            prevPage: targetPage-1,
            nextPage: targetPage+1,
        });
    };

    /**
    * 再検索の後に使用できるページカウンターの初期化メソッド
    * */
    const handlePageCountInitialized = () => {
        setPageCount({targetPage: MinPageCount, prevPage: MinPageCount - 1, nextPage: MinPageCount + 1})
    }

    /**
     * @param facilityFullCount 施設取得件数
    * 施設取得件数から最大ページ数を計算する
    * */
    const calculateMaxPageCount = (facilityFullCount: number) => {
        return Math.ceil(facilityFullCount/facilityCountPerPage)
    }

    // searchOptionで指定された条件から検索を行う
    const handleSearch = (searchOption: string) => {
        const uri = baseUri+`area=${areaParams}&facilityName=${facilityName}${searchOption}`;

        const requestOption: RequestInit = {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const fetchFacilities = async() => {
            await fetch(uri, requestOption)
                .then((response) => {
                    if (!response.ok) {
                        const err = new Error;
                        err.message = "サウナ施設一覧取得に失敗しました" + response.status;
                        throw err;
                    }
                    return response.json();
                })
                .then((resData: Facility[]) => {
                    console.log("res:",resData)
                    setFacilitiesState(resData);
                    setMaxPage(ConvertNaNToOne(calculateMaxPageCount(resData[0]?.full_count)));

                    // ページカウントの初期化
                    handlePageCountInitialized();
                })
            .catch(err => {
                console.log(err)
            });
        }
        fetchFacilities();
    }

    useEffect(() => {
        // window.alert(pageCount.targetPage)
        const uri = `${baseUri}area=${areaParams}&facilityName=${facilityName}&page=${pageCount.targetPage.toString()}&priceStart=${priceStart}&priceEnd=${priceEnd}&priceStart=${priceStart}&temperatureStart=${temperatureStart}&temperatureEnd=${temperatureEnd}`;
        const fetchSaunas = async() => {
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
                .then((resData: Facility[]) => {
                    setFacilitiesState(resData);
                    setMaxPage(ConvertNaNToOne(calculateMaxPageCount(resData[0]?.full_count)));
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
            const fetchAreaDetailUri = `http://localhost:4000/prefecture/${prefectureID}/cities`;
            const requestOption: RequestInit = {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
            };
            await fetch(fetchAreaDetailUri, requestOption)
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
                <div className="border row container" style={{position: "absolute", top: "400px", left: "380px", backgroundColor: "white", width: "850px",}} onClick={() => setShow(false)}>
                    {areaParams === '' ?
                    // 全国の都道府県を表示
                        detailAreaPrefectureList?.map((detailArea) => {
                            return(
                                <div className="col-1 py-2 text-center">
                                    <Link to={`/search?lang=jp&page=${MinPageCount}&area=${detailArea}`} onClick={() => handlePageCount(MinPageCount)}><p className="m-0 py-1" style={{fontSize: "10px",fontWeight: 'bold'}}>{detailArea}</p></Link>
                                </div>
                            )
                        })
                    :
                    //　都道府県に所属する市区町村を表示
                        detailAreaCityList.map((detailAreaCity) => {
                            return(
                                <div className="col-1 py-2 text-center">
                                    <Link to={`/search?lang=jp&page=${MinPageCount}&area=${areaParams}${detailAreaCity.name}`} onClick={() => handlePageCount(MinPageCount)}><p className="m-0 py-1" style={{fontSize: "10px",fontWeight: 'bold'}}>{detailAreaCity.name}</p></Link>
                                </div>
                            )
                        })
                    } 
                </div>
            </Fragment>
        )
    }

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
                            <button><Link to={`/map?lang=jp&area=${areaParams}`}>GoogleMapで探す</Link></button>
                        </div>
                        <SearchOption handleSearch={handleSearch}/>
                    </div>
                    <div className="result-list col-9 pt-5 px-5">
                            <div className="list-header row" id="list-header">
                                {facilities.length === 0 ? <p>サウナ施設が見つかりませんでした</p> :
                                    <>
                                        <div className="list-header-left col-8 text-start">
                                            <h3>サウナ一覧</h3>
                                            {/* 表示件数 */}
                                            <p>{facilities[0].full_count}件({(pageCount.targetPage - 1) * facilityCountPerPage + 1}~{facilities.length < facilityCountPerPage ? facilities[0].full_count: facilityCountPerPage*pageCount.targetPage})</p>
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
                    <div className="py-5 position-relative">
                        {
                            maxPageCount !== 0 &&
                            <Pagination className="position-absolute bottom-0 start-50 translate-middle">

                                {/* MinCountPage(1)に移動矢印 */}
                                <Pagination.First onClick={() => handlePageCount(MinPageCount)}/>

                                {/* 前ページに移動矢印 */}
                                <Pagination.Prev disabled={pageCount.targetPage === MinPageCount} onClick={() => handlePageCount(pageCount.prevPage)}/>

                                {/* MinPageCountフィールド (1)*/}
                                {pageCount.targetPage > MinPageCount + 1 && <Pagination.Item href={url+`&page=${MinPageCount}`}>{MinPageCount}</Pagination.Item>}

                                {/* ・・・フィールド */}
                                {pageCount.targetPage > MinPageCount + 2 && <Pagination.Ellipsis disabled/>}

                                {/* 前ページ数フィールド */}
                                {pageCount.targetPage !== MinPageCount && <Pagination.Item href={url+`&page=${pageCount.prevPage}`}>{pageCount.prevPage}</Pagination.Item>}

                                {/* 現在ページ数フィールド */}
                                <Pagination.Item active>{pageCount.targetPage}</Pagination.Item>

                                {/* 次ページ数フィールド */}
                                {pageCount.targetPage !== maxPageCount && <Pagination.Item href={url+`&page=${pageCount.nextPage}`}>{pageCount.nextPage}</Pagination.Item>}
                                
                                {/* ・・・フィールド */}
                                {pageCount.targetPage < maxPageCount - 2 && <Pagination.Ellipsis disabled/>}

                                {/* MinCountPage(1)に移動矢印 */}
                                {pageCount.targetPage < maxPageCount - 1 && <Pagination.Item href={url+`&page=${maxPageCount}`}>{maxPageCount}</Pagination.Item>}

                                {/* 次ページに移動矢印 */}
                                <Pagination.Next disabled={pageCount.targetPage === maxPageCount} onClick={() => handlePageCount(pageCount.nextPage)}/>

                                {/* MaxPageCountに移動矢印 */}
                                <Pagination.Last onClick={() => handlePageCount(maxPageCount)} />
                            </Pagination>
                        }
                    </div>
                </div>
        </Fragment>
    )
}