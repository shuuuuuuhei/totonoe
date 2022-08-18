import React, { Component, Fragment, useState, useEffect } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BsHeart } from 'react-icons/bs';
import { FacilityList } from '../components/SaunaList';
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';

export const SearchResultPage = () => {
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

    useEffect(() => {
        const fetchSaunas = async() => {
            const uri = "http://localhost:4040/saunas";
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
                        err.message = "サウナ一覧取得に失敗しました" + response.status;
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
                <div className="row">
                    <div className="search-option col-3">
                        Column
                    </div>
                    <div className="result-list col-8 pt-5">
                        <div className="list-header row">
                            <div className="list-header-left col-8">
                                <h3>サウナ一覧</h3>
                                <p>200件(1~20)</p>
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
                        </div>
                        <div className="search-contents">
                            <FacilityList facilities={facilities}/>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}