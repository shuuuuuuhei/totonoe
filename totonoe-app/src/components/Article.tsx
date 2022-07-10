import React, { Component, Fragment } from 'react'
import { Article } from '../@types/article/Article'
import { GrLike } from 'react-icons/gr'
import { MdInsertEmoticon } from 'react-icons/md'
import { FaRegCommentDots } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type ArticleProps = {
    article: Article|undefined
}
export const DetailArticle: React.VFC<ArticleProps> = (props) => {
    return(
        <Fragment>
            <div className="article-wrap">
                <div className="article-header row justify-content-center">
                    <div className="col-10 article-title">
                        <h3><Link to={'saunas/'+props.article?.SaunaID+'/articles/'+props.article?.ID}>{props.article?.Title}</Link></h3>
                    </div>
                    <div className="col-2 article-top-right">
                        <div className="row justify-content-center">
                            <div className="col-2 article-like-count">
                                <GrLike size={30}/>
                                <p>{props.article?.like_count}</p>
                            </div>
                            <div className="col-2 article-comment-count">
                                <FaRegCommentDots size={30}/>
                                <p>{props.article?.comment_count}</p>
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
                            <p className="user-name">{props.article?.user_name}</p>
                            <p className="article-date">{setDateFormat(props.article?.CreatedAt)}</p>
                        </div>
                        <div className="col-8 sauna text-center">
                            <div className="sauna-name">
                            <h3>{props.article?.sauna_name}</h3>
                            </div>
                            <div className="sauna-place">
                                {props.article?.sauna_name}
                            </div>
                        </div>
                    </div>
                    <div className="article-bottom row">
                        <div className="col-5 article-evaluate">
                            評価
                        </div>
                        <div className="col-7 article-content">
                            <p>{props.article?.Content}</p>
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