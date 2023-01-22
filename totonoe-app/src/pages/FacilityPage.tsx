import React, { Fragment, useEffect, useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ErrorPageProps } from '../@types/ErrorPage';
import { Article } from '../@types/article/Article';
import { Facility } from '../@types/sauna/Facility';
import { ArticleList } from '../components/Article/ArticleList';
import { SaunaDetail } from '../components/Facility/SaunaDetail';
import { Valuation } from '../components/Valuation';
import { ConvertErrorMessageToErrorPageProps } from '../common/Convert';

export const SaunaPage = () => {

    const [facility, setFacilityState] = useState<Facility>();
    const [articles, setArticlesState] = useState<[Article]>();
    const navigate = useNavigate();
    const [activeMode, setActiveMode] = useState("nav-1");
    const { facilityID } = useParams();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        // ボタンを非活性にする
        document.getElementById(activeMode)?.classList.remove("active")

        // ボタンを活性化する
        const id = event.currentTarget.id;
        document.getElementById(id)?.classList.add("active")
        setActiveMode(id)
    }

    useEffect(() => {
        const fetchSauna = async () => {
            const uri = "http://localhost:4000/facility/" + facilityID;
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
                        // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                        const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                        navigate('/error', { state: errorInfo });
                        return;
                    }
                    return response.json();
                })
                .then((resData) => {
                    setFacilityState(resData);
                    console.log(facility)
                })
                .catch(err => {
                    // エラーメッセージを受け取りエラーページの引数を設定する
                    const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                    navigate('/error', { state: errorInfo });
                    return;
                });
        }
        const fetchGetArticlesByFacilityID = async () => {
            const uri = "http://localhost:4000/facilities/" + facilityID + "/articles";
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
                        // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                        const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                        navigate('/error', { state: errorInfo });
                        return;
                    }
                    return response.json();
                })
                .then((resData) => {
                    setArticlesState(resData);
                    console.log(articles)
                })
                .catch(err => {
                    // エラーメッセージを受け取りエラーページの引数を設定する
                    const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                    navigate('/error', { state: errorInfo });
                    return;
                });
        }
        fetchSauna();
        fetchGetArticlesByFacilityID();
    }, []);

    if (!facility) <Fragment>return("ロード中...")</Fragment>

    return (
        <Fragment>
            <div className="container py-5 px-5">
                <div className="row align-items-center py-2 text-center">
                    <h1>
                        {facility?.name}
                    </h1>
                </div>
                <div className="facility-action text-end">
                    {/* 投稿ページのリンク */}
                    <Link to={`/saunas/${facility?.id}/articles/new`} ><HiOutlinePencilAlt size={40} /></Link>
                    {/* お気に入り登録(未着手)
                    <BsHeart size={35} /> */}
                </div>
                <ul className="nav nav-pills nav-fill py-3">
                    <li className="nav-item"><button id='nav-1' className="nav-link active" onClick={handleClick}>施設情報</button></li>
                    <li className="nav-item"><button id='nav-2' className="nav-link" onClick={handleClick}>投稿</button></li>
                </ul>
                <div className="sauna-contents">
                    {
                        (() => {
                            if (activeMode == 'nav-1') return (<SaunaDetail facility={facility} />)
                            if (activeMode == 'nav-2') return (!articles ? <>記事情報なし</> : <ArticleList articles={articles} />)
                        })()
                    }
                </div>
            </div>
        </Fragment>
    )
}