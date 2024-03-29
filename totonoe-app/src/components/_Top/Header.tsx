import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { IconContext } from 'react-icons';
import { CgProfile } from "react-icons/cg";
import { GiHotSpices } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../style/Header.css";
import { MdOutlineLogin } from 'react-icons/md';
import { AuthState } from '../../@types/Authorization';
import { isAdminUser, IsNullOrUndefinedOrEmpty } from '../../common/Check';
import AppIcon from '../../images/Totonoe.png'
import { ErrorPageProps } from '../../@types/ErrorPage';
import { BaseURI, GetRedirectParams, GetTokenSilentlyParams } from '../../utils/constants';

type headerProps = {
    isLoggined: boolean,
    setIsLoggined: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header: React.VFC<headerProps> = (props) => {
    const { getAccessTokenWithPopup, loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [isShowedUserContents, setIsShowedUserContents] = useState(false);
    const [authState, setAuthState] = useState<AuthState>();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            // 権限情報取得
            getAuthorization();
        }
    }, [])

    console.log(props.isLoggined, isAuthenticated);

    /**
     * ユーザ認証機能
     */
    const authenticateUser = async () => {
        // 認証処理
        try {
            await loginWithRedirect({ authorizationParams: GetRedirectParams });
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
            props.setIsLoggined(false);
            logout({ logoutParams: { returnTo: window.location.origin } });
        } catch (err) {
            console.log(err)
        }
    }

    /**
     * 権限情報取得
     */
    const getAuthorization = async () => {
        const userID = cookies.userID;
        const uri = BaseURI + "/authorization";
        let accessToken = "";
        try {
            accessToken = await getAccessTokenWithPopup({ authorizationParams: GetTokenSilentlyParams });
        } catch (error) {
            console.log(error);
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
                    // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                    const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                    navigate('/error', { state: errorInfo });
                    return;
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

            <div className="header row m-0 py-3" style={{ backgroundColor: "#FFCC66" }}>
                <div className="header-top text-end">
                    {/* <div className="header-top-left">
                        <Link to={'saunas/new'}><GiHotSpices size={50} /></Link>
                    </div> */}
                    <div className="row text-end">
                        <IconContext.Provider value={{ color: '#000000', size: '50' }}>
                            {isAuthenticated ?
                                <div>
                                    <CgProfile onClick={() => setIsShowedUserContents(!isShowedUserContents)} style={{ cursor: "pointer" }} />
                                    {
                                        // ログイン済み
                                        isShowedUserContents &&

                                        <div className="row border py-3 px-4 text-center" style={{ position: "absolute", right: "20px", width: "200px", backgroundColor: "white" }} onClick={() => setIsShowedUserContents(!isShowedUserContents)}>
                                            <Link to={"profile/" + cookies.userID} className="border py-2">
                                                マイページ
                                            </Link>
                                            <Link to={"setting/profile"} className="border py-2">
                                                設定
                                            </Link>
                                            {isAdminUser(authState) &&
                                                <Link to={"admin/"} style={{ width: "150px" }} className="border py-2">
                                                    管理者用ページ
                                                </Link>
                                            }
                                            <div className="text-center border py-2" onClick={logoutUser} style={{ cursor: 'pointer' }}>
                                                ログアウト
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
                    <div className="header-title text-center">
                        <Link to="/"><img src={AppIcon} alt="" style={{ width: "60%", height: "auto", borderRadius: "50%" }} /></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
