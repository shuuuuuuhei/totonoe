import React, { Component, Fragment, useState } from 'react'
import { Input } from './form-components/Input'
import { InputScope } from './form-components/InputScope'
import { DropdownButton, Dropdown, ButtonGroup, Button, Form } from 'react-bootstrap'
import '../style/QuantityInput.css'
import { SelectAddress } from './form-components/SelectAdress'
import { TermsCheckBox } from './form-components/TermsCheckBox'
import { SaunaSubmitComponent } from './SaunaSubmitComponent'
import { WaterBathSubmitComponent } from './WaterBathSubmitComponent'

export const FacilitySubmitComponent = () => {

    const [facility, setFacilityState] = useState<NewFacility>({
        id: "",
        name: "",
        price: 0,
        prefecture_id: 0,
        city_id: 0,
        street: "",
        eigyo_start: "",
        eigyo_end: "",
        access: "",
        tel: "",
        restaurant_kb: "",
        lodging_kb: "",
        workingspace_kb: "",
        books_kb: "",
        heatwave_kb: "",
        airbath_kb: "",
        breakspace_kb: "",
        waterserver_kb: "",
        saunas: [],
        waterbaths: [],
        amenities: [],
    });

    // SelectAddressコンポーネントで変更があれば更新を行う
    const [address, setAddress] = useState({
        prefectureID: 0,
        cityID: 0,
        street: "",
    });

    const [terms, setTerms] = useState<{id: string;
        name: string;}[]>();
    
    const [saunas, setSaunas] = useState<NewSauna[]>([
        {
            id: "",
            facility_id: "",
            sauna_type: 0,
            temperature: 0,
            capacity: 0,
            rouryu_kb: "",
            bgm_kb: "",
            tv_kb: "",
            sauna_mat_kb: "",
        }
    ]);

    const [waterBaths, setWaterBaths] = useState<WaterBath[]>([{
        id: "",
        facility_id: "",
        temperature: 0,
        capacity: 0,
    }]);

    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFacilityState({
            ...facility, 
            [name]: value,
        });
    };

    console.log(saunas)

    const handleAddSauna = () => {
        setSaunas((prevState) => ([
            ...prevState,
            {
                id: "",
                facility_id: "",
                sauna_type: 0,
                temperature: 0,
                capacity: 0,
                humidity_start: 0,
                humidity_end: 0,
                rouryu_kb: "",
                bgm_kb: "",
                tv_kb: "",
                sauna_mat_kb: "",
            },
        ]))
    }

    const handleAddWaterBath = () => {
        setWaterBaths((prevState) => ([
            ...prevState,
            {
                id: "",
                facility_id: "",
                temperature: 0,
                capacity: 0,
            },
        ]))
    }

    const handleDeleteSauna = ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        
        // 要素をしていするindexを受け取る
        const deleteIndex = parseInt(event.currentTarget.id);
        console.log(deleteIndex)

        const newSaunas = saunas.filter((sauna, index) => {
            console.log(index, sauna)
            return index !== deleteIndex
        })

        setSaunas(newSaunas);

        console.log(saunas);
    })

    const handleDeleteWaterBath = ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        
        // 要素をしていするindexを受け取る
        const deleteIndex = parseInt(event.currentTarget.id);
        console.log(deleteIndex)

        const newWaterBaths = waterBaths.filter((sauna, index) => {
            console.log(index, waterBaths)
            return index !== deleteIndex
        })

        setWaterBaths(newWaterBaths);
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("aaa")
    }

    return(
        <Fragment>
            <div className="container p-5">
                <div className="row py-5">
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center py-3">サウナ施設を登録する</h2>
                        <label htmlFor="">施設名</label>
                        <Input 
                                type="text"
                                className="input-sm"
                                name="name"
                                value={facility.name}
                                onChange={handleChange}
                                placehodlder="〇〇温泉"
                                errorDiv=""
                                errorMsg=""
                        />
                        <label htmlFor="">住所</label>
                        <SelectAddress address={address} setAddress={setAddress}/>
                        <label htmlFor="">営業時間</label>
                        <div className="eigyo-time row">
                            <div className="col-5">
                                <Input 
                                        type="time"
                                        className="input-sm"
                                        name="eigyo_start"
                                        value={facility.eigyo_start}
                                        onChange={handleChange}
                                        placehodlder=""
                                        errorDiv=""
                                        errorMsg=""
                                />
                            </div>
                            <p className="col-1 text-center">~</p>
                            <div className="col-5">
                                <Input 
                                        type="time"
                                        className="input-sm"
                                        name="facility_end"
                                        value={facility.eigyo_end}
                                        onChange={handleChange}
                                        placehodlder=""
                                        errorDiv=""
                                        errorMsg=""
                                />
                            </div>
                        </div>
                        <label htmlFor="">値段</label>
                        <Input 
                                type="number"
                                className="input-sm"
                                name="price"
                                value={facility.price.toString()}
                                onChange={handleChange}
                                placehodlder="値段"
                                errorDiv=""
                                errorMsg=""
                        />
                        <div className="row py-4">
                            <div className="col-6">
                                <div className="row">
                                    <label htmlFor="" className="col-6">サウナ</label>
                                    <div className="col-6 text-end">
                                        <Button onClick={handleAddSauna}>
                                            サウナを追加
                                        </Button>
                                    </div>
                                </div>
                                {saunas.map((sauna, index) => {
                                    return(
                                        <SaunaSubmitComponent sauna={sauna} index={index} handleDeleteSauna={handleDeleteSauna} setSaunas={setSaunas}/>
                                    )
                                })}
                            </div>
                            
                            <div className="col-6">
                                <div className="row">
                                    <label htmlFor="" className="col-6">水風呂</label>
                                    <div className="col-6 text-end">
                                        <Button onClick={handleAddWaterBath}>
                                            水風呂を追加
                                        </Button>
                                    </div>
                                </div>
                                {waterBaths.map((waterBath, index) => {
                                    return(
                                        <WaterBathSubmitComponent waterBath={waterBath} index={index} handleDeleteWaterBath={handleDeleteWaterBath} setWaterBaths={setWaterBaths}/>
                                    )
                                })}
                            </div>
                        </div>
                        <TermsCheckBox terms={terms} setTerms={setTerms}/>
                        <Button type="submit" variant="primary" className="submit-btn my-3">
                            保存する
                        </Button>
                    </Form>
                </div>
            </div>
        </Fragment>
    )
}