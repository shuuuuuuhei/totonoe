import React, { Component, Fragment, useEffect, useState } from 'react'
import '../style/Article-List.css'
import {MdInsertEmoticon} from 'react-icons/md';
import {GrLike} from 'react-icons/gr'
import {FaRegCommentDots} from 'react-icons/fa'
import { Article } from '../@types/article/Article';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
export const ArticleList = () => {
    const [articles, setArticles] = useState<[Article]>();
    const {getAccessTokenSilently, user} = useAuth0();

    useEffect(() => {
        const fetchArticle = async() => {
            const uri = "http://localhost:4000/articles";
            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            });

            if (!accessToken || !user) {
                throw Error("アクセストークンがありません。");
            }

            const requestOption: RequestInit = {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: user.sub?.split('|').at(1)
                })
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
                setArticles(resData);
            })
            .catch(err => {
                console.log(err)
            });
        }
    })
    if(!articles) {
        return(
            <Navigate to="/profile" />
        )
    }
    return (
        <Fragment>
            <div className="article-list container">
                {articles?.map((article) => {
                    return(
                        <div>addd</div>
                    )
                })}
            </div>
        </Fragment>
    )
}
