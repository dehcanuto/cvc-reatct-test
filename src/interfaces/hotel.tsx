interface Price {
    adult: number,
    child: number
}

export interface Rooms {
    roomID: number,
    categoryName: string,
    price: Price
}

export interface Hotel {
    id: number,
    name: string,
    cityCode: number,
    cityName: string,
    rooms: Rooms[]
}