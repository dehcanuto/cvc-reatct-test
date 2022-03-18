import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card, { LoadCard } from '../components/Card';
import { Hotel } from '../interfaces/hotel';
import { cities } from '../utils/city';
import { getAllData } from '../lib/Hotels';

const HomePage: React.FC = () => {
    const [cityID, setCityID] = useState<number>(cities[0].cityCode);
    const [cityName, setCityName] = useState<String>();
    const [hotels, setHotels] = useState<Hotel[]>([]);

    useEffect(() => {
        setCityName(cities?.find(city => city.cityCode === Number(cityID))?.cityName);
        setHotels([]);
        const init = async () => setHotels(await getAllData(cityID));
        init();
        console.log('hotels', hotels);
    }, [cityID]);

    return (
        <>
            <Header getCity={(e: number) => setCityID(e)} />
            <section className="container mx-auto pt-14">
                <h2 className="text-3xl font-bold mb-5">Resultados para:
                    <span className="text-blue-400 ml-3">
                        {cityName}
                    </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center justify-center">
                    { hotels.length ? hotels?.map((item: Hotel) => <Card data={item}/>) : <LoadCard /> }
                </div>
            </section>
        </>
    );
}

export default HomePage;