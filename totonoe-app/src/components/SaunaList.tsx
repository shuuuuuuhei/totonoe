import React, { Component, Fragment } from 'react'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { BsHeart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { StrConvertStrTime } from '../common/Convert'

type FacilityListProps = {
    facilities: Facility[]
}
export const FacilityList = (props: FacilityListProps) => {
    return(
        <Fragment>
            {props.facilities.map((facility) => {
                return(
                    <div className="facility py-4">
                        <div className="row facility-top">
                            <div className="col-10 facility-name">
                                <Link to={'/saunas/'+facility.id}><h3>{facility.name}</h3></Link>
                            </div>
                            <div className="facility-action col-2 row">
                                <HiOutlinePencilAlt size={40} className="col-6"/>
                                <BsHeart size={35} className="col-6"/>
                            </div>
                            <p className="facility-address">{facility.address}</p>
                            <div className="row">
                                <p className="col-2">入浴料：{facility.price}円</p>
                                <p className="col-2">営業：{StrConvertStrTime(facility.eigyo_start)}~{StrConvertStrTime(facility.eigyo_end)}</p>
                            </div>
                        </div>
                    </div>
                )
            })}

        </Fragment>
    )
}