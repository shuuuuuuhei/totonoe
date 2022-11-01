import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment, useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import { useCookies } from 'react-cookie';
import { IconContext } from 'react-icons';
import { CgProfile } from "react-icons/cg";
import { GiHotSpices } from "react-icons/gi";
import { HiOutlineLogin, HiOutlinePencilAlt } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../style/Header.css";
import { MdOutlineLogin } from 'react-icons/md';
import { toast } from 'react-toastify'
import { AuthState } from '../@types/Authorization';
import { isAdminUser } from '../common/Check';
import { Chip } from '@mui/material';
export const Header = () => {
    const { getAccessTokenSilently } = useAuth0();
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [isShowedUserContents, setIsShowedUserContents] = useState(false);
    const [authState, setAuthState] = useState<AuthState>();

    useEffect(() => {
        // 権限情報取得
        getAuthorization();
    }, [])

    /**
     * ユーザ認証機能
     */
    const authenticateUser = async () => {
        // 認証処理
        try {
            await loginWithRedirect();
        } catch (err) {
            console.log("Log in failed", err);
        }
    }

    /**
    * ログアウト機能
    */
    const logoutUser = () => {
        try {
            removeCookie("userID", { path: '/' });
            logout({ returnTo: window.location.origin });
        } catch (err) {
            console.log(err)
        }
    }

    /**
     * 権限情報取得
     */
    const getAuthorization = async () => {
        const userID = cookies.userID;
        const uri = "http://localhost:4000/authorization";
        const accessToken = await getAccessTokenSilently({
            audience: 'https://totonoe-app.com',
            scope: 'read:posts',
        });

        if (!accessToken) {
            throw Error("アクセストークンがありません。");
        }

        const requestOption: RequestInit = {
            method: "POST",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                "User-ID": userID,
            },
            body: JSON.stringify({ 'user_id': userID, })
        };
        await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    const err = new Error;
                    err.message = "権限情報が取得できませんでした" + response.text + response.status;
                    throw err;
                }
                return response.json();
            })
            .then((resData: AuthState) => {
                setAuthState(resData)
            })
            .catch(err => {
                console.log(err)
            });
    }

    console.log(authState);


    return (
        <Fragment>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="header row" id="top-header">
                <div className="header-top d-flex justify-content-between">
                    <div className="header-top-left">
                        <Link to={'saunas/new'}><GiHotSpices size={50} /></Link>
                    </div>
                    <div className="row text-end">
                        <IconContext.Provider value={{ color: '#000000', size: '50' }}>
                            {typeof cookies.userID != 'undefined' ?
                                <div>
                                    <CgProfile onClick={() => setIsShowedUserContents(!isShowedUserContents)} style={{ cursor: "pointer" }} />
                                    {
                                        // ログイン済み
                                        isShowedUserContents &&

                                        <div className="row border py-3 px-4 text-center" style={{ position: "absolute", right: "20px", width: "250px", backgroundColor: "white" }} onClick={() => setIsShowedUserContents(!isShowedUserContents)}>
                                            <div className="row p-0">
                                                <div className="col-4 text-center">
                                                    <CgProfile size={40} />
                                                </div>
                                                <div className="col-8 text-start py-2 px-0">
                                                    {/* ↓今はauth0のユーザ名を表示している */}
                                                    <p className="overflow-hidden" style={{ fontSize: "12px" }}>{user.name}</p>
                                                </div>
                                            </div>
                                            <Link to={"profile/" + cookies.userID}>
                                                <Button
                                                    variant="outline-warning"
                                                    className="my-2"
                                                    style={{ width: "150px" }}
                                                >
                                                    マイページ
                                            </Button>
                                            </Link>
                                            <Link to={"setting/profile"}>
                                                <Button
                                                    variant="outline-warning"
                                                    className="my-2"
                                                    style={{ width: "150px" }}
                                                >
                                                    設定
                                                </Button>
                                            </Link>
                                            {isAdminUser(authState) &&
                                                <Link to={"admin/"}>
                                                    <Button
                                                        variant="outline-warning"
                                                        className="my-2"
                                                        style={{ width: "150px" }}
                                                    >
                                                        管理者用ページ
                                                    </Button>
                                                </Link>
                                            }
                                            <div className="row text-center mx-0 px-4">
                                                <Button
                                                    onClick={logoutUser}
                                                    variant="outline-warning"
                                                    className="my-2"
                                                    style={{ width: "150px" }}
                                                >
                                                    ログアウト
                                                </Button>
                                            </div>
                                        </div>
                                    }
                                </div>
                                :
                                // サインアップ or ログイン
                                <li className="col">
                                    <MdOutlineLogin onClick={authenticateUser} cursor="pointer" />
                                </li>
                            }
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="header-title">
                        <Link to="/"><h1>Totonoe</h1></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}