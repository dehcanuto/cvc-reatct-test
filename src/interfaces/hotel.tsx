interface Price {
    adult: number,
    child: number
}

interface Rooms {
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