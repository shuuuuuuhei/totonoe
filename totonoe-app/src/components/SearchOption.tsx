import React, { Component, Fragment, useState } from 'react'
import { Input } from './form-components/Input'
import { Button, Form } from 'react-bootstrap'
import { InputScope } from './form-components/InputScope'
import { Link } from 'react-router-dom'

const termsList = [
    "宿泊", "飯処", "コワーキングスペース", "外気浴", "読書", "給水機", "熱波師",
]

export const SearchOption = () => {

    const [temperature, setTemperature] = useState({start: "", end: ""});
    const [price, setPrice] = useState({start: "", end: ""})

    const handleTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
        // 入力区分(開始or終了)を受け取る
        const inputKb = event.target.id;
        setTemperature({...temperature, [inputKb]: event.target.value});
    }
    
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // 入力区分(開始or終了)を受け取る
        const inputKb = event.target.id;
        setPrice({...temperature, [inputKb]: event.target.value});
    }
    
    return(
        <Fragment>
            <div className="option-box border px-3 py-2 text-start">
                <label htmlFor="" className="py-3">■条件を絞る</label>
                <Form.Group className="temperature row py-2">
                    <Form.Label>温度</Form.Label>
                    <InputScope
                        className="input-sm"
                        name=""
                        valueStart={temperature.start.toString()}
                        valueEnd={temperature.end.toString()}
                        onChange={handleTemperatureChange}
                        placehodlder="温度"
                    />
                </Form.Group>
                <div className="temperature-option row py-2">
                    <Form.Label>値段</Form.Label>
                    <InputScope
                        className="input-sm"
                        name=""
                        valueStart={price.start}
                        valueEnd={price.end}
                        onChange={handlePriceChange}
                        placehodlder="値段"
                    />
                </div>
                <div className="terms-options text-start">
                    {termsList.map((terms, index) => {
                        return(
                            <div className="terms-option py-1 px-2">
                                <input type="checkbox" className="form-check-input pl-2" value="" id={"formCheckDefault"+index.toString()}/>
                                <label htmlFor={"formCheckDefault"+index.toString()} className="px-3 border-bottom">
                                    {terms}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                    <div className="research-button py-2 col-6">
                        <Link to="/search"><Button className="btn-warning btn-blockb　w-auto">検索</Button></Link>
                    </div>
                    <div className="clear-button py-2 col-6">
                        <Button>クリア</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}