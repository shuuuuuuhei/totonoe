import React, { Component, Fragment, useState } from 'react'
import { Input } from './form-components/Input'
import { InputScope } from './form-components/InputScope'
import { DropdownButton, Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import '../style/QuantityInput.css'
import { SelectAddress } from './form-components/SelectAdress'
export const FacilitySubmitComponent = () => {

    const [facility, setFacilityState] = useState<Facility>({
        id: "",
        name: "",
        address: "",
        price: 0,
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

    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFacilityState({
            ...facility, 
            [name]: value,
        });
         console.log(facility)
    } 

    const termsList = [
    "宿泊", "飯処", "コワーキングスペース", "外気浴", "読書", "給水機", "熱波師",
    ];


    return(
        <Fragment>
            <div className="container p-5">
                <div className="row py-5">
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
                    <SelectAddress />
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
                    <label htmlFor="">施設設備</label>
                    <div className="terms-options text-start row">
                        {termsList.map((terms, index) => {
                            return(
                                <div className="terms-option py-1 px-2 col-3">
                                    <input type="checkbox" className="form-check-input pl-2" value="" id={"formCheckDefault"+index.toString()}/>
                                    <label htmlFor={"formCheckDefault"+index.toString()} className="px-3 border-bottom">
                                        {terms}
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}