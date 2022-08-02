import React, { Component, Fragment, useState } from 'react'
import { MdInsertEmoticon } from 'react-icons/md'
import { Textarea } from './form-components/Textarea';
import { Comment } from '../@types/article/Comment'
import { NewComment } from '../@types/article/NewComment'
import { useCookies } from 'react-cookie';
import { useAuth0 } from '@auth0/auth0-react';

type CommentProps = {
    comments: [Comment] | undefined
}

export const Comments: React.VFC<CommentProps> = (props) => {
    const [newComment, setCommentState] = useState<NewComment>({
        content: "",
        article_id: props.comments?.at(0)?.article_id,
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
                const uri = "http://localhost:4000/comments/new";
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
                    body: JSON.stringify({newComment, 'user_id': cookies.userID,})
                }

                fetch(uri, requestOption)
                    .then((response) => response.json())
                    .then(data => {
                        setCommentState()
                    })
            }
            catch(err){
                console.log("エラー", err);
            }
        }       
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