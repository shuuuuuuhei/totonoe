import React, { Fragment } from "react";
import { AreaBox } from "../components/Facility/AreaBox";
import { ArticlesBox } from "../components/Article/ArticlesBox";
import { SearchBox } from "../components/_Top/SearchBox";
import { TotonoeDescription } from "../components/_Top/Description";
export const Home: React.VFC = () => {
    return (
        <Fragment>
            <SearchBox />

            <AreaBox />
            <TotonoeDescription />
            <ArticlesBox />
            {/* <FacilityBox /> */}
        </Fragment>
    );
}