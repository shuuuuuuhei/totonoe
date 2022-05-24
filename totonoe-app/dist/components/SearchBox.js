"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const Input_1 = require("./form-components/Input");
require("../style/Search-Box.css");
const SearchBox = () => {
    const handleChange = () => {
    };
    return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)("form", Object.assign({ className: "container" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "search-box row justify-content-center" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "col-md-5" }, { children: (0, jsx_runtime_1.jsx)(Input_1.Input, { type: "text", className: "input-sm", name: "", value: "", onChange: handleChange, placehodlder: "\u30A8\u30EA\u30A2\u30FB\u99C5\u30FB\u3010\u4F8B\uFF1A\u9280\u5EA7\u3001\u6C60\u888B\u3011", errorDiv: "", errorMsg: "" }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "col-md-5" }, { children: (0, jsx_runtime_1.jsx)(Input_1.Input, { type: "text", className: "input-sm", name: "", value: "", onChange: handleChange, placehodlder: "", errorDiv: "", errorMsg: "" }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "col-md-2" }, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, Object.assign({ className: "btn-warning btn-blockb\u3000w-auto" }, { children: "\u691C\u7D22" })) }))] })) })) }));
};
exports.SearchBox = SearchBox;
