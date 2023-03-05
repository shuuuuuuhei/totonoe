import { useAuth0 } from '@auth0/auth0-react'
import { Rating, Button, IconButton } from '@mui/material'
import React, { Fragment, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import ChatIcon from '@mui/icons-material/Chat';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { MdInsertEmoticon } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { Article } from '../../@types/article/Article'
import { RatingScore } from '../../@types/article/Rating'
import { BaseURI, GetTokenSilentlyParams, precisionScore, ratingList, themeColor } from '../../utils/constants'
import { ConvertErrorMessageToErrorPageProps, SetDateFormat } from '../../common/Convert'
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify'
import { useErrorHandler } from 'react-error-boundary';
import { ErrorPageProps } from '../../@types/ErrorPage';
import { IsNullOrUndefinedOrEmpty } from '../../common/Check';

type ArticleProps = {
    article: Article | undefined
}
export const DetailArticle: React.VFC<ArticleProps> = (props) => {

    const [article, setArticle] = useState<Article | undefined>(props.article);
    const { getAccessTokenSilently, loginWithRedirect } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const ratingScore: RatingScore | undefined = {
        totonoi_score: article?.totonoi_score,
        relax_score: article?.relax_score,
        price_score: article?.price_score,
        service_score: article?.service_score,
        ambience_score: article?.ambience_score,
    }
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const navigate = useNavigate();
    const [isMyArticle, setIsMyArticle] = useState(false);

    const handleLike = async () => {
        let accessToken = ""
        try {
            accessToken = await getAccessTokenSilently({ authorizationParams: GetTokenSilentlyParams });
        } catch (error) {
            toast.warning("ログインしてください")
            return;
        }
        const articleID = article?.id;

        if (IsNullOrUndefinedOrEmpty(cookies.userID)) {
            toast.warning("ログインしてください")
            return;
        }

        // 未いいねの場合
        if (!article?.is_liked) {
            const fetchLike = async () => {
                const uri = BaseURI + "/articles/" + articleID + "/like";
                const requestOption: RequestInit = {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ 'user_id': cookies.userID })
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
                    .then(() => {
                        if (!article.like_count) {
                            setArticle({
                                ...article,
                                like_count: 1,
                                is_liked: true,
                            })
                        } else {
                            setArticle({
                                ...article,
                                like_count: article.like_count + 1,
                                is_liked: true,
                            })
                        }
                    })
                    .catch(err => {
                        // エラーメッセージを受け取りエラーページの引数を設定する
                        const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                        navigate('/error', { state: errorInfo });
                        return;
                    });
            }
            fetchLike();
            return
        }
        const fetchUnLike = async () => {
            const uri = BaseURI + "/articles/" + articleID + "/like";
            const requestOption: RequestInit = {
                method: "DELETE",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 'user_id': cookies.userID })
            };
            await fetch(uri, requestOption)
                .then((response) => {
                    if (!response.ok) {
                        // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                        const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                        navigate('/error', { state: errorInfo });
                        return;
                    }
                    return;
                })
                .then(() => {
                    setArticle((prevState) => (
                        prevState ? { ...prevState, like_count: prevState.like_count - 1, is_liked: false } : undefined
                    ))
                })
                .catch(err => {
                    console.log(err)
                });
        }
        fetchUnLike();
    }

    const handleDeleteArticle = async () => {
        const accessToken = await getAccessTokenSilently(
            { authorizationParams: GetTokenSilentlyParams }
        );
        const articleID = article?.id;

        if (!accessToken) {
            throw Error("アクセストークンがありません。");
        }

        const fetchDeleteArticle = async () => {
            const uri = BaseURI + "/articles/" + articleID;
            const requestOption: RequestInit = {
                method: "DELETE",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 'user_id': cookies.userID, 'article': article })
            };
            await fetch(uri, requestOption)
                .then((response) => {
                    if (!response.ok) {
                        // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                        const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                        navigate('/error', { state: errorInfo });
                        return;
                    }
                    return;
                })
                .then(() => {
                    navigate('/profile/' + cookies.userID,
                        { state: { toast: { status: "success", message: "記事を削除しました。" } } }
                    );
                })
                .catch(err => {
                    toast.error("いいね解除に失敗しました。")
                });
            return
        }
        fetchDeleteArticle();
    }

    useEffect(() => {
        if (article.user_id === cookies.userID) {
            setIsMyArticle(true);
        }

    }, [])
    return (
        <Fragment>
            <div className="article-wrap border container text-center my-3 p-5" style={{ width: "800px" }}>
                <Link
                    to={`/articles/${article?.id}`}
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <div className="row">
                        <div className="col-9">
                            <div className="row text-center">
                                <div className="col-3 user-icon text-end py-2">
                                    <MdInsertEmoticon size={30} />
                                </div>
                                <div className="col-9 user text-start">
                                    <Link to={`/profile/${article?.user_id}`}><p className="user-name m-0">{article?.user_name}</p></Link>
                                    <p className="article-date m-0">投稿日：{SetDateFormat(article?.created_at)}</p>
                                    <p className="article-date m-0">訪問日：{SetDateFormat(article?.admission_date)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 article-right">
                            <div className="row text-end">
                                <div className="col-5 article-like-count text-center">
                                    {
                                        article.is_liked ? <IconButton onClick={handleLike}><ThumbUpOffAltIcon fontSize="large" color="warning" /></IconButton> : <IconButton onClick={handleLike}><ThumbUpOffAltIcon fontSize="large" /></IconButton>
                                    }
                                    <p>{article?.like_count}</p>
                                </div>
                                <div className="col-5 article-comment-count text-center py-2">
                                    <ChatIcon fontSize="large" />
                                    <p>{article?.comment_count}</p>
                                </div>
                                <div className="col-2">
                                    {/* ユーザーが投稿した記事であれば設定アイコンを表示する */}
                                    {
                                        isMyArticle &&
                                        <SettingsIcon
                                            onClick={() => { setShowDeleteButton(!showDeleteButton) }}
                                        />
                                    }
                                    {/* 削除ボタン表示 */}
                                    {showDeleteButton &&
                                        <div className="row" style={{ position: "absolute" }}>
                                            <Button variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={handleDeleteArticle}>
                                                削除する
                                            </Button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 施設評価 */}
                    <div className="article-bottom row py-3">
                        <div className="col-4 article-rating py-5 px-0">
                            <p>評価</p>
                            {ratingList.map((rating, index) => {
                                return (
                                    <div className="row py-2" key={index}>
                                        <div className="col-3">
                                            <p style={{ fontSize: "9px" }}>{rating.name}</p>
                                        </div>
                                        <div className="col-4">
                                            <Rating
                                                value={ratingScore[rating.id]}
                                                precision={precisionScore}
                                                readOnly
                                            />
                                        </div>
                                        <div className="col-5">
                                            {ratingScore[rating.id]}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* 記事メイン部 */}
                        <div className="col-8 article-content">
                            {/* 施設名 */}
                            <div className="facility text-center">
                                <Link to={`/saunas/${article?.facility_id}`}>
                                    <h3 style={{ width: "300px" }} className="border-bottom">
                                        {article?.facility_name}
                                    </h3>
                                </Link>
                            </div>
                            {/* 記事本文 */}
                            <div className="text-start py-3">
                                {/* 改行コードを含む場合は<br/>に変換する */}
                                <p>{article?.content.split('\n').map((t, index) => (<span key={index}>{t}<br /></span>))}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}