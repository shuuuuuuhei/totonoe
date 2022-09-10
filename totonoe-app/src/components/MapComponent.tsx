import React, { Component, Fragment, useState } from 'react'
import { GoogleMap, LoadScript, StandaloneSearchBox, Marker, InfoWindow } from "@react-google-maps/api";

import * as dotenv from 'dotenv' 

type Position = {
    latlngLiteral: google.maps.LatLngLiteral,
    placeName: string|undefined,
}
type Libraries = ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];

const defaultLocation = { latlngLiteral: {lat: 35.69575,lng: 139.77521,}, placeName:""};
const defaultZoom = 10;
const infoWindowOptions = {
    pixelOffset: new window.google.maps.Size(0, -45),
};

export const MapComponent = () => {
    const [placeState, setplaceState] = useState({
        currentLocation: { lat: 0, lng: 0 },
        markers: [],
        bounds: null
    });
    const [ libraries ] = useState<Libraries>(['places'])
    
    const [map, setMap] = useState<GoogleMap|null>();
    const [query, setQuery] = useState<google.maps.places.SearchBox>();
    const [locations, setLocation] = useState<Position[]>([defaultLocation]);
    const [ facilityList, setFacilityList ] = useState<FacilityMapInfo>();

    const containerStyle = {
        width: "auto",
        height: "800px",
    };
    
    const onLoad = (ref: google.maps.places.SearchBox) => setQuery(ref);
    
    const onPlacesChanged = () => {
        // 検索Boxから候補地を取得
        const places = query?.getPlaces();
        const newPositionList: Position[] = []

        places?.map((place, index) => {
            const lat = place.geometry?.location?.lat;
            const lng = place.geometry?.location?.lng;

            if(!lat || !lng) {return}
      
            const position = {
                latlngLiteral: {lat: lat(),lng: lng(),}, 
                placeName:place.name,
            };

            newPositionList.push(position)
        })
        setLocation(newPositionList)
        
    }

    return(
        <Fragment>
            <div className="row container">
                <div className="col-4 facility-list">
                    
                </div>
                {process.env.REACT_APP_GOOGLE_MAP_API?
                    <div google-map>
                        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API} libraries={libraries} >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={locations[0].latlngLiteral}
                                zoom={10}
                                options={{
                                    streetViewControl: false,
                                    mapTypeControl: false,
                                    fullscreenControl: false,
                                }}
                            >
                                <div id="searchbox">
                                    <StandaloneSearchBox
                                        onLoad={onLoad}
                                        onPlacesChanged={onPlacesChanged}
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
                                {locations.map((location, index) => {
                                    return(
                                        <>
                                            <Marker position={location.latlngLiteral}/>
                                            <InfoWindow position={location.latlngLiteral} options={infoWindowOptions}>
                                            <div>
                                                    <p>{location.placeName}</p>
                                                    <p>サウナ情報あり</p>
                                            </div>
                                            </InfoWindow>
                                        </>
                                    )
                                })}
                                <br />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                :
                    <>マップ情報なし</>
                }
            </div>
        </Fragment>
    )
}