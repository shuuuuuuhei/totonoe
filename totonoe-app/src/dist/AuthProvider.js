"use strict";
exports.__esModule = true;
exports.Auth0ProviderWithHistory = void 0;
var react_1 = require("react");
var auth0_react_1 = require("@auth0/auth0-react");
exports.Auth0ProviderWithHistory = function (_a) {
    var children = _a.children;
    var onRedirectCallback = function (appState) {
        window.history.replaceState({}, document.title, appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname);
    };
    return (react_1["default"].createElement(auth0_react_1.Auth0Provider, { domain: process.env.AUTH0_DOMAIN, clientId: process.env.AUTH0_CLIENT_ID, redirectUri: window.location.origin, onRedirectCallback: onRedirectCallback }, children));
};
