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
    waterbaths: Waterbath[],
    amenities: Amenity[],
}