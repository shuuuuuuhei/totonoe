import React, { Fragment, useEffect, useState } from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { ErrorPageProps } from '../../@types/ErrorPage';
import type { Article } from '../../@types/article/Article';
import { ArticleBox } from './ArticleBox';
import { useNavigate } from 'react-router-dom';
import { ConvertErrorMessageToErrorPageProps } from '../../common/Convert';

export const ArticlesBox = () => {
    const [articles, setArticles] = useState<[Article]>();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchArticle = async () => {

            const uri = "http://localhost:4000/articles";

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
                    setArticles(resData)
                    console.log(resData)
                })
                .catch(err => {
                    // エラーメッセージを受け取りエラーページの引数を設定する
                    const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                    navigate('/error', { state: errorInfo });
                    return;
                });
        }
        fetchArticle();
    }, [])
    if (!articles) {
        return (
            <Fragment>
                記事が見つかりませんでした。
            </Fragment>
        )
    }
    return (
        <Fragment>
            <div className="container">
                <h5>人気の投稿</h5>
                <div className="articles-box">
                    <div className="row py-3 ">
                        {articles.map((article, index) => {
                            return (
                                <ArticleBox article={article} key={index} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}