import React, { Component, useEffect } from 'react'
import { errorMonitor } from 'stream'
import { Article } from '../@types/article/Article'
import { BaseURI } from '../utils/constants'

const url: string = BaseURI + '/articles'

const useFetchArticles = () => {
    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.status !== 200) {
                    const err = new Error;
                    err.message = "Invaild response code" + response.status;
                    throw err;
                }
                return response.json();
            })
            .then((resData) => {
                const articles: Article[] = [];
                resData.map((fetchArticleData: Article) => {
                    articles.push(fetchArticleData)
                })
                return articles;
            })
            .catch(err => {
                console.log("Error", err);
                return Error;
            })
    }, [])
}