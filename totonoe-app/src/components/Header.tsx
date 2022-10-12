import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment, useState } from 'react';
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
export const Header = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();
    const [isShowedUserContents, setIsShowedUserContents] = useState(false);
    
    /**
     * ユーザ認証機能
     */
    const authenticateUser = async() => {
        // 認証処理
        try {
            await loginWithRedirect();
        } catch (err) {
            console.log("Log in failed", err);
        }
    }

    const logoutUser = () => {
        try {
            removeCookie("userID",{path:'/'});
            logout({returnTo: window.location.origin});
        } catch (err) {
            console.log(err)
        }
    }

    const contextClass = {
        success: 'bg-blue-600',
        error: 'bg-red-600',
        info: 'bg-gray-700',
        warning: 'bg-orange-400',
        default: 'bg-black text-white ',
        dark: 'bg-white text-gray-600',
    };

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
                            {typeof cookies.userID != 'undefined'? 
                            <div>
                                <CgProfile onClick={() => setIsShowedUserContents(!isShowedUserContents)} style={{cursor: "pointer"}}/>
                                {
                                    // ログイン済み
                                    isShowedUserContents && 
                                    <div className="row border py-3 px-2 text-center" style={{position: "absolute",right: "20px", width: "150px", backgroundColor: "white"}}>
                                        <div className="row p-0">
                                            <div className="col-4 text-center">
                                                <CgProfile size={40}/>
                                            </div>
                                            <div className="col-8 text-start py-2">
                                                <p style={{fontSize: "12px"}}>{user.name}</p>
                                            </div>
                                        </div>
                                        <Link to={"profile/"+cookies.userID} className="my-2 p-0">
                                            <Button 
                                                variant="outline-warning"
                                                className="px-4"
                                                onClick={() => setIsShowedUserContents(!isShowedUserContents)}
                                            >
                                                マイページ
                                            </Button>
                                        </Link>
                                        <Button 
                                            variant="outline-warning"
                                            className="my-2"
                                        >
                                            設定
                                        </Button>
                                        <Button 
                                            onClick={logoutUser}
                                            variant="outline-warning"
                                            className="my-2"
                                        >
                                            ログアウト
                                        </Button>
                                    </div>
                                }
                            </div>
                            :
                            // サインアップ or ログイン
                                <li className="col">
                                    <MdOutlineLogin onClick={authenticateUser} cursor="pointer"/>
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