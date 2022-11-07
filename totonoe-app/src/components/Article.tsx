import { useAuth0 } from '@auth0/auth0-react'
import { Rating } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { useCookies } from 'react-cookie'
import { FaRegCommentDots } from 'react-icons/fa'
import { GrLike } from 'react-icons/gr'
import { MdInsertEmoticon } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Article } from '../@types/article/Article'
import { RatingScore } from '../@types/article/Rating'
import { precisionScore, ratingList } from '../utils/constants'

type ArticleProps = {
    article: Article | undefined
}
export const DetailArticle: React.VFC<ArticleProps> = (props) => {

    const [article, setArticle] = useState<Article | undefined>(props.article);
    const { getAccessTokenSilently } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const ratingScore: RatingScore | undefined = {
        totonoi_score: article?.totonoi_score,
        relax_score: article?.relax_score,
        price_score: article?.price_score,
        service_score: article?.service_score,
        ambience_score: article?.ambience_score,
    }

    console.log("test:", article)

    const handleLike = async () => {

        const accessToken = await getAccessTokenSilently({
            audience: 'https://totonoe-app.com',
            scope: 'read:posts',
        });
        const articleID = article?.id;

        if (!accessToken) {
            throw Error("アクセストークンがありません。");
        }

        // 未いいねの場合
        if (!article?.is_liked) {
            const fetchLike = async () => {
                const uri = "http://localhost:4000/articles/" + articleID + "/like";
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
                            const err = new Error;
                            console.log(response);
                            err.message = "いいねに失敗しました" + response.status;
                            throw err;
                        }
                        return;
                    })
                    .then(() => {
                        setArticle((prevState) => (
                            prevState ? { ...prevState, like_count: prevState.like_count + 1, is_liked: true } : undefined
                        ))
                    })
                    .catch(err => {
                        console.log(err)
                    });
            }
            fetchLike();
            return
        }
        const fetchUnLike = async () => {
            const uri = "http://localhost:4000/articles/" + articleID + "/like";
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
                        const err = new Error;
                        console.log(response);
                        err.message = "いいね解除に失敗しました" + response.status;
                        throw err;
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
                                    <p className="article-date m-0">{setDateFormat(article?.created_at)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 article-right">
                            <div className="row text-end">
                                <div className="col-6 article-like-count">
                                    <GrLike size={30} onClick={handleLike} />
                                    <p>{article?.like_count}</p>
                                </div>
                                <div className="col-6 article-comment-count">
                                    <FaRegCommentDots size={30} />
                                    <p>{article?.comment_count}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-bottom row">
                        <div className="col-5 article-rating py-3">
                            <p>評価</p>
                            {ratingList.map((rating, index) => {
                                return (
                                    <div className="row py-2">
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
                                        <div className="col-4">
                                            {ratingScore[rating.id]}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-7 article-content">
                            <div className="facility text-start">
                                <Link to={`/saunas/${article?.facility_id}`}><p className="m-0">{article?.facility_name}</p></Link>
                            </div>
                            <div className="text-start py-3">
                                {/* 改行コードを含む場合は<br/>に変換する */}
                                <p>{article?.content.split('\n').map(t => (<span>{t}<br /></span>))}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

function setDateFormat(rowDate: string | undefined): string | undefined {
    if (!rowDate) {
        return rowDate
    }
    var convertedDate = rowDate.split('T').at(0)
    return convertedDate
}