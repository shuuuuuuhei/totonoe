import React, { Component, useReducer } from 'react'
import { Article } from '../@types/article/Article';
import { ArticlesAction } from '../actions/Articles'

export const articlesReducer = (articlesState: Article[], action: ArticlesAction) => {
    return articlesState;
}