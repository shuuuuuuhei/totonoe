import React, { Fragment, useEffect, useState } from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import type { Article } from '../../@types/article/Article';
import { ArticleBox } from './ArticleBox';

export const ArticlesBox = () => {
    const [articles, setArticles] = useState<[Article]>();
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
                        const err = new Error;
                        console.log(response);
                        err.message = "記事が見つかりませんでした。" + response.status;
                        throw err;
                    };
                    return response.json();
                })
                .then((resData) => {
                    setArticles(resData)
                    console.log(resData)
                })
                .catch(err => {
                    console.log(err)
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
            <div className="list-wrap container">
                <h5>人気の投稿</h5>
                <div className="articles-box">
                    <div className="row justify-content-center align-items-center py-3">
                        <ArticleBox article={articles?.at(0)} />
                        <ArticleBox article={articles?.at(1)} />
                        <ArticleBox article={articles?.at(2)} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}