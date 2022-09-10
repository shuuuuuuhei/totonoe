type Facility = {
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
    saunas: Sauna[],
    water_baths: WaterBath[],
    amenities: Amenity[],
}

type NewFacility = {
    id: string,
    name: string,
    price: number,
    address: {
        prefecture_id: number,
        city_id: number,
        street_name: string,
    },
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

type FacilityMapInfo = {
    id: string,
    name: string,
    price: number,
    address: {
        prefecture_id: number,
        city_id: number,
        street_name: string,
    },
    
    articleCounts: number,
}