import { Component, Fragment, useEffect, useReducer, useState } from 'react';
import type { Article } from '../@types/article/Article';
import { ArticleBox } from './ArticleBox';
import {BsChevronDoubleLeft, BsChevronDoubleRight} from 'react-icons/bs'
import React from 'react';

export const ArticlesBox = () => {
    const [articles, setArticles] = useState<[Article]>();
    useEffect(() => {
        const fetchArticle = async() => {
            
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
    if(!articles) {
        return(
            <Fragment>
                記事が見つかりませんでした。
            </Fragment>
        )
    }
    return(
        <Fragment>
            <div className="list-wrap">
                <div className="articles-box container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <BsChevronDoubleLeft className="col-1" size={45}/>
                            <ArticleBox article={articles?.at(0)}/>
                            <ArticleBox article={articles?.at(1)}/>
                            <ArticleBox article={articles?.at(2)}/>
                        <BsChevronDoubleRight className="col-1" size={45}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}