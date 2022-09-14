import React, { Fragment, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "../style/Search-Box.css"
import { Link } from 'react-router-dom';

export const SearchBox = () => {
    
    const [area, setArea] = useState("");
    const [keyWord, setKeyWord] = useState("");

    const handleArea = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArea(event.target.value)
    }

    const handleKeyWord = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyWord(event.target.value);
    }
    
    return (
        <Fragment>
            <Form className="container">
                <div className="search-box row">
                    <div className="col-4 p-0">
                        <Form.Control 
                            type="text"
                            className="input-sm"
                            name=""
                            value={area}
                            onChange={handleArea}
                            placeholder="エリア・駅・【例：銀座、池袋】"
                        />
                    </div>
                    <div className="col-4 p-0">
                        <Form.Control 
                            type="text"
                            className="input-sm"
                            name=""
                            value={keyWord}
                            onChange={handleKeyWord}
                            placeholder="施設名・キーワード"
                        />
                    </div>
                    <div className="col-1 p-0">
                        <Button>
                            特徴を指定
                        </Button>
                    </div>
                    <div className="col-2 text">
                        <Link to={"/search?lang=jp&area="+area+"&keyword="+keyWord}><Button className="btn-warning btn-blockb　w-auto">検索</Button></Link>
                    </div>
                </div>
            </Form>
        </Fragment>
    )
}