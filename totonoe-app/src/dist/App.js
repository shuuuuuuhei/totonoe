"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.App = void 0;
var auth0_react_1 = require("@auth0/auth0-react");
var react_1 = require("react");
var react_cookie_1 = require("react-cookie");
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("./components/Header");
var ArticlePage_1 = require("./pages/ArticlePage");
var ArticlePostPage_1 = require("./pages/ArticlePostPage");
var FacilityPage_1 = require("./pages/FacilityPage");
var FacilitySubmitPage_1 = require("./pages/FacilitySubmitPage");
var HomePage_1 = require("./pages/HomePage");
var ProfilePage_1 = require("./pages/ProfilePage");
var SearchMapPage_1 = require("./pages/SearchMapPage");
var SearchResultPage_1 = require("./pages/SearchResultPage");
var react_toastify_1 = require("react-toastify");
var UserSettingPage_1 = require("./pages/UserSettingPage");
var AdminPage_1 = require("./pages/AdminPage");
var react_error_boundary_1 = require("react-error-boundary");
var ErrorComponent_1 = require("./pages/Error/ErrorComponent");
var Page404_1 = require("./pages/Error/Page404");
var ErrorPage_1 = require("./pages/Error/ErrorPage");
exports.App = function () {
    var _a;
    var _b = auth0_react_1.useAuth0(), user = _b.user, getIdTokenClaims = _b.getIdTokenClaims, getAccessTokenWithPopup = _b.getAccessTokenWithPopup, isAuthenticated = _b.isAuthenticated, logout = _b.logout;
    var _c = react_cookie_1.useCookies(), cookies = _c[0], setCookie = _c[1], removeCookie = _c[2];
    var _d = react_1.useState(false), isLoggined = _d[0], setIsLoggined = _d[1];
    console.log("ログイン情報：", (_a = user === null || user === void 0 ? void 0 : user.sub) === null || _a === void 0 ? void 0 : _a.split('|').at(1), cookies.userID, user === null || user === void 0 ? void 0 : user.sub);
    /**
     * ユーザを新規登録する
     */
    var signupUser = function () { return __awaiter(void 0, void 0, void 0, function () {
        var accessToken, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!user) {
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, getAccessTokenWithPopup({
                            audience: 'https://totonoe-app.com',
                            scope: 'read:current_user'
                        })];
                case 2:
                    accessToken = _a.sent();
                    // ユーザー登録
                    return [4 /*yield*/, fetchSubmitUser(accessToken)];
                case 3:
                    // ユーザー登録
                    _a.sent();
                    // ユーザーIDをクッキーに保存する
                    setUserInfoCookie();
                    // サインアップ処理が成功したらメッセージを表示して処理を終了する
                    react_toastify_1.toast.success('ユーザ登録が完了しました！');
                    return [2 /*return*/];
                case 4:
                    error_1 = _a.sent();
                    react_toastify_1.toast.error('ユーザー登録に失敗しました。');
                    // リダイレクトするとメッセージ表示が消えるため、3秒後にログアウト処理を実施する
                    setTimeout(function () { return logout({ returnTo: window.location.origin }); }, 3000);
                    return [2 /*return*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    /**
     * ユーザー登録処理(初回ログイン時)
     */
    var fetchSubmitUser = function (accessToken) {
        var fetchSubmitUserPromise = new Promise(function (resolve, reject) {
            var _a;
            var submitUser = {
                id: (_a = user === null || user === void 0 ? void 0 : user.sub) === null || _a === void 0 ? void 0 : _a.split('|').at(1),
                name: user === null || user === void 0 ? void 0 : user.name,
                email: user === null || user === void 0 ? void 0 : user.email
            };
            var requestOption = {
                method: "POST",
                mode: "cors",
                headers: {
                    Authorization: "Bearer " + accessToken,
                    "Content-Type": "application/json",
                    "User-ID": cookies.userID
                },
                body: JSON.stringify({ 'user_id': submitUser.id, 'name': submitUser.name, 'email': submitUser.email })
            };
            var uri = "http://localhost:4000/account/new";
            fetch(uri, requestOption)
                .then(function (response) {
                if (!response.ok) {
                    var err = new Error;
                    console.log(response);
                    err.message = "ユーザ登録に失敗しました。レスポンスコード：" + response.status + response.statusText;
                    throw err;
                }
                // ユーザー登録成功
                resolve(null);
            })["catch"](function (err) {
                reject(err);
            });
        });
        return fetchSubmitUserPromise;
    };
    var loginUser = function () {
        // アカウント情報取得
        getAccountInfo();
        // ログイン時にcookieが未発行の場合
        setUserInfoCookie();
    };
    /**
     * アカウント情報取得処理
     */
    var getAccountInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
        var accessToken, requestOption, uri;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getAccessTokenWithPopup({
                        audience: 'https://totonoe-app.com',
                        scope: 'read:current_user'
                    })];
                case 1:
                    accessToken = _b.sent();
                    requestOption = {
                        method: "GET",
                        mode: "cors",
                        headers: {
                            Authorization: "Bearer " + accessToken,
                            "Content-Type": "application/json",
                            "User-ID": cookies.userID
                        }
                    };
                    uri = "http://localhost:4000/account/" + ((_a = user === null || user === void 0 ? void 0 : user.sub) === null || _a === void 0 ? void 0 : _a.split('|').at(1));
                    fetch(uri, requestOption)
                        .then(function (response) {
                        if (!response.ok) {
                            var err = new Error;
                            err.message = "アカウント情報取得処理に失敗しました。レスポンスコード：" + response.status + response.statusText;
                            // Auth0にユーザー情報が存在するがDB側に存在しなかったケース(App管理者がユーザーをAuth0ユーザーを削除する必要がある)
                            if (response.status === 404) {
                                react_toastify_1.toast.error('このアカウントは使用できません。');
                                throw err;
                            }
                            react_toastify_1.toast.error('アカウント情報が取得できませんでした。');
                            throw err;
                        }
                    })
                        .then(function () {
                        react_toastify_1.toast.success('おかえりなさい！');
                        // ログイン済みにして再レンダリングを防ぐ
                    })["catch"](function (err) {
                        console.log(err);
                        // クッキー情報を削除する
                        removeCookie("userID", { path: '/' });
                        // リダイレクトするとメッセージ表示が消えるため、3秒後にログアウト処理を実施する
                        setTimeout(function () { return logout({ returnTo: window.location.origin }); }, 3000);
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    /**
     * ユーザIDをクッキー情報として登録する
     */
    var setUserInfoCookie = function () {
        var _a;
        var now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 1000);
        setCookie("userID", (_a = user === null || user === void 0 ? void 0 : user.sub) === null || _a === void 0 ? void 0 : _a.split('|').at(1), { expires: now, path: '/' });
    };
    // 画面ロード時
    react_1.useEffect(function () {
        // Auth0ログイン済かつログイン処理未完了の場合
        if (isAuthenticated && !isLoggined) {
            try {
                // ログイン回数が初回の場合はユーザ新規登録を行う
                if ((user === null || user === void 0 ? void 0 : user.loginCount) === 1) {
                    // サインアップ
                    signupUser();
                }
                else {
                    // ログイン処理
                    loginUser();
                }
                // ログイン済状態に更新する
                setIsLoggined(true);
            }
            catch (error) {
            }
        }
    }, [user]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(react_error_boundary_1.ErrorBoundary, { FallbackComponent: ErrorComponent_1.ErrorFallback },
                react_1["default"].createElement(Header_1.Header, { isLoggined: isLoggined, setIsLoggined: setIsLoggined }),
                react_1["default"].createElement(react_router_dom_1.Routes, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(HomePage_1.Home, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/profile/:userID", element: react_1["default"].createElement(ProfilePage_1.ProfilePage, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/articles/new", element: react_1["default"].createElement(ArticlePostPage_1.ArticlePostPage, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/saunas/:facilityID/articles/new", element: react_1["default"].createElement(ArticlePostPage_1.ArticlePostPage, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/articles/:articleID", element: react_1["default"].createElement(ArticlePage_1.ArticlePage, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/search", element: react_1["default"].createElement(SearchResultPage_1.SearchResultPage, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/saunas/:facilityID", element: react_1["default"].createElement(FacilityPage_1.SaunaPage, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/saunas/new/", element: react_1["default"].createElement(FacilitySubmitPage_1.SaunaSubmitPage, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/map", element: react_1["default"].createElement(SearchMapPage_1.SearchMapPage, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/setting/profile", element: react_1["default"].createElement(UserSettingPage_1.UserSettingPage, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/admin", element: react_1["default"].createElement(AdminPage_1.AdminPage, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement(Page404_1.ErrorPage404, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/error", element: react_1["default"].createElement(ErrorPage_1.ErrorPage, null) }))))));
};
