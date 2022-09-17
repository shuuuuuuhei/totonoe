import React, { Component, Fragment, useState, useEffect, useRef } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { ModalHover } from 'react-modal-hover'
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BsHeart } from 'react-icons/bs';
import { FacilityList } from '../components/SaunaList';
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { SearchOption } from '../components/SearchOption';
import { Link, useLocation } from 'react-router-dom';
import { UndefinedOrNullConvertToEmpty } from '../common/Convert';

export const SearchResultPage = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const areaParams = UndefinedOrNullConvertToEmpty(queryParams.get("area"));
    const facilityName = UndefinedOrNullConvertToEmpty(queryParams.get("name"));

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

    useEffect(() => {
        const fetchSaunas = async() => {
            const uri = `http://localhost:4000/facilities?area=${areaParams}&facilityName=${facilityName}`;
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
    }, [])

    if(!facilities) {
        return(
            <Fragment>
                <p>ロード中...</p>
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
                                <p className="border-bottom" style={{cursor: 'pointer'}}>{areaParams === '' ? "全国" : areaParams}</p>
                                {show && <p style={{ color: 'red', fontWeight: 'bold' }}>Tooltipに表示させたい内容をここに記述します。</p>}
                            </div>
                            <button><Link to='/map'>GoogleMapで探す</Link></button>
                        </div>
                        <SearchOption />
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