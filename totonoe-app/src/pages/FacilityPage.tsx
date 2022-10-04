import React, { Component, Fragment, useState, useEffect } from 'react'
import { SaunaDetail } from '../components/SaunaDetail';
import { Valuation } from '../components/Valuation';
import { useParams, Link } from 'react-router-dom';
import { Article } from '../@types/article/Article';
import { ArticleList } from '../components/ArticleList';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BsHeart } from 'react-icons/bs';
import { Facility } from '../@types/sauna/Facility';

export const SaunaPage = () => {

    const [facility, setFacilityState] = useState<Facility>();
    const [articles, setArticlesState] = useState<[Article]>();

    const [activeMode, setActiveMode] = useState("nav-1");
    const {facilityID} = useParams();

    const handleClick= (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        // ボタンを非活性にする
        document.getElementById(activeMode)?.classList.remove("active")

        // ボタンを活性化する
        const id = event.currentTarget.id;
        document.getElementById(id)?.classList.add("active")
        setActiveMode(id)
    }

    console.log(facilityID)

    useEffect(() => {
        const fetchSauna = async() => {
            const uri = "http://localhost:4000/facility/"+facilityID;
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
                        err.message = "サウナ施設取得に失敗しました" + response.status;
                        throw err;
                    }
                    return response.json();
                })
                .then((resData) => {
                    setFacilityState(resData);
                    console.log(facility)
                })
            .catch(err => {
                console.log(err)
            });
        }
        const fetchGetArticlesByFacilityID = async() => {
            const uri = "http://localhost:4000/facilities/"+facilityID+"/articles";
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
                        err.message = "サウナ施設に紐づく記事情報取得に失敗しました" + response.status;
                        throw err;
                    }
                    return response.json();
                })
                .then((resData) => {
                    setArticlesState(resData);
                    console.log(articles)
                })
            .catch(err => {
                console.log(err)
            });
        }
        fetchSauna();
        fetchGetArticlesByFacilityID();
    }, []);

    if(!facility) <Fragment>return("ロード中...")</Fragment>

    return(
        <Fragment>
            <div className="container py-5 px-5">
                <div className="row align-items-center py-2 text-center">
                    <h1>
                        {facility?.name}
                    </h1>
                </div>
                <div className="facility-action text-end">
                    {/* 投稿ページのリンク */}
                    <Link to={`/saunas/${facility?.id}/articles/new`} ><HiOutlinePencilAlt size={40}/></Link>
                    {/* お気に入り登録(未着手) */}
                    <BsHeart size={35} />
                </div>
                <ul className="nav nav-pills nav-fill py-3">
                    <li className="nav-item"><button id='nav-1' className="nav-link active" onClick={handleClick}>施設情報</button></li>
                    <li className="nav-item"><button id='nav-2' className="nav-link" onClick={handleClick}>投稿</button></li>
                </ul>
                <div className="sauna-contents">
                    {
                        (() => {
                            if(activeMode == 'nav-1') return( <SaunaDetail facility={facility}/> )
                            if(activeMode == 'nav-2') return( !articles ? <>記事情報なし</> : <ArticleList articles={articles} />)
                            if(activeMode == 'nav-3') return( < Valuation/> )
                        })()
                    }
                </div>
            </div>
        </Fragment>
    )
}