"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Articles_1 = require("./Articles");
const SearchBox_1 = require("./SearchBox");
const Home = () => {
    return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SearchBox_1.SearchBox, {}), (0, jsx_runtime_1.jsx)(Articles_1.ArticlesBox, {})] }));
};
exports.Home = Home;
