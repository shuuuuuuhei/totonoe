import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import React, { Fragment, useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FacilityMapInfo } from '../@types/sauna/Facility';
import { ConvertErrorCodeToErrorMessage, ConvertErrorMessageToErrorPageProps, UndefinedConvertToZero, UndefinedOrNullConvertToEmpty } from '../common/Convert';
import "../style/Map.css";
import { Button } from "@mui/material";
import { Libraries } from "../utils/constants";
import LoadingButton from "@mui/lab/LoadingButton";
import { ErrorPageProps } from "../@types/ErrorPage";
import { IsNullOrUndefinedOrEmpty } from "../common/Check";

type Position = {
    latlng_literal: google.maps.LatLngLiteral,
    name: string | undefined,
    showInfoWindow: boolean,
}

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
    const navigate = useNavigate();
    /**
     * 検索したエリアの経度緯度
    */
    const [currentLocation, setCurrentLocation] = useState<google.maps.LatLngLiteral>();

    /**
     * マップ状態管理
     */
    const [mapState, setMap] = useState(null);

    /**
     * 初期ロード管理
     */
    const [isInitialLoaded, setIsInitialLoaded] = useState(false);

    /**
     * マップロード管理
     */
    const [mapLoad, setMapLoad] = useState(false);

    /**
     * @param map 
     * 経度緯度情報からマップをLoadする
     */
    const onMapLoad = useCallback((map: google.maps.Map) => {

        // エリアパラメータが入力されていない場合はエラーページに遷移する
        if (IsNullOrUndefinedOrEmpty(areaParams)) {
            // 404エラーページへ遷移する
            const errorInfo: ErrorPageProps = ConvertErrorCodeToErrorMessage(404);
            navigate('/error', { state: errorInfo });
            return;
        };
        setMapLoad(true);
        // 初回ロード
        if (!isInitialLoaded) {

            const geocoding = new google.maps.Geocoder();

            /** 指定された地名から経度緯度情報を取得する */
            geocoding.geocode({ address: areaParams }, (results, status) => {
                if (status === 'OK' && results) {
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

                    setMapStyle(map);
                    setIsInitialLoaded(true);
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            })
        } else {
            // ２回目以降ロード
            const lat = currentLocation.lat;
            const lng = currentLocation.lng;

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

            console.log(request);

            const service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
        }

        /** infoWindowをバルーン上に表示するように設定する。マップ生成後(Load後)に設定しないとエラーが発生するためここに書く。 */
        setInfoStyle(new google.maps.Size(0, -45));

        setMap(map);
        setTimeout(() => setMapLoad(false), 3000);
    }, [currentLocation, mapState])

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
                        // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                        const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                        navigate('/error', { state: errorInfo });
                        return;
                    }
                    return response.json();
                })
                .then((resData) => {
                    setFacilityMapInfoList(resData)
                })
                .catch(err => {
                    // エラーメッセージを受け取りエラーページの引数を設定する
                    const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                    navigate('/error', { state: errorInfo });
                    return;
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
        const featureStyleInMap: google.maps.MapTypeStyle[] = [
            {
                "featureType": "all",
                "stylers": [],
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

        return {
            color: "white",
            fontFamily: "sans-serif",
            fontSize: "15px",
            fontWeight: "100",
            text: UndefinedConvertToZero(facilityMapInfoList[searchLocationIndex].article_count).toString(),
        }
    };

    /**
     * 初回マップ表示位置から移動時に再検索ボタンを表示する
     */
    const indicateMapChangeButton = (e: google.maps.MapMouseEvent) => {
        setCurrentLocation({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        })
    }

    const handleChangeMap = () => {
        onMapLoad(mapState);
    }

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
                            <LoadingButton loading={mapLoad} onClick={handleChangeMap} style={{ position: "absolute", top: "55%", left: "58%", zIndex: 1000, backgroundColor: "white" }} >
                                このエリアで再検索
                            </LoadingButton>
                            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API} libraries={libraries} id='googleMap'>
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={currentLocation}
                                    zoom={12}
                                    options={{
                                        streetViewControl: false,
                                        mapTypeControl: false,
                                        fullscreenControl: false,
                                    }}
                                    onLoad={onMapLoad}
                                    onMouseDown={indicateMapChangeButton}
                                >
                                    {facilityMapInfoList?.map((facility, index) => {
                                        return (
                                            <>
                                                <Marker position={{ lat: facility.latitude, lng: facility.longitude }} label={markerStyle(index)} onClick={() => handleToShowedInfoWindow(index)} />
                                                {facility.showInfoWindow && infoStyle && <InfoWindow position={{ lat: facility.latitude, lng: facility.longitude }} options={{ pixelOffset: infoStyle }}>
                                                    <div>
                                                        <p style={{ fontSize: "18px", fontWeight: 800 }}>{facility.name}</p>
                                                        {facility.id ? <Link to={`/saunas/${facility.id}`}><Button>施設情報を確認する</Button></Link>
                                                            :
                                                            <>
                                                                <p>施設情報なし</p>
                                                                <Link
                                                                    to={`/saunas/new`}
                                                                    state={{ map_name: facility.name, map_lat: facility.latitude, map_lng: facility.longitude }}
                                                                ><Button>施設を登録する</Button></Link>
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