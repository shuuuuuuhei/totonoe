import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ErrorPageProps } from '../../@types/ErrorPage';
import { Article } from '../../@types/article/Article';
import { Comment } from '../../@types/article/Comment';
import { DetailArticle } from '../../components/Article/Article';
import { Comments } from '../../components/Article/Comment';
import { IsNullOrUndefinedOrEmpty } from '../../common/Check';
import { toast } from 'react-toastify';
import { BaseURI } from '../../utils/constants';

export const ArticlePage = () => {
    const [article, setArticle] = useState<Article>();
    const [comments, setComments] = useState<Comment[]>();
    const params = useParams();
    const { getAccessTokenSilently, loginWithRedirect } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    /* 
        toast表示を管理
    */
    const [isShowedToast, setIsShowedToast] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (!params.articleID) {
            console.log("articleIDなし")
            return
        }

        // 遷移元のメッセージを確認
        if (!isShowedToast && !IsNullOrUndefinedOrEmpty(location.state?.toast)) {

            if (location.state?.toast.status === 'success') {
                // 遷移元で設定したメッセージを表示する
                toast.success(location.state?.toast.message);

                // toastを表示済にする
                setIsShowedToast(true);
            }
        }

        const fetchArticle = async () => {
            const uri = BaseURI + "/articles/" + params.articleID;

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
            const uri = BaseURI + "/articles/" + params.articleID + "/comments";
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