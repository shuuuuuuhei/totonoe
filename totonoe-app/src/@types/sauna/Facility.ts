import { Amenity } from "./Amenity"
import { NewSauna, Sauna } from "./Sauna"
import { WaterBath } from "./Waterbath"

export type Facility = {
    id: string
    name: string,
    address: string,
    price: number,
    eigyo_start: string | undefined,
    eigyo_end: string | undefined,
    access: string | undefined,
    tel: string | undefined,
    restaurant_flg: string,
    lodging_flg: string,
    working_space_flg: string,
    books_flg: string,
    heat_wave_flg: string,
    air_bath_flg: string,
    break_space_flg: string,
    water_server_flg: string,
    latitude: number,
    longitude: number,
    saunas: Sauna[],
    water_baths: WaterBath[],
    amenities: Amenity[],
    full_count: number,
}

export type Address = {
    prefecture_id: number,
    city_id: number,
    city_name: string,
    street_name: string,
    latitude: number;
    longitude: number;
}
export type NewFacility = {
    id: string,
    name: string,
    price: number,
    address: Address,
    eigyo_start: string,
    eigyo_end: string,
    access: string,
    tel: string,
    restaurant_flg: string,
    lodging_flg: string,
    working_space_flg: string,
    books_flg: string,
    heat_wave_flg: string,
    air_bath_flg: string,
    break_space_flg: string,
    water_server_flg: string,
    saunas: NewSauna[],
    water_baths: WaterBath[],
    amenities: Amenity[],
}
export type FacilityMapInfo = {
    id: string,
    name: string,
    price: number,
    address: {
        prefecture_id: number,
        city_id: number,
        street_name: string,
    },
    article_count: number,
    location_index: number,
    latitude: number;
    longitude: number;
    showInfoWindow: boolean,
}

export type City = {
    id: number,
    name: string,
}