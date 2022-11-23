import React, { Component, Fragment, useState } from 'react'
import { IsNullOrUndefinedOrEmpty } from '../common/Check';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { Libraries } from '../utils/constants';

type FacilityMapComponentProps = {
    lat: number,
    lng: number,
}

const markerStyle = () => {
    return {
        color: "white",
        fontFamily: "sans-serif",
        fontSize: "15px",
        fontWeight: "100",
        text: '',
    }
};

export const FacilityMapComponent = (props: FacilityMapComponentProps) => {

    console.log("経度", props.lat, props.lng);

    const currentLocation: google.maps.LatLngLiteral = { lat: props.lat, lng: props.lng }
    const [libraries] = useState<Libraries>(['places'])
    const containerStyle = {
        height: "150px",
    };

    if (IsNullOrUndefinedOrEmpty(props.lat) || IsNullOrUndefinedOrEmpty(props.lng)) {
        return (
            <Fragment>
                マップ情報が登録されていません
            </Fragment>
        )
    }
    return (
        <Fragment>

            {process.env.REACT_APP_GOOGLE_MAP_API ?
                <div className="google-map">
                    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API} libraries={libraries} id='googleMap'>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={currentLocation}
                            zoom={10}
                            options={{
                                streetViewControl: false,
                                mapTypeControl: false,
                                fullscreenControl: false,
                            }}
                            // onLoad={map => onMapLoad(map)}
                            id="map"
                        // onMouseDown={indicateMapChangeButton}
                        >
                            return (
                                <Marker position={currentLocation} />
                                )
                            <br />
                        </GoogleMap>
                    </LoadScript>
                </div>
                :
                <>マップ情報なし</>
            }
        </Fragment>
    )
}