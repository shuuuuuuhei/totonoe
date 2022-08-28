import React, { Component, Fragment, useState } from 'react'
import { Accordion, Button, DropdownButton } from 'react-bootstrap'
import { Input } from './form-components/Input'

type waterBathSubmitComponentProps = {
    waterBath: WaterBath,
    index: number,
    handleDeleteWaterBath: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
    setWaterBaths: React.Dispatch<React.SetStateAction<WaterBath[]>>
}
export const WaterBathSubmitComponent = (props: waterBathSubmitComponentProps) => {

    const [waterBath, setWaterBath] = useState<WaterBath>(props.waterBath);

    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const name = event.target.name.split(":")[1];
        const value = event.target.value;

        setWaterBath({
            ...waterBath,
            [name]: value,
        });

        props.setWaterBaths((prevState) => 
            prevState.map((prevSaunaState, index) => (index === props.index ? waterBath : prevSaunaState))
        );
    }

    return(
        <Fragment>
            <Accordion defaultActiveKey="1" className="py-3">
                <Accordion.Item eventKey={props.index.toString()}>
                    <Accordion.Header>
                        <div className="col-2">
                            <p className="m-0">水風呂{props.index+1}</p>
                        </div>
                        <div className="col-9 text-end">
                            <Button id={props.index.toString()} onClick={props.handleDeleteWaterBath} variant="outline-danger" size="sm">削除</Button>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="container text-start py-3">
                            <div className="row">
                                <div className="temperature col-6">
                                    <label htmlFor="">温度</label>
                                    <Input 
                                            type="number"
                                            className="input-sm"
                                            name={props.index+":temperature"}
                                            value={waterBath.temperature.toString()}
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
                                            value={waterBath.capacity.toString()}
                                            onChange={handleChange}
                                            placehodlder=""
                                            errorDiv=""
                                            errorMsg=""
                                    />
                                </div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    </Fragment>
    )
}