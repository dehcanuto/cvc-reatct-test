import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card, { LoadCard } from '../components/Card';
import { Hotel } from '../interfaces/hotel';
import { getAllData } from '../lib/Hotels';

const HomePage: React.FC = () => {
    const [cityID, setCityID] = useState<number>(1032);
    const [hotels, setHotels] = useState<Hotel[]>([]);

    useEffect(() => {
        const init = async () => setHotels(await getAllData(cityID));
        init();
        console.log('hotels', hotels);
    }, [cityID]);

    return (
        <>
            <Header getCity={(e: number) => setCityID(e)} />
            <section className="container mx-auto pt-14">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center justify-center">
                    { hotels.length ? hotels?.map((item: Hotel) => <Card data={item}/>) : <LoadCard /> }
                </div>
            </section>
        </>
    );
}

export default HomePage;