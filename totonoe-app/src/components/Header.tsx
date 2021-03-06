import React, { useState, Fragment, useEffect } from 'react'
import {Card, Button} from "react-bootstrap"
import "../style/Header.css"
import { HiOutlineLogin, HiOutlinePencilAlt } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useAuth0 } from '@auth0/auth0-react';

export const Header = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const userID = user?.sub?.split('|').at(1);
    const authenticateUser = () => {
        // 認証処理
        loginWithRedirect()
    }

    const logoutUser = () => {
        logout({returnTo: window.location.origin})
    }

    return (
        <Fragment>
            <div className="header row">
                <div className="header-top d-flex justify-content-between">
                    <div className="header-top-left">

                    </div>
                    <ul className="header-top-right row">
                        <IconContext.Provider value={{ color: '#000000', size: '50' }}>
                            {isAuthenticated || typeof userID !== 'undefined' ?
                            <li className="col">
                                <Link to={'profile/'+userID}><CgProfile /></Link>
                                <Button 
                                    onClick={logoutUser}
                                    variant="outline-primary"
                                >
                                    ログアウト
                                </Button>
                            </li>
                            :
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