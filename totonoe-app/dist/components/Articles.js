"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ArticlesReducer_1 = require("../reducer/ArticlesReducer");
const Article_1 = require("./Article");
require("../style/Articles.css");
const bs_1 = require("react-icons/bs");
const initialArticlesState = [{
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
const ArticlesBox = () => {
    const [articlesStore, articlesDispach] = (0, react_1.useReducer)(ArticlesReducer_1.articlesReducer, initialArticlesState);
    return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "list-wrap" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "articles-box container-fluid" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "row justify-content-center align-items-center" }, { children: [(0, jsx_runtime_1.jsx)(bs_1.BsChevronDoubleLeft, { className: "col-1", size: 45 }), articlesStore.map((article, index) => (0, jsx_runtime_1.jsx)(Article_1.ArticleBox, {})), (0, jsx_runtime_1.jsx)(bs_1.BsChevronDoubleRight, { className: "col-1", size: 45 })] })) })) })) }));
};
exports.ArticlesBox = ArticlesBox;
