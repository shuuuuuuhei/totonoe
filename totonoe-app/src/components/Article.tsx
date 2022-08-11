import React, { Component, Fragment, useState } from 'react'
import { Article } from '../@types/article/Article'
import { GrLike } from 'react-icons/gr'
import { MdInsertEmoticon } from 'react-icons/md'
import { FaRegCommentDots } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useCookies } from 'react-cookie'

type ArticleProps = {
    article: Article|undefined
}
export const DetailArticle: React.VFC<ArticleProps> = (props) => {

    const [article, setArticle] = useState<Article|undefined>(props.article);
    const {getAccessTokenSilently} = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();

    const handleLike = async() => {
        
        const accessToken = await getAccessTokenSilently({
            audience: 'https://totonoe-app.com',
            scope: 'read:posts',
        });
        const articleID = article?.id;

        if (!accessToken) {
            throw Error("アクセストークンがありません。");
        }

        
        // 未いいねの場合
        if(!article?.is_liked) {
            const fetchLike = async() => {
                const uri = "http://localhost:4000/articles/"+articleID+"/like";
                const requestOption: RequestInit = {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({'user_id': cookies.userID})
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
        const fetchUnLike = async() => {
            const uri = "http://localhost:4000/articles/"+articleID+"/like";
            const requestOption: RequestInit = {
                method: "DELETE",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({'user_id': cookies.userID})
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
                    prevState ? { ...prevState, like_count: prevState.like_count - 1, is_liked: false} : undefined
                ))
            })
            .catch(err => {
                console.log(err)
            });
        }
        fetchUnLike();
    }

    return(
        <Fragment>
            <div className="article-wrap">
                <div className="article-header row justify-content-center">
                    <div className="col-10 article-title">
                        <h3><Link to={'/saunas/'+article?.sauna_id+'/articles/'+article?.id}>{article?.title}</Link></h3>
                    </div>
                    <div className="col-2 article-top-right">
                        <div className="row justify-content-center">
                            <div className="col-2 article-like-count">
                                <GrLike size={30} onClick={handleLike}/>
                                <p>{article?.like_count}</p>
                            </div>
                            <div className="col-2 article-comment-count">
                                <FaRegCommentDots size={30}/>
                                <p>{article?.comment_count}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-contents">
                    <div className="article-top row">
                        <div className="col-1 user-icon">
                            <MdInsertEmoticon size={30}/>
                        </div>
                        <div className="col-3 user">
                            <p className="user-name">{article?.user_name}</p>
                            <p className="article-date">{setDateFormat(article?.CreatedAt)}</p>
                        </div>
                        <div className="col-8 sauna text-center">
                            <div className="sauna-name">
                            <h3>{article?.sauna_name}</h3>
                            </div>
                            <div className="sauna-place">
                                {article?.sauna_name}
                            </div>
                        </div>
                    </div>
                    <div className="article-bottom row">
                        <div className="col-5 article-evaluate">
                            評価
                        </div>
                        <div className="col-7 article-content">
                            <p>{article?.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

function setDateFormat(rowDate: string|undefined): string|undefined {
    if(!rowDate) {
        return rowDate
    }
    var convertedDate = rowDate.split('T').at(0)
    return convertedDate
}