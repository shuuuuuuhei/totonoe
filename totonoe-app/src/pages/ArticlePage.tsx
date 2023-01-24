import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorPageProps } from '../@types/ErrorPage';
import { Article } from '../@types/article/Article';
import { Comment } from '../@types/article/Comment';
import { DetailArticle } from '../components/Article/Article';
import { Comments } from '../components/Comment';

export const ArticlePage = () => {
    const [article, setArticle] = useState<Article>();
    const [comments, setComments] = useState<Comment[]>();
    const params = useParams();
    const { getAccessTokenSilently, loginWithRedirect } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    useEffect(() => {
        if (!params.articleID) {
            console.log("articleIDなし")
            return
        }
        const fetchArticle = async () => {
            const uri = "http://localhost:4000/articles/" + params.articleID;

            const requestOption: RequestInit = {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    // 未ログインの場合はユーザーIDを指定しない
                    "User-ID": cookies.userID ? cookies.userID : "",
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
                .then((resData: Article) => {
                    setArticle(resData)
                })
                .catch(err => {
                    console.log(err)
                });
        }
        const fetchComment = async () => {
            const uri = "http://localhost:4000/articles/" + params.articleID + "/comments";
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
                        err.message = "記事コメントの取得に失敗しました, articleID: " + params.articleID + ", レスポンスコード：" + response.status;
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
    if (!article) {
        return (
            <div>ロード中...</div>
        )
    }
    return (
        <Fragment>
            <DetailArticle article={article} />
            <hr />
            <Comments comments={comments} setComments={setComments} articleID={article.id} />
        </Fragment>
    )
}