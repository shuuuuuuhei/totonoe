import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Article } from '../../@types/article/Article'
import { SetDateFormat } from '../../common/Convert'
import { Button } from 'react-bootstrap'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { GrLike } from 'react-icons/gr'
import { FaRegCommentDots } from 'react-icons/fa'
import { prefectureList } from '../../utils/constants'
export type ArticleBoxProps = {
    article: Article | undefined
}
export const ArticleBox: React.VFC<ArticleBoxProps> = (props) => {
    console.log(props.article);

    return (
        <Fragment>
            <div className="card col-3 mx-5 my-3">
                <div className="card-body">
                    <div className="row">
                        <div className="icon col-1 p-2">
                            <AccountCircleIcon />
                        </div>
                        <div className="col-5">
                            <Link to={'profile/' + props.article?.user_id}>{props.article?.user_name}</Link>
                            <p style={{ color: "gray", fontSize: "9px" }}>{SetDateFormat(props.article.created_at)}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link to={"/saunas/" + props.article.facility_id}>
                            <h4>{props.article.facility_name}</h4>
                            <p style={{ fontSize: "9px" }}>{prefectureList[props.article.prefecture_id]}</p>
                        </Link>
                    </div>
                    <div className="article-content">
                        <p className="card-text">
                            {props.article?.content}
                        </p>
                    </div>

                    <div className="text-center">
                        <Button variant="contained" color="success" className="border-radius border" size="sm">
                            <Link to={"/articles/" + props.article?.id}>詳細</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}