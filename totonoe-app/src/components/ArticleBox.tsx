import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Article } from '../@types/article/Article'
import { SetDateFormat } from '../common/Convert'

export type ArticleBoxProps = {
    article: Article | undefined
}
export const ArticleBox: React.VFC<ArticleBoxProps> = (props) => {
    console.log(props.article);

    return (
        <Fragment>
            <div className="card col-3 mx-4">
                <div className="card-body">
                    <div className="text-center">
                        <h4>{props.article.facility_name}</h4>
                    </div>
                    <div className="row">
                        <p className="card-title col-3"><Link to={'profile/' + props.article?.user_id}>{props.article?.user_name}</Link></p>
                        <p>{SetDateFormat(props.article.created_at)}</p>
                    </div>
                    <p className="card-text">
                        {props.article?.content}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}