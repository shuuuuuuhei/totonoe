import React, { Fragment, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Modal, Typography, Box } from '@mui/material';
import { SelectFilterBox } from './form-components/SelectFilterBox';

const MinPageCount = 1;
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export const SearchBox = () => {

    const [area, setArea] = useState("");
    const [facilityName, setFacilityName] = useState("");
    const [isModalShowed, setIsModalShowed] = useState(false);

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
                        <Button onClick={() => { setIsModalShowed(true) }}>
                            特徴を指定
                        </Button>
                        <Modal
                            open={isModalShowed}
                            onClose={() => { setIsModalShowed(!isModalShowed) }}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography className="text-center" variant="h6" component="h2">
                                    特徴を選択する
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {/* 条件選択ボックス */}
                                    <SelectFilterBox />
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                    <div className="col-1">
                        <Link to={`/search?lang=jp&area=${area}&name=${facilityName}&page=${MinPageCount}`}><Button className="btn-warning btn-blockb　w-auto">検索</Button></Link>
                    </div>
                </div>
            </Form>
        </Fragment >
    )
}