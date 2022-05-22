import React, { Fragment } from "react"
import Alert from 'react-bootstrap/Alert';
import { ArticlesBox } from "./Articles"
import { SearchBox } from "./SearchBox";
export const Home: React.VFC = () => {
    return (
        <Fragment>
            <ArticlesBox />
        </Fragment>
    );
}