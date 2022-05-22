import React, { useState, Fragment, useEffect } from 'react'
import {Card, Button} from "react-bootstrap"
import "../style/Header.css"
import {  FaGithub } from 'react-icons/fa';
import { HiOutlineLogin, HiOutlinePencilAlt } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons'

export const Header = () => {
    return (
        <Fragment>
            <div className="header row">
                <div className="header-top d-flex justify-content-between">
                    <div className="header-top-left">

                    </div>
                    <ul className="header-top-right row">
                        <IconContext.Provider value={{ color: '#000000', size: '50' }}>
                            <li className="col">
                                <Link to="/"><HiOutlineLogin/></Link>
                            </li>
                            <li className="col">
                            <   Link to="/"><CgProfile /></Link>
                            </li>
                            <li className="col">
                                <Link to="/"><HiOutlinePencilAlt /></Link>
                            </li>
                        </IconContext.Provider>
                    </ul>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="header-top-right">
                        <h1>Totonoe</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}