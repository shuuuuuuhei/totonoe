"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("../style/Header.css");
const hi_1 = require("react-icons/hi");
const cg_1 = require("react-icons/cg");
const react_router_dom_1 = require("react-router-dom");
const react_icons_1 = require("react-icons");
const Header = () => {
    return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "header row" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "header-top d-flex justify-content-between" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "header-top-left" }), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "header-top-right row" }, { children: (0, jsx_runtime_1.jsxs)(react_icons_1.IconContext.Provider, Object.assign({ value: { color: '#000000', size: '50' } }, { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ className: "col" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsx)(hi_1.HiOutlineLogin, {}) })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "col" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/profile" }, { children: (0, jsx_runtime_1.jsx)(cg_1.CgProfile, {}) })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "col" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsx)(hi_1.HiOutlinePencilAlt, {}) })) }))] })) }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "d-flex justify-content-center" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "header-title" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsx)("h1", { children: "Totonoe" }) })) })) }))] })) }));
};
exports.Header = Header;
