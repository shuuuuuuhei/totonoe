import React, { Fragment } from 'react'
import '../style/Article-List.css'
import { Article } from '../@types/article/Article';
import { DetailArticle } from './Article';
import { ArticleBox } from './ArticleBox';

type ArticlesProps = {
    articles: [Article]|undefined;
}
export const ArticleList: React.VFC<ArticlesProps> = ({articles}) => {
    
    return (
        <Fragment>
            <div className="article-list container">
                {articles?.map((article, key) => {
                    return(
                        <DetailArticle article={article}/>
                    )
                })}
            </div>                
        </Fragment>
    )
}


