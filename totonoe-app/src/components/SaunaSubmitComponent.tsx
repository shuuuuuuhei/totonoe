import React, { Component, Fragment, useState, ChangeEvent } from 'react'
import { Button, DropdownButton, Dropdown, ButtonGroup, Accordion, Form} from 'react-bootstrap'
import { Input } from './form-components/Input'
import { saunaTypeList, saunaOptions } from '../utils/constants';
const MinCapacity = 1;

type SaunaSubmitComponentProps = {
    sauna: NewSauna,
    index: number,
    handleSetSaunas: (updateIndex: number, name: string, value: string|number) => void
    handleDeleteSauna: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

export const SaunaSubmitComponent = (props: SaunaSubmitComponentProps) => {

    const [sauna, setSauna] = useState<NewSauna>(props.sauna);
    console.log(sauna)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name.split(":")[1];
        const value: string|number = event.target.value;

        // number型の更新の場合
        if(typeof sauna[name as keyof NewSauna] === 'number') {
            const numValue = parseInt(value);
            setSauna((prevState) => (
                {...prevState, [name]: numValue,}
            ));
            props.handleSetSaunas(props.index, name, numValue);
            return
        }

        setSauna((prevState) => (
            {...prevState, [name]: value,}
        ));
        props.handleSetSaunas(props.index, name, value);
    }

 
    const handleSaunaType = (event: ChangeEvent<HTMLSelectElement>) => {
        const saunaTypeIndex = parseInt(event.target.value);

        // サウナタイプの更新を行う
        setSauna((prevState) => ({...prevState, sauna_type: saunaTypeIndex,}))
        props.handleSetSaunas(props.index, "sauna_type", saunaTypeIndex);
    }

    const handleSaunaOption = (e: React.FormEvent<HTMLInputElement>) => {
        const saunaOptionID = e.currentTarget.id.split(":")[1];
        
        // チェックがついている場合はサウナ該当するオプションIDの値を1にする
        if(e.currentTarget.checked) {
            setSauna((prevState) => ({
                ...prevState,
            }))
            props.handleSetSaunas(props.index, saunaOptionID, "1");
        } else {
            setSauna((prevState) => ({
                ...prevState,
                [saunaOptionID]: "0",
            }))
            props.handleSetSaunas(props.index, saunaOptionID, "0");
        }
        
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
                            <Form.Group className="sauna-type py-3">
                                <Form.Label>サウナタイプ</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={handleSaunaType}>
                                    <option className="d-none" value="">サウナタイプを選択</option>
                                    {saunaTypeList.map((saunaType, index) => {
                                        return(
                                            <option value={index.toString()} key={index}>{saunaType}</option>
                                        )
                                    })}
                                </Form.Select>
                                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                            </Form.Group>
                            <div className="row">
                                <Form.Group className="temperature col-6">
                                    <Form.Label>温度</Form.Label>
                                    <Form.Control 
                                            type="number"
                                            className="input-sm"
                                            name={props.index+":temperature"}
                                            value={sauna.temperature.toString()}
                                            onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="capacity col-6">
                                    <Form.Label>収容人数</Form.Label>
                                    <Form.Control 
                                            type="number"
                                            className="input-sm"
                                            name={props.index+":capacity"}
                                            value={sauna.capacity.toString()}
                                            onChange={handleChange}
                                            required={true}
                                            min={MinCapacity}
                                    />
                                    <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <Form.Group className="sauna-option">
                                <Form.Label>サウナオプション</Form.Label>
                                {saunaOptions.map((option, index) => {
                                    return(
                                        <div className="terms-option py-1 px-2" key={index}>
                                            <input type="checkbox" className="form-check-input pl-2" value={option.name} id={props.index+":"+option.id} onClick={handleSaunaOption} />
                                            <Form.Label htmlFor={props.index+":"+option.id} className="px-3 border-bottom"/>
                                                {option.name}
                                        </div>
                                    )
                                })}
                                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Fragment>
    )
}