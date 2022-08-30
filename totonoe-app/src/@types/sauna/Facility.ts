type Facility = {
    id: string
    name: string
    address: string
    price: number
    eigyo_start: string,
    eigyo_end: string,
    access: string,
    tel: string,
    restaurant_flg: string,
    lodging_flg: string,
    workingspace_flg: string,
    books_flg: string,
    heatwave_flg: string,
    airbath_flg: string,
    breakspace_flg: string,
    waterserver_flg: string,
    saunas: Sauna[],
    waterbaths: WaterBath[],
    amenities: Amenity[],
}

type NewFacility = {
    id: string,
    name: string,
    price: number,
    address: {
        prefecture_id: number,
        city_id: number,
        street: string,
    },
    eigyo_start: string,
    eigyo_end: string,
    access: string,
    tel: string,
    restaurant_flg: string,
    lodging_flg: string,
    workingspace_flg: string,
    books_flg: string,
    heatwave_flg: string,
    airbath_flg: string,
    breakspace_flg: string,
    waterserver_flg: string,
    saunas: NewSauna[],
    waterbaths: WaterBath[],
    amenities: Amenity[],
}