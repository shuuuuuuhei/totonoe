import React, { Fragment } from 'react';
import { Article } from '../../@types/article/Article';
import { DetailArticle } from './Article';
import { IsNullOrUndefinedOrEmpty } from '../../common/Check';
import { Stack } from '@mui/material';

type ArticlesProps = {
    articles: [Article] | undefined;
}
export const ArticleList: React.VFC<ArticlesProps> = ({ articles }) => {

    if (!articles) {
        return (
            <Fragment>
                記事取得中...
            </Fragment>
        )
    }
    return (
        <Fragment>
            <div className="article-list container p-5">
                {articles.length < 1 ?
                    <>
                        投稿はありません
                    </>
                    :
                    <>
                        {articles?.map((article, key) => {
                            return (
                                <DetailArticle article={article} />
                            )
                        })}

                    </>
                }
            </div>
        </Fragment>
    )
}
