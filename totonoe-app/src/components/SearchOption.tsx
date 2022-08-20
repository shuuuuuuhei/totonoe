import React, { Component, Fragment } from 'react'
import { Input } from './form-components/Input'
import { Button } from 'react-bootstrap'
import { InputScope } from './form-components/InputScope'

export const SearchOption = () => {
    const handleChange = () => {

    }

    const termsList = [
        "宿泊", "飯処", "コワーキングスペース", "外気浴", "読書", "給水機", "熱波師",
    ]

    return(
        <Fragment>
            <div className="option-box border px-3 py-2 text-start">
                <label htmlFor="" className="py-3">■条件を絞る</label>
                <div className="area-option text-start">
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
                <div className="temperature-option row">
                    <InputScope
                        className="input-sm"
                        name=""
                        value=""
                        onChange={handleChange}
                        placehodlder="温度"
                        errorDiv=""
                        errorMsg=""
                    />
                </div>
                <div className="temperature-option row">
                    <InputScope
                        className="input-sm"
                        name=""
                        value=""
                        onChange={handleChange}
                        placehodlder="値段"
                        errorDiv=""
                        errorMsg=""
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
                        <Button>検索</Button>
                    </div>
                    <div className="clear-button py-2 col-6">
                        <Button>クリア</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}