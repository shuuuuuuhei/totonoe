type Facility = {
    id: string
    name: string
    address: string
    price: number
    eigyo_start: string,
    eigyo_end: string,
    access: string,
    tel: string,
    restaurant_kb: string,
    lodging_kb: string,
    workingspace_kb: string,
    books_kb: string,
    heatwave_kb: string,
    airbath_kb: string,
    breakspace_kb: string,
    waterserver_kb: string,
    saunas: Sauna[],
    waterbaths: WaterBath[],
    amenities: Amenity[],
}

type NewFacility = {
    id: string,
    name: string,
    price: number,
    prefecture_id: number,
    city_id: number,
    street: string,
    eigyo_start: string,
    eigyo_end: string,
    access: string,
    tel: string,
    restaurant_kb: string,
    lodging_kb: string,
    workingspace_kb: string,
    books_kb: string,
    heatwave_kb: string,
    airbath_kb: string,
    breakspace_kb: string,
    waterserver_kb: string,
    saunas: [],
    waterbaths: [],
    amenities: [],
}