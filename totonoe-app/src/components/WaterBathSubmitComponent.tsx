import React, { Fragment, useState } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { Input } from './form-components/Input'

type waterBathSubmitComponentProps = {
    waterBath: WaterBath,
    index: number,
    handleSetWaterBath: (updateIndex: number, name: string, value: string | number) => void
    handleDeleteWaterBath: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
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
        // number型の更新の場合
        if(typeof waterBath[name as keyof WaterBath] === 'number') {
            const numValue = parseInt(value);
            setWaterBath((prevState) => (
                {...prevState, [name]: numValue,}
            ));
            props.handleSetWaterBath(props.index, name, numValue);
            return
        }

        setWaterBath((prevState) => (
            {...prevState, [name]: value,}
        ));
        props.handleSetWaterBath(props.index, name, value);
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
                                            required={true}
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
                                            required={true}
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