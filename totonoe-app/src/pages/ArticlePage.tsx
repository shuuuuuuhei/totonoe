import React, { Component, Fragment, useState, useEffect } from 'react'
import { Article } from '../@types/article/Article';
import { useParams } from 'react-router-dom';
import { ArticleBox } from '../components/ArticleBox';
import { DetailArticle } from '../components/Article';
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { Comments } from '../components/Comment';
import { Comment } from '../@types/article/Comment'

export const ArticlePage = () => {
    const [article, setArticle] = useState<Article>();
    const [comments, setComments] = useState<Comment[]>();
    const params = useParams();
    const {getAccessTokenSilently} = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();
           
    useEffect(() => {
        if(!params.articleID) {
            console.log("articleIDなし")
            return
        }
        const fetchArticle = async() => {
            const uri = "http://localhost:4000/articles/"+params.articleID;
            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            });
            const requestOption: RequestInit = {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                    "User-ID": cookies.userID,
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
                console.log(resData)
                setArticle(resData)
            })
            .catch(err => {
                console.log(err)
            });        
        }
        const fetchComment = async() => {
            const uri = "http://localhost:4000/articles/"+params.articleID+"/comments";
            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            });
            const requestOption: RequestInit = {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            };
            await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    const err = new Error;
                    console.log(response);
                    err.message = "記事コメントの取得に失敗しました, articleID: "+ params.articleID + ", レスポンスコード：" + response.status;
                    throw err;
                }
                return response.json();
            })
            .then((resData) => {
                setComments(resData);
            })
            .catch(err => {
                console.log(err)
            });        
        }
        fetchComment();
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
            <hr/>
            <Comments comments={comments} setComments={setComments} articleID={article.id}/>
        </Fragment>
    )
}