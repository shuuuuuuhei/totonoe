import React, { Component, Fragment, useState } from 'react'
import { SaunaDetail } from '../components/SaunaDetail';
import { Valuation } from '../components/Valuation';

export const SaunaPage = () => {

    const [sauna, setSaunsaState] = useState<Sauna>();
    const [activeMode, setActiveMode] = useState("nav-1");

    const handleClick= (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        // ボタンを非活性にする
        document.getElementById(activeMode)?.classList.remove("active")

        // ボタンを活性化する
        const id = event.currentTarget.id;
        document.getElementById(id)?.classList.add("active")
        setActiveMode(id)
    }
    console.log(activeMode)

    return(
        <Fragment>
            <div className="container py-5">
                <div className="row align-items-center sauna-name py-4">
                    <h1 className="text-center">
                        タイムズ スパ・レスタ 
                    </h1>
                </div>
                <ul className="nav nav-pills nav-fill py-3">
                    <li className="nav-item"><button id='nav-1' className="nav-link active" onClick={handleClick}>施設情報</button></li>
                    <li className="nav-item"><button id='nav-2' className="nav-link" onClick={handleClick}>投稿</button></li>
                    <li className="nav-item"><button id='nav-3' className="nav-link" onClick={handleClick}>評価</button></li>
                </ul>
            </div>
            <div className="sauna-contents">
                {
                    (() => {
                        if(activeMode == 'nav-1') return( <SaunaDetail sauna={sauna}/> )
                        if(activeMode == 'nav-2') return( <>投稿</> )
                        if(activeMode == 'nav-3') return( < Valuation/> )
                    })()
                }
            </div>
        </Fragment>
    )
}