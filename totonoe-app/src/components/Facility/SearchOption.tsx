import React, { Component, Fragment, useState } from 'react'
import { Input } from '../form-components/Input'
import { Button, Form } from 'react-bootstrap'
import { InputScope } from '../form-components/InputScope'
import { Link } from 'react-router-dom'
import { termsList, MinPageCount } from '../../utils/constants'

type searchOptionProps = {
    handleSearch: (searchOption: string) => void
}
type terms = {
    id: string,
    link: string,
}

export const SearchOption = (props: searchOptionProps) => {

    const [temperature, setTemperature] = useState({ start: "", end: "" });
    const [price, setPrice] = useState({ start: "", end: "" });
    const [termsListState, setTermsListState] = useState<terms[] | undefined>([]);


    const handleTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // 入力区分(開始or終了)を受け取る
        const inputKb = event.target.id;
        const inputPrice = event.target.value;

        setTemperature({ ...temperature, [inputKb]: inputPrice });
    }

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // 入力区分(開始or終了)を受け取る
        const inputKb = event.target.id;
        setPrice({ ...temperature, [inputKb]: event.target.value });
    }

    const handleChangeTerms = (e: React.FormEvent<HTMLInputElement>) => {
        const id = e.currentTarget.id;

        // チェックがある場合は、配列から要素を追加
        if (e.currentTarget.checked) {

            setTermsListState((prevState) => (
                // 配列が存在していない場合は、代入する
                !prevState ?
                    [
                        {
                            id: id,
                            link: "",
                        }
                    ]
                    :
                    // 配列が存在している場合は、配列に追加する
                    [
                        ...prevState,
                        {
                            id: id,
                            link: "",
                        }
                    ]
            ))
            return
        }

        // 配列から要素を削除
        const newTerms = termsListState?.filter((term, index) => {
            if (term.id != id) {
                return term;
            }
        })
        setTermsListState(newTerms);

    }

    const returnPositionFromTop = () => {
        const positionFromTop = document.getElementById('result-top')?.offsetTop;
        window.scrollTo({
            top: positionFromTop,
            behavior: "auto",
        })
    }

    const handleSearchButton = () => {
        // termsリストでチェックがある項目のリンクを作成
        const termsOption = termsListState?.map((terms) => { return "&" + terms.id + "=1" });

        // 追加検索のuriに検索条件を付与して、検索関数に引数として渡す
        const searchOption = `&price_start=${price.start}&price_end=${price.end}&temperature_start=${temperature.start}&temperature_end=${termsOption?.join('')}&page=${MinPageCount}`;
        returnPositionFromTop();
        props.handleSearch(searchOption);
    }

    // チェックボックスクリア処理
    const checkBoxClear = () => {

        // チェックボックスをクリア
        const checkBoxList = document.querySelectorAll<HTMLInputElement>("input[type='checkbox']")
        checkBoxList.forEach((checkBox) => {
            checkBox.checked = false;
        })

        // リスト状態を初期化
        const newTerms: terms[] = [];
        setTermsListState(newTerms);
    }

    return (
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
                        return (
                            <div className="terms-option py-1 px-2" key={index}>
                                <input type="checkbox" className="form-check-input pl-2" name="checkBox" id={terms.id} onClick={handleChangeTerms} />
                                <label htmlFor={"formCheckDefault" + index.toString()} className="px-3 border-bottom">
                                    {terms.name}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                    <div className="research-button py-2 col-6">
                        <Button className="btn-warning btn-blockb　w-auto" onClick={handleSearchButton}>検索</Button>
                    </div>
                    <div className="clear-button py-2 col-6">
                        <Button onClick={checkBoxClear}>クリア</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}