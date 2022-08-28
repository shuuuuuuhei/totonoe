import React, { Component, Fragment, useState, ChangeEvent } from 'react'
import { Button, DropdownButton, Dropdown, ButtonGroup, Accordion, Form} from 'react-bootstrap'
import { Input } from './form-components/Input'

type SaunaSubmitComponentProps = {
    sauna: NewSauna,
    index: number,
    handleDeleteSauna: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
    setSaunas: React.Dispatch<React.SetStateAction<NewSauna[]>>
}

export const SaunaSubmitComponent = (props: SaunaSubmitComponentProps) => {

    const [sauna, setSauna] = useState<NewSauna>(props.sauna);
    console.log(sauna)

    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const name = event.target.name.split(":")[1];
        const value = event.target.value;

        setSauna({
            ...sauna,
            [name]: value,
        });

        props.setSaunas((prevState) => 
            prevState.map((prevSaunaState, index) => (index === props.index ? sauna : prevSaunaState))
        );
    }

    const saunaTypeList = [
        "遠赤外線サウナ", "ミストサウナ", "スチームサウナ", "塩サウナ", "ケロサウナ", "ボナサウナ", "スモークサウナ", "テントサウナ", "アースサウナ", "アイスサウナ", "バレルサウナ"
    ]

    const saunaOptions = [
        {
            id: 'rouryu_kb',
            name: "ロウリュウ",
        },
        {
            id: 'sauna_mat_kb',
            name: "サウナマット",
        },
        {
            id: 'tv_kb',
            name: "TV",
        },
        {
            id: 'bgm_kb',
            name: "BGM",
        },
    ]

    const handleSaunaType = (event: ChangeEvent<HTMLSelectElement>) => {
        const saunaTypeIndex = parseInt(event.target.value);

        // サウナタイプの更新を行う
        setSauna((prevState) => ({...prevState, sauna_type: saunaTypeIndex,}))
        props.setSaunas((prevState) => 
            prevState.map((prevSaunaState, index) => (index === props.index ? sauna : prevSaunaState))
        );
    }

    const handleSaunaOption = (e: React.FormEvent<HTMLInputElement>) => {
        const saunaOptionID = e.currentTarget.id.split(":")[1];
        
        // チェックがついている場合はサウナ該当するオプションIDの値を1にする
        if(e.currentTarget.checked) {
            setSauna((prevState) => ({
                ...prevState,
                [saunaOptionID]: "1",
            }))
        } else {
            setSauna((prevState) => ({
                ...prevState,
                [saunaOptionID]: "0",
            }))
        }
        props.setSaunas((prevState) => 
            prevState.map((prevSaunaState, index) => (index === props.index ? sauna : prevSaunaState))
        );
    }

    return(
        <Fragment>
            <Accordion defaultActiveKey="1" className="py-3">
                <Accordion.Item eventKey={props.index.toString()}>
                    <Accordion.Header>
                        <div className="col-2">
                            <p className="m-0">サウナ{props.index+1}</p>
                        </div>
                        {props.index !== 0 ? 
                            <div className="col-9 text-end">
                                <Button id={props.index.toString()} onClick={props.handleDeleteSauna} variant="outline-danger" size="sm">削除</Button>
                            </div>
                            : <></> 
                        }
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="container text-start py-3">
                            <label htmlFor="">サウナタイプ</label>
                            <div className="sauna-type py-3">
                            <Form.Select aria-label="Default select example" onChange={handleSaunaType}>
                                <option className="d-none" value="">サウナタイプを選択</option>
                                {saunaTypeList.map((saunaType, index) => {
                                    return(
                                        <option value={index.toString()}>{saunaType}</option>
                                    )
                                })}
                            </Form.Select>
                            </div>
                            <div className="row">
                                <div className="temperature col-6">
                                    <label htmlFor="">温度</label>
                                    <Input 
                                            type="number"
                                            className="input-sm"
                                            name={props.index+":temperature"}
                                            value={sauna.temperature.toString()}
                                            onChange={handleChange}
                                            placehodlder=""
                                            errorDiv=""
                                            errorMsg=""
                                    />
                                </div>
                                <div className="capacity col-6">
                                    <label htmlFor="">収容人数</label>
                                    <Input 
                                            type="number"
                                            className="input-sm"
                                            name={props.index+":capacity"}
                                            value={sauna.capacity.toString()}
                                            onChange={handleChange}
                                            placehodlder=""
                                            errorDiv=""
                                            errorMsg=""
                                    />
                                </div>
                            </div>
                            <div className="sauna-option">
                                <label htmlFor="">サウナオプション</label>
                                {saunaOptions.map((option, index) => {
                                    return(
                                        <div className="terms-option py-1 px-2">
                                            <input type="checkbox" className="form-check-input pl-2" value={option.name} id={props.index+":"+option.id} onClick={handleSaunaOption} />
                                            <label htmlFor={props.index+":"+option.id} className="px-3 border-bottom">
                                                {option.name}
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Fragment>
    )
}