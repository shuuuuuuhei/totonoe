import { Component, Fragment, useReducer } from 'react';
import type { Article } from '../@types/article/Article';
import { articlesReducer } from '../reducer/ArticlesReducer';
import { ArticleBox } from './Article';
import '../style/Articles.css'
import {BsChevronDoubleLeft, BsChevronDoubleRight} from 'react-icons/bs'

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
                <div className="articles-box container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <BsChevronDoubleLeft className="col-1" size={45}/>
                        {articlesStore.map((article, index) => <ArticleBox />)}
                        <BsChevronDoubleRight className="col-1" size={45}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}