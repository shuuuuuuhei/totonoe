import React, { Component, Fragment, useState } from 'react'
import { GoogleMap, LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

import * as dotenv from 'dotenv' 

export const MapComponent = () => {
    const [placeState, setplaceState] = useState({
        currentLocation: { lat: 0, lng: 0 },
        markers: [],
        bounds: null
    });

    const containerStyle = {
        width: "400px",
        height: "400px",
      };
      
    const center = {
        lat: 35.69575,
        lng: 139.77521,
    };
    
    const onLoad = () => {
    
    }
    
    const onSBLoad = () => {
    
    }
    
    const onPlacesChanged = () => {
    
    }
    const NEW_ZEALAND_BOUNDS = {
        north: -34.36,
        south: -47.35,
        west: 166.28,
        east: -175.81,
    };
    
    return(
        <Fragment>
            <div>
                <div id="searchbox">
                    <StandaloneSearchBox
                        onLoad={onSBLoad}
                        onPlacesChanged={onPlacesChanged}
                        bounds={NEW_ZEALAND_BOUNDS}
                    >
                    <input
                    type="text"
                    placeholder="Customized your placeholder"
                    style={{
                        boxSizing: `border-box`,
                        border: `1px solid transparent`,
                        width: `240px`,
                        height: `32px`,
                        padding: `0 12px`,
                        borderRadius: `3px`,
                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                        fontSize: `14px`,
                        outline: `none`,
                        textOverflow: `ellipses`,
                        position: "absolute",
                        left: "50%",
                        marginLeft: "-120px"
                    }}
                    />
                    </StandaloneSearchBox>
                </div>
                <br />
                {process.env.REACT_APP_GOOGLE_MAP_API?
                    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={17}
                        ></GoogleMap>
                    </LoadScript>
                :
                <>マップ情報なし</>
                }
            </div>
        </Fragment>
    )
}