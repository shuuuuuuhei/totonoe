import React, { Component, Fragment, useState, useEffect } from 'react'
import { Article } from '../@types/article/Article';
import { useParams } from 'react-router-dom';
import { ArticleBox } from '../components/ArticleBox';
import { DetailArticle } from '../components/Article';

export const ArticlePage = () => {
    const [article, setArticle] = useState<Article>();
    const params = useParams();
       
    useEffect(() => {
        if(!params.articleID) {
            console.log("articleIDなし")
            return
        }
        const fetchArticle = async() => {
            const uri = "http://localhost:4000/saunas/"+params.saunaID+"/articles/"+params.articleID;

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
                    err.message = "記事が見つかりませんでした。記事ID："+ params.articleID + ", レスポンスコード：" + response.status;
                    throw err;
                }
                return response.json();
            })
            .then((resData) => {
                setArticle(resData)
                console.log(resData)
            })
            .catch(err => {
                console.log(err)
            });        
        }
        fetchArticle();
    }, [])
    if(!article) {
        return(
            <div>ロード中...</div>
        )
    }
    return(
        <Fragment>
            <DetailArticle article={article}/>
        </Fragment>
    )
}