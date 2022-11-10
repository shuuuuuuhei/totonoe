import React, { Fragment, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MinPageCount = 1;
export const SearchBox = () => {

    const [area, setArea] = useState("");
    const [facilityName, setFacilityName] = useState("");

    const handleArea = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArea(event.target.value)
    }

    const handleFacilityName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFacilityName(event.target.value);
    }

    return (
        <Fragment>
            <Form className="container" style={{ marginTop: "-20px" }}>
                <div className="search-box row">
                    <div className="col-5 p-0">
                        <Form.Control
                            type="text"
                            className="input-sm"
                            name=""
                            value={area}
                            onChange={handleArea}
                            placeholder="エリア・駅・【例：銀座、池袋】"
                        />
                    </div>
                    <div className="col-5 p-0">
                        <Form.Control
                            type="text"
                            className="input-sm"
                            name=""
                            value={facilityName}
                            onChange={handleFacilityName}
                            placeholder="施設名"
                        />
                    </div>
                    <div className="col-1 p-0">
                        <Button>
                            特徴を指定
                            </Button>
                    </div>
                    <div className="col-1">
                        <Link to={`/search?lang=jp&area=${area}&name=${facilityName}&page=${MinPageCount}`}><Button className="btn-warning btn-blockb　w-auto">検索</Button></Link>
                    </div>
                </div>
            </Form>
        </Fragment >
    )
}