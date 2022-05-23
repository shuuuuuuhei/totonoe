import React, { Component, Fragment } from 'react'
import '../style/Article-List.css'
import {MdInsertEmoticon} from 'react-icons/md';
import {GrLike} from 'react-icons/gr'
import {FaRegCommentDots} from 'react-icons/fa'
export const ArticleList = () => {
    return (
        <Fragment>
            <div className="article-list container">
                <div className="article-wrap">
                    <div className="article-header row justify-content-center">
                        <div className="col-9 article-title">
                            <h3>ととのいが過ぎました！</h3>
                        </div>
                        <div className="col-3 article-top-right">
                            <div className="row justify-content-center">
                                <div className="col-2 article-like-count">
                                    <GrLike size={30}/>
                                    <p>120</p>
                                </div>
                                <div className="col-2 article-comment-count">
                                    <FaRegCommentDots size={30}/>
                                    <p>60</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-contents">
                        <div className="article-top row">
                            <div className="col-1 user-icon">
                                <MdInsertEmoticon size={30}/>
                            </div>
                            <div className="col-2 user">
                                <p className="user-name">山田太郎</p>
                                <p className="article-date">2022/02/03</p>
                            </div>
                            <div className="col-8 sauna text-center">
                                <div className="sauna-name">
                                    <h3>〇〇の湯</h3>
                                </div>
                                <div className="sauna-place">
                                    東京都江戸川区
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
