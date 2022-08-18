import React, { Fragment, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Input } from './form-components/Input';
import "../style/Search-Box.css"
import { Link } from 'react-router-dom';

export const SearchBox = () => {
    
    const handleChange = () => {
        
    }
    return (
        <Fragment>
            <form className="container">
                <div className="search-box row justify-content-center">
                    <div className="col-md-5">
                        <Input 
                            type="text"
                            className="input-sm"
                            name=""
                            value=""
                            onChange={handleChange}
                            placehodlder="エリア・駅・【例：銀座、池袋】"
                            errorDiv=""
                            errorMsg=""
                            />
                    </div>
                    <div className="col-md-5">
                        <Input 
                            type="text"
                            className="input-sm"
                            name=""
                            value=""
                            onChange={handleChange}
                            placehodlder=""
                            errorDiv=""
                            errorMsg=""
                        />
                    </div>
                    <div className="col-md-2">
                        <Link to="/search"><Button className="btn-warning btn-blockb　w-auto">検索</Button></Link>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}