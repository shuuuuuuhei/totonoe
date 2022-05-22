import { Component, Fragment, useReducer } from 'react';
import type { Article } from '../@types/article/Article';
import { articlesReducer } from '../reducer/ArticlesReducer';
import { ArticleBox } from './Article';
import '../style/Articles.css'

const initialArticlesState: Article[] = [{
    id: "",
    title: "",
    description: "",
},
{
    id: "",
    title: "",
    description: "",
},
{
    id: "",
    title: "",
    description: "",
}];

export const ArticlesBox = () => {
    const [articlesStore, articlesDispach] = useReducer(articlesReducer, initialArticlesState);
    return(
        <Fragment>
            <div className="list-wrap">
                <div className="articles-box container">
                    <div className="row justify-content-center">
                        {articlesStore.map((article, index) => <ArticleBox />)}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}