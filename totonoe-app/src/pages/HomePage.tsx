import React, { Fragment } from "react";
import { AreaBox } from "../components/AreaBox";
import { ArticlesBox } from "../components/ArticlesBox";
import { SearchBox } from "../components/SearchBox";
import { TotonoeDescription } from "../components/Description";
export const Home: React.VFC = () => {
    return (
        <Fragment>
            <SearchBox />
            <div className="container text-center">
                <div className="row my-5">
                    <AreaBox />
                </div>
            </div>

            <TotonoeDescription />
            <ArticlesBox />

        </Fragment>
    );
}