import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Article } from '../@types/article/Article'

export type ArticleBoxProps = {
    article: Article|undefined
}
export const ArticleBox:React.VFC<ArticleBoxProps> = (props) => {
    return(
        <Fragment>
            <div className="card col-3">
                <div className="card-body">
                    <div className="row">
                        <h5 className="card-title col-4"><Link to={'saunas/'+props.article?.SaunaID+'/articles/'+props.article?.ID}>{props.article?.Title}</Link></h5>
                        <p className="card-title col-3"><Link to={'profile/'+props.article?.UserID}>{props.article?.user_name}?テスト</Link></p>
                    </div>
                    <p className="card-text">{props.article?.Content}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </Fragment>
    )
}