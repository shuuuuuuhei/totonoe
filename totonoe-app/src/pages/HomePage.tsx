import React, { Fragment } from "react";
import { AreaBox } from "../components/AreaBox";
import { ArticlesBox } from "../components/ArticlesBox";
import { SearchBox } from "../components/SearchBox";
export const Home: React.VFC = () => {
    return (
        <Fragment>
            <SearchBox />
            <div className="container text-center">
                <div className="row my-5">
                    <div className="col-10">
                        <AreaBox />
                    </div>
                    <div className="col-2">
                        閲覧履歴
                    </div>
                </div>
            </div>
            <ArticlesBox />
        </Fragment>
    );
}