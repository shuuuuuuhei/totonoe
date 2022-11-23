import React, { Component, Fragment, useContext } from 'react'
import { AddressState } from './Facility/FacilitySubmitComponent';
import { prefectureList } from '../utils/constants';
import { TextField } from '@mui/material';

export const AddressTextBox = () => {
    const { address, setAddress } = useContext(AddressState);
    const fullAddressStr = () => {
        return prefectureList[address.prefecture_id] + address.city_name + address.street_name;
    }

    return (
        <Fragment>
            <div className="row px-4">
                <p className="px-4 py-3 border">
                    {fullAddressStr()}
                </p>
            </div>
        </Fragment>
    )
}