import React, { Component, Fragment, useState } from 'react'
import { GoogleMap, LoadScript, StandaloneSearchBox, Marker, InfoWindow } from "@react-google-maps/api";

import "../style/Map.css"
type Position = {
    latlng_literal: google.maps.LatLngLiteral,
    name: string|undefined,
}
type Libraries = ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];

const defaultLocation: Position = { name: "", latlng_literal: {lat: 35.69575,lng: 139.77521,},};
const defaultZoom = 10;
const containerStyle = {
    width: "auto",
    height: "800px",
};

// const infoWindowOptions = {
//     pixelOffset: new window.google.maps.Size(0, -45),
// };

export const MapComponent = () => {

    const [ libraries ] = useState<Libraries>(['places'])
    
    const [map, setMap] = useState<GoogleMap|null>();
    const [query, setQuery] = useState<google.maps.places.SearchBox>();
    const [locations, setLocation] = useState<Position[]>([defaultLocation]);
    
    const onLoad = (ref: google.maps.places.SearchBox) => setQuery(ref);
    const [facilities, setFacilities] = useState<FacilityMapInfo[]>();
    const onPlacesChanged = () => {
        // 検索Boxから候補地を取得
        const places = query?.getPlaces();
        const newPositionList: Position[] = []

        places?.map((place, index) => {
            const lat = place.geometry?.location?.lat;
            const lng = place.geometry?.location?.lng;

            if(!lat || !lng) {return}
      
            const position: Position = { 
                latlng_literal: {lat: lat(),lng: lng(),}, 
                name: place.name,
            };

            newPositionList.push(position)
        })

        console.log(newPositionList)

        const fetchGetFacilitiesByMapInfo = async() => {
            const uri = "http://localhost:4000/facilities/map_infomation";

            const requestOption: RequestInit = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    map_info_list: newPositionList,
                })
            };
            await fetch(uri, requestOption)
                .then((response) => {
                    if (!response.ok) {
                        const err = new Error;
                        err.message = "施設情報の取得に失敗しました" + response.status;
                        throw err;
                    }
                    return response.json();
                })
                .then((resData) => {
                    setFacilities(resData)
                })
            .catch(err => {
                console.log(err)
            });
        }

        setLocation(newPositionList)
        fetchGetFacilitiesByMapInfo();
    }
    console.log(facilities)

    return(
        <Fragment>
            <div className="container text-center">
                <div className="row border-bottom">
                    {facilities?.length}件表示
                </div>
                <div className="row py-3">
                    <div className="col-3 facility-list overflow-auto border py-4" style={containerStyle}>
                        <h5 className="border-bottom">サウナ一覧</h5>
                        {facilities?.map((facility, index) => {
                            return(
                                <div className="row text-start border-bottom py-2 search-facility">
                                    <p>{facility.name}</p>
                                </div>
                            )
                        })}
                    </div>
                    {process.env.REACT_APP_GOOGLE_MAP_API?
                        <div className="google-map col-8">
                            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API} libraries={libraries} >
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={locations[0].latlng_literal}
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
                                                <Marker position={location.latlng_literal}/>
                                                <InfoWindow position={location.latlng_literal}>
                                                <div>
                                                        <p>{location.name}</p>
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
            </div>
        </Fragment>
    )
}