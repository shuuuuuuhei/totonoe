import React, { Component, Fragment, useState } from 'react'
import { termsList, saunaOptions, saunaTypeList } from '../../utils/constants'
import { FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material'
import { Link } from 'react-router-dom';

const filterTitleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: 0,
};
const MinPageCount = 1;
export const SelectFilterBox = () => {

    const [saunaTypeState, setSaunaTypeState] = useState([]);
    const [saunaOptionState, setSaunaOptionState] = useState([]);
    const [termsListState, setTermsState] = useState([]);

    /**
     * サウナタイプ変更ハンドラ
     * @param e 
     */
    const handleChangeSaunaType = (e: React.FormEvent<HTMLInputElement>) => {
        const saunaTypeId = e.currentTarget.id;

        // CheckをONにする(OFF→ON)
        if (e.currentTarget.checked) {
            const newSaunaTypeIndexList = saunaTypeState;
            newSaunaTypeIndexList.push(saunaTypeId);

            setSaunaTypeState(newSaunaTypeIndexList);
        } else {
            // CheckをOFFにする(ON→OFF)
            const newSaunaTypeList = saunaTypeState.filter(index => index !== saunaTypeId);

            setSaunaTypeState(newSaunaTypeList);
        }
    }

    /**
     * サウナオプション変更ハンドラ
     * @param e 
     */
    const handleChangeSaunaOption = (e: React.FormEvent<HTMLInputElement>) => {
        const id = e.currentTarget.id;

        const saunaOptionIndex = parseInt(id);
        // CheckをONにする(OFF→ON)
        if (e.currentTarget.checked) {
            const newSaunaOptionList = saunaOptionState;
            newSaunaOptionList.push(saunaOptions[saunaOptionIndex].id);

            setSaunaOptionState(newSaunaOptionList);
        } else {
            // CheckをOFFにする(ON→OFF)
            const newSaunaOptionList = saunaOptionState.filter((saunaOption, index) => {
                // 該当のインデックス以外を配列に残す
                if (saunaOption != saunaOptions[saunaOptionIndex].id) {
                    return saunaOption;
                }
            })
            setSaunaOptionState(newSaunaOptionList);
        }
    }

    /**
     * 施設設備変更ハンドラ
     * @param e 
     */
    const handleChangeTerms = (e: React.FormEvent<HTMLInputElement>) => {
        const id = e.currentTarget.id;

        const termsIndex = parseInt(id);
        // CheckをONにする(OFF→ON)
        if (e.currentTarget.checked) {
            const newTermsList = termsListState;
            newTermsList.push(termsList[termsIndex].id);

            setTermsState(newTermsList);
        } else {
            // CheckをOFFにする(ON→OFF)
            const newTermsList = termsListState.filter((terms, index) => {
                // 該当のインデックス以外を配列に残す
                if (terms != termsList[termsIndex].id) {
                    return terms;
                }
            })
            setTermsState(newTermsList);
        }
    }

    const handleCheckBoxClear = () => {
        // チェックボックスをクリア
        const checkBoxList = document.querySelectorAll<HTMLInputElement>("input[type='checkbox']");
        console.log(checkBoxList);

        checkBoxList.forEach((checkBox) => {
            checkBox.checked = false;
        })

        // リスト状態を初期化

    }

    return (
        <Fragment>
            <div className="container">
                <div className="row py-2">
                    <p style={filterTitleStyle}>サウナタイプ</p>
                    {saunaTypeList.map((saunaType, index) => {
                        return (
                            <div className="terms-option py-1 px-1 col-4" key={index}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox onChange={handleChangeSaunaType} id={index.toString()} />} label={saunaType} />
                                </FormGroup>
                            </div>
                        )
                    })}
                </div>

                <div className="row py-2">
                    <p style={filterTitleStyle}>サウナオプション</p>
                    {saunaOptions.map((saunaOption, index) => {
                        return (
                            <div className="terms-option py-1 px-1 col-4" key={index}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox onChange={handleChangeSaunaOption} id={index.toString()} />} label={saunaOption.name} />
                                </FormGroup>
                            </div>
                        )
                    })}
                </div>
                <div className="row py-2">
                    <p style={filterTitleStyle}>施設設備</p>
                    {termsList.map((terms, index) => {
                        return (
                            <div className="terms-option py-1 px-1 col-4" key={index}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox onChange={handleChangeTerms} id={index.toString()} />} label={terms.name} />
                                </FormGroup>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="row justify-content-center">
                <Button variant="contained" className="col-3" onClick={handleCheckBoxClear}>クリア</Button>
                <Link to={`/search?page=1`} state={{ "saunaOptionState": saunaOptionState, "termsState": termsListState, "saunaTypeState": saunaTypeState }} className=" text-center col-6">
                    <Button variant="contained" color="warning" fullWidth>
                        検索
                    </Button>
                </Link>
            </div>
        </Fragment>
    )
}