"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Header_1 = require("./components/Header");
const HomePage_1 = require("./pages/HomePage");
const ProfilePage_1 = require("./pages/ProfilePage");
function App() {
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(Header_1.Header, {}), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(HomePage_1.Home, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/profile", element: (0, jsx_runtime_1.jsx)(ProfilePage_1.ProfilePage, {}) })] }) })] }));
}
exports.default = App;
