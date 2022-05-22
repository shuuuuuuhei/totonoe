import React, { Fragment } from "react"
import Alert from 'react-bootstrap/Alert';
import { ArticlesBox } from "../components/ArticlesBox";
import { SearchBox } from "../components/SearchBox";
export const Home: React.VFC = () => {
    return (
        <Fragment>
            <SearchBox />
            <ArticlesBox />
        </Fragment>
    );
}