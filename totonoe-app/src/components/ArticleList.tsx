import React, { Component, Fragment, useEffect, useState } from 'react'
import '../style/Article-List.css'
import {MdInsertEmoticon} from 'react-icons/md';
import {GrLike} from 'react-icons/gr'
import {FaRegCommentDots} from 'react-icons/fa'
import { Article } from '../@types/article/Article';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { ProfilePage } from '../pages/ProfilePage';

type ArticlesProps = {
    articles: [Article]|undefined;
}
export const ArticleList: React.VFC<ArticlesProps> = ({articles}) => {
    
    return (
        <Fragment>
            <div className="article-list container">
                {articles?.map((article) => {
                    return(
                        <div className="article-wrap">
                            <div className="article-header row justify-content-center">
                                <div className="col-10 article-title">
                                    <h3>{article.Title}</h3>
                                </div>
                                <div className="col-2 article-top-right">
                                    <div className="row justify-content-center">
                                        <div className="col-2 article-like-count">
                                            <GrLike size={30}/>
                                            <p>{article.like_count}</p>
                                        </div>
                                        <div className="col-2 article-comment-count">
                                            <FaRegCommentDots size={30}/>
                                            <p>{article.comment_count}</p>
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
                                        <p className="user-name">{article.user_name}</p>
                                        <p className="article-date">{setDateFormat(article.CreatedAt)}</p>
                                    </div>
                                    <div className="col-8 sauna text-center">
                                        <div className="sauna-name">
                                        <h3>{article.sauna_name}</h3>
                                        </div>
                                        <div className="sauna-place">
                                            {article.sauna_name}
                                        </div>
                                    </div>
                                </div>
                                <div className="article-bottom row">
                                    <div className="col-5 article-evaluate">
                                        評価
                                    </div>
                                    <div className="col-7 article-content">
                                        <p>{article.Content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
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

