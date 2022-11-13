import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FacilityMapInfo } from '../@types/sauna/Facility';
import { UndefinedConvertToZero, UndefinedOrNullConvertToEmpty } from '../common/Convert';
import "../style/Map.css";
import { Button } from "@mui/material";


type Position = {
    latlng_literal: google.maps.LatLngLiteral,
    name: string | undefined,
    showInfoWindow: boolean,
}

type Libraries = ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];

const defaultZoom = 10;
const containerStyle = {
    height: "800px",
};


export const MapComponent = () => {

    const [libraries] = useState<Libraries>(['places'])
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const areaParams = UndefinedOrNullConvertToEmpty(queryParams.get("area"));
    const [facilityMapInfoList, setFacilityMapInfoList] = useState<FacilityMapInfo[]>();
    const [infoStyle, setInfoStyle] = useState<google.maps.Size>();
    /**
     * 検索したエリアの経度緯度
    */
    const [currentLocation, setCurrentLocation] = useState<google.maps.LatLngLiteral>();

    const mapRef = useRef(null);

    const [isIndicatedResearchMapButton, setIsIndicatedResearchMapButton] = useState(false);

    /**
     * @param map 
     * 指定された地名から緯度経度情報を取得して周辺のサウナ地域の情報をマップにLoadする
     */
    const onMapLoad = (map: google.maps.Map) => {

        const geocoding = new google.maps.Geocoder();

        /** 指定された地名から経度緯度情報を取得する */
        geocoding.geocode({ address: areaParams }, (results, status) => {
            if (status === 'OK' && results) {
                console.log(results[0].geometry.location.lat())
                const lat = results[0].geometry.location.lat();
                const lng = results[0].geometry.location.lng();

                setCurrentLocation({
                    lat: lat,
                    lng: lng,
                });

                /** 取得した経度緯度情報から距離を指定してサウナ施設情報を取得するリクエストを生成する */
                const request: google.maps.places.TextSearchRequest = {
                    location: { lat: lat, lng: lng },
                    query: 'サウナ',
                    radius: 5000
                };

                const service = new google.maps.places.PlacesService(map);
                service.textSearch(request, callback);

                setMapStyle(map)
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        })

        /** infoWindowをバルーン上に表示するように設定する。マップ生成後(Load後)に設定しないとエラーが発生するためここに書く。 */
        setInfoStyle(new google.maps.Size(0, -45));
    }

    /**
     * 
     * @param placeList 
     * 緯度経度情報から登録されているサウナ施設情報を取得する
     */
    const getFacilitiesInfo = (placeList: Position[]) => {

        const fetchGetFacilitiesByMapInfo = async () => {
            const uri = "http://localhost:4000/facilities/map_infomation";

            const requestOption: RequestInit = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    map_info_list: placeList,
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
                    console.log(resData)
                    setFacilityMapInfoList(resData)
                })
                .catch(err => {
                    console.log(err)
                });
        }

        fetchGetFacilitiesByMapInfo();
    }

    /**
     * 
     * @param map googleMaps
     * 地図上の施設や自然物の設定を行う
     */
    const setMapStyle = (map: google.maps.Map) => {
        /* 地図上の施設や自然物ごとの設定を行う */
        const featureStyleInMap = [
            {
                "featureType": "all",
                "stylers": "",
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    { "color": "#DDDDDD" }
                ]
            },
        ]

        const mapStyle = new google.maps.StyledMapType(featureStyleInMap)
        map.mapTypes.set('style', mapStyle)
        map.setMapTypeId('style')
    }

    /**
     * @param results 検索結果
     * @param status 検索状態
     * マップ検索のコールバック関数
     * 検索結果をlocationに格納する
     */
    const callback = (results: google.maps.places.PlaceResult[] | null, status: google.maps.places.PlacesServiceStatus) => {
        const newLocationList: Position[] = [];
        if (status == google.maps.places.PlacesServiceStatus.OK && results !== null) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                console.log(results[i])

                if (!place.geometry?.location?.toJSON()) {
                    break
                }
                newLocationList.push({
                    latlng_literal: place.geometry?.location?.toJSON(),
                    name: place.name,
                    showInfoWindow: false,
                })
            }
        }
        console.log(newLocationList)

        /**取得した緯度経度情報から施設情報を取得(まだ試行なし) */
        getFacilitiesInfo(newLocationList);
    }

    /**
     * @param toShowInfoWindowIndex infoWindowをisShowedにするlocationListのインデックス
     * 該当のinfoWindowをisShowにする
     */
    const handleToShowedInfoWindow = (toShowInfoWindowIndex: number) => {
        setFacilityMapInfoList(
            facilityMapInfoList?.map((facility, index) => (index === toShowInfoWindowIndex ? { ...facility, showInfoWindow: true } : { ...facility, showInfoWindow: false, }))
        )
    }

    /**
     * @param toNotShowInfoWindowIndex infoWindowをisNotShowedにするlocationListのインデックス
     * SearchLocationListの離マウスホバー時に該当のinfoWindowをisShowにする
     */
    const handleToNotShowedInfoWindow = (toNotShowInfoWindowIndex: number) => {
        setFacilityMapInfoList(
            facilityMapInfoList?.map((facility, index) => (index === toNotShowInfoWindowIndex ? { ...facility, showInfoWindow: false } : { ...facility }))
        )
    }

    const markerStyle = (searchLocationIndex: number) => {

        const facility = facilityMapInfoList?.find((f) => (f.location_index === searchLocationIndex))
        return {
            color: "white",
            fontFamily: "sans-serif",
            fontSize: "15px",
            fontWeight: "100",
            text: UndefinedConvertToZero(facility?.article_count).toString(),
        }
    };

    /**
     * 初回マップ移動時に再検索ボタンを表示する
     */
    const indicateMapChangeButton = (e: google.maps.MapMouseEvent) => {
        // if (!isIndicatedResearchMapButton) {
        //     setIsIndicatedResearchMapButton(true);
        // }
        setCurrentLocation({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        })
    }

    const handleChangeMap = () => {
        // if (mapRef.current) {
        //     const mapBounds = new window.google.maps.LatLngBounds(currentLocation);
        //     mapRef.current.map_.fitBounds(mapBounds);
        // }

        const maps = document.getElementById('googleMap')
        console.log(maps);
    }

    console.log(currentLocation)


    return (
        <Fragment>
            {/* <button onClick={fetchMap}>click here!</button> */}
            <div className="container text-center py-5">
                <div className="row border-bottom text-start">
                    <h5 className="py-2">{areaParams}の周辺にあるサウナ</h5>
                </div>
                <div className="row py-3">
                    <div className="facility-list overflow-auto border py-4 col-4" style={containerStyle}>
                        <h5 className="border-bottom py-2">サウナ一覧({facilityMapInfoList?.length}件)</h5>
                        {facilityMapInfoList?.map((facility, index) => {
                            return (
                                <div className="row text-start border-bottom py-2 search-facility" onMouseEnter={() => handleToShowedInfoWindow(index)} onMouseLeave={() => handleToNotShowedInfoWindow(index)}>
                                    <p className="m-0">{facility.name}</p>
                                    {facility.id ?
                                        <Link to={`/saunas/${facility.id}`}><p>施設情報を確認する</p></Link>
                                        :
                                        <div className="row">
                                            <div className="col-6">
                                                施設情報なし
                                                </div>
                                        </div>
                                    }
                                </div>
                            )
                        })}
                    </div>
                    {process.env.REACT_APP_GOOGLE_MAP_API ?
                        <div className="google-map col-8">
                            <Button onClick={handleChangeMap}>再検索</Button>
                            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API} libraries={libraries} id='googleMap'>
                                <GoogleMap
                                    ref={mapRef}
                                    mapContainerStyle={containerStyle}
                                    center={currentLocation}
                                    zoom={12}
                                    options={{
                                        streetViewControl: false,
                                        mapTypeControl: false,
                                        fullscreenControl: false,
                                    }}
                                    onLoad={map => onMapLoad(map)}
                                    id="map"
                                    onMouseDown={indicateMapChangeButton}
                                >
                                    {facilityMapInfoList?.map((facility, index) => {
                                        return (
                                            <>
                                                <Marker position={{ lat: facility.latitude, lng: facility.longitude }} label={markerStyle(index)} onClick={() => handleToShowedInfoWindow(index)} />
                                                {facility.showInfoWindow && infoStyle && <InfoWindow position={{ lat: facility.latitude, lng: facility.longitude }} options={{ pixelOffset: infoStyle }}>
                                                    <div>
                                                        <p>{facility.name}</p>
                                                        {facility.id ? <Link to={`/saunas/${facility.id}`}><p>施設情報を確認する</p></Link>
                                                            :
                                                            <>
                                                                <p>施設情報なし</p>
                                                                <Link
                                                                    to={`/saunas/new`}
                                                                    state={{ map_name: facility.name, map_lat: facility.latitude, map_lng: facility.longitude }}
                                                                >施設を登録する</Link>
                                                            </>
                                                        }
                                                    </div>
                                                </InfoWindow>
                                                }
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