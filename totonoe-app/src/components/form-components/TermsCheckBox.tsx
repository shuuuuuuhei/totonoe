import React, { Component, Fragment } from 'react'
import { termsList } from '../../utils/constants';

type termsCheckBoxProps = {
    terms: {
        id: string;
        name: string;
    }[]|undefined,
    setTerms: React.Dispatch<React.SetStateAction<{
        id: string;
        name: string;
    }[]|undefined>>
}


export const TermsCheckBox = (props: termsCheckBoxProps) => {

const handleChangeTerms = (e: React.FormEvent<HTMLInputElement>) => {
    const id = e.currentTarget.id;
    const name = e.currentTarget.value;

    // チェックがある場合は、配列から要素を追加
    if(e.currentTarget.checked) {

        props.setTerms((prevState) => (
            // 配列が存在していない場合は、代入する
            !prevState ? 
            [
                {
                    id: id,
                    name: name,
                }
            ]
            :
            // 配列が存在している場合は、配列に追加する
            [
                ...prevState,
                {
                    id: id,
                    name: name,
                }
            ]
        ))
        return
    }

    // 配列から要素を削除
    const newTerms = props.terms?.filter((term, index) => {
        if(term.id != id) {
            return term;
        }
    })
    props.setTerms(newTerms);
}
    return(
        <Fragment>
            <label htmlFor="">施設設備</label>
            <div className="terms-options text-start row">
                {termsList.map((terms, index) => {
                    return(
                        <div className="terms-option py-1 px-2 col-3" key={index}>
                            <input type="checkbox" className="form-check-input pl-2" value={terms.name} id={terms.id} onClick={handleChangeTerms}/>
                            <label htmlFor={terms.id} className="px-3 border-bottom">
                                {terms.name}
                            </label>
                        </div>
                    )
                })}
            </div>  
        </Fragment>
    )
}