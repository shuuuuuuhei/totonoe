import React, { Component, Fragment, useState, useEffect } from 'react'
import { Article } from '../@types/article/Article';
import { useParams } from 'react-router-dom';
import { ArticleBox } from '../components/ArticleBox';
import { DetailArticle } from '../components/Article';
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';

export const ArticlePage = () => {
    const [article, setArticle] = useState<Article>();
    const params = useParams();
    const {getAccessTokenSilently} = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();
           
    useEffect(() => {
        if(!params.articleID) {
            console.log("articleIDなし")
            return
        }
        console.log(params.articleID)
        const fetchArticle = async() => {
            const uri = "http://localhost:4000/articles/"+params.articleID;

            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            });
            console.log(cookies.userID)
            const requestOption: RequestInit = {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                    "User-ID": cookies.userID,
                },
            };
            console.log(requestOption)
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