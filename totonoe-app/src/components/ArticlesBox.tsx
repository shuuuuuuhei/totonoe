import { Component, Fragment, useReducer } from 'react';
import type { Article } from '../@types/article/Article';
import { articlesReducer } from '../reducer/ArticlesReducer';
import { ArticleBox } from './Article';
import '../style/Articles.css'
import {BsChevronDoubleLeft, BsChevronDoubleRight} from 'react-icons/bs'

// const initialArticlesState: Article[] = [
//     {
//         ID: "",
//         Title: "",
//         Content: "",
//         CreatedAt: "",
//         UserName: "",
//     },
//     {
//         ID: "",
//         Title: "",
//         Content: "",
//         CreatedAt: "",
//         UserName: "",
//     },
//     {
//         ID: "",
//         Title: "",
//         Content: "",
//         CreatedAt: "",
//         UserName: "",
//     },
// ];

export const ArticlesBox = () => {
    // const [articlesStore, articlesDispach] = useReducer(articlesReducer, initialArticlesState);
    return(
        <Fragment>
            モデルが決まるまで一旦保留
            {/* <div className="list-wrap">
                <div className="articles-box container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <BsChevronDoubleLeft className="col-1" size={45}/>
                        {articlesStore.map((article, index) => <ArticleBox />)}
                        <BsChevronDoubleRight className="col-1" size={45}/>
                    </div>
                </div>
            </div> */}
        </Fragment>
    )
}