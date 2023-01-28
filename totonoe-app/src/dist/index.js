"use strict";
exports.__esModule = true;
var React = require("react");
var client_1 = require("react-dom/client");
var AuthProvider_1 = require("./AuthProvider");
var App_1 = require("./App");
var container = document.getElementById('root');
var root = client_1.createRoot(container);
root.render(React.createElement(AuthProvider_1.Auth0ProviderWithHistory, null,
    React.createElement(App_1.App, null)));
