import React, { Component, Fragment, useState } from 'react'
import { MdInsertEmoticon } from 'react-icons/md'
import { Textarea } from './form-components/Textarea';
import { Comment } from '../@types/article/Comment'
import { NewComment } from '../@types/article/NewComment'
import { useCookies } from 'react-cookie';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

type CommentProps = {
    comments: Comment[] | undefined
    setComments: React.Dispatch<React.SetStateAction<Comment[] | undefined>>
    articleID: number | undefined
}

export const Comments: React.VFC<CommentProps> = (props) => {
    const [newComment, setCommentState] = useState<NewComment>({
        content: "",
        article_id: props.articleID,
    });
    const {getAccessTokenSilently} = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();

    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const value = event.target.value;
        setCommentState((prevState) => (
            {...prevState, content: value}
        ))
    }

    const handleSubmit = () => {
        if(newComment.content == "") {
            return
        }

        // fetch post comment
        const fetchPostComment = async() => {
            try{
                const uri = "http://localhost:4000/articles/"+newComment.article_id+"/comments/new";
                const accessToken = await getAccessTokenSilently({
                    audience: 'https://totonoe-app.com',
                    scope: 'read:posts',
                })

                if(!accessToken) {
                    throw("アクセストークンがありません");
                }

                const requestOption: RequestInit = {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({'content': newComment.content, 'user_id': cookies.userID,})
                }

                fetch(uri, requestOption)
                    .then((response) => {
                        if(!response.ok) {
                            throw Error("コメントを作成できませんでした。"); 
                        }
                        return response.json()
                    })
                    .then((data: Comment) => {
                        props.setComments((prevState) => prevState ? [
                            ...prevState, data
                        ] : undefined);

                        // テキストボックス初期化
                        setCommentState((prevState) => ({
                            ...prevState,
                            content: "",
                        }));
                    })
            }
            catch(err){
                console.log("エラー", err);
            }
        }
        fetchPostComment(); 
    }

    return(
        <Fragment>
            <div className="comment-wrap">
                <h4 className="comment">コメント</h4>
                <div className="comments">
                    {props.comments?.map((comment) => {
                        return(
                            <Fragment>
                                <div className="comment-header row">
                                    <div className="col-1 user-icon">
                                        <MdInsertEmoticon size={30}/>
                                    </div>
                                    <div className="col-2 user">
                                        {comment.user_name}
                                    </div>
                                </div>
                                <div className="comment-content row-cols-1">
                                    <p className="col-3">{comment.content}</p>
                                </div>
                            </Fragment>
                        )
                    })}
                </div>
                <div className="add-comment">
                    <div className="add-comment-btn row">
                        <button className="btn btn-primary" onClick={handleSubmit}>コメントを追加</button>
                    </div>
                    <div className="comment-form">
                        <Textarea 
                            name="Content"
                            rows={5}
                            value={newComment?.content}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}