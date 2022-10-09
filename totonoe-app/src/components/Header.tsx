import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment } from 'react';
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

export const Header = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();
    
    /**
     * ユーザ認証機能
     */
    const authenticateUser = async() => {
        // 認証処理
        try {
       
            const options = {
              redirect_uri: window.location.origin,
              audience: 'https://totonoe-app.com'
            };
    
            await loginWithRedirect(options);
          } catch (err) {
            console.log("Log in failed", err);
          }
    }

    const logoutUser = () => {
        removeCookie("userID",{path:'/'});
        logout({returnTo: window.location.origin});
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
                    <ul className="header-top-right row">
                        <IconContext.Provider value={{ color: '#000000', size: '50' }}>
                            {isAuthenticated || typeof cookies.userID != 'undefined'? 
                            <li className="col">
                                <Link to={'profile/'+cookies.userID}><CgProfile /></Link>
                                <Button 
                                    onClick={logoutUser}
                                    variant="outline-primary"
                                >
                                    ログアウト
                                </Button>
                            </li>
                            :
                            // サインアップ or ログイン
                                <li className="col">
                                    <Button onClick={authenticateUser}>
                                        <HiOutlineLogin/>
                                    </Button>
                                </li>
                            }
                            <li className="col">
                                <Link to="/articles/new"><HiOutlinePencilAlt /></Link>
                            </li>
                        </IconContext.Provider>
                    </ul>
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