import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment, useState } from 'react';
import { useCookies } from 'react-cookie';
import { MdInsertEmoticon } from 'react-icons/md';
import { Comment } from '../../@types/article/Comment';
import { NewComment } from '../../@types/article/NewComment';
import { Textarea } from '../form-components/Textarea';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ErrorPageProps } from '../../@types/ErrorPage';
import { BaseURI } from '../../utils/constants';

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
    const { getAccessTokenSilently } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const value = event.target.value;
        setCommentState((prevState) => (
            { ...prevState, content: value }
        ))
    }

    const handleSubmit = () => {
        if (newComment.content == "") {
            toast.warning("コメントを追加してください")
            return
        }

        // fetch post comment
        const fetchPostComment = async () => {

            try {
                const uri = BaseURI + "/articles/" + newComment.article_id + "/comments/new";
                let accessToken = ""
                try {
                    accessToken = await getAccessTokenSilently({
                        audience: 'https://totonoe-app.com',
                        scope: 'read:posts',
                    });
                } catch (error) {
                    toast.warning("ログインしてください")
                    return;
                }

                const requestOption: RequestInit = {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ 'content': newComment.content, 'user_id': cookies.userID, })
                }

                fetch(uri, requestOption)
                    .then((response) => {
                        if (!response.ok) {
                            // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                            const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                            navigate('/error', { state: errorInfo });
                            return;
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
            catch (err) {
                console.log("エラー", err);
            }
        }
        fetchPostComment();
    }

    return (
        <Fragment>
            <div className="comment-wrap container p-5">
                <h4 className="comment">コメント</h4>
                <div className="comments">
                    {props.comments?.map((comment, index) => {
                        return (
                            <div key={index}>
                                <div className="comment-header row">
                                    <div className="col-1 user-icon">
                                        <MdInsertEmoticon size={30} />
                                    </div>
                                    <div className="col-2 user">
                                        {comment.user_name}
                                    </div>
                                </div>
                                <div className="comment-content row-cols-1">
                                    <p className="col-3">{comment.content}</p>
                                </div>
                            </div>
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