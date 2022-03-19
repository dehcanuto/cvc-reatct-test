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
    const [hotelsFilter, setHotelsFilter] = useState<Hotel[]>([]);
    const [filters, setFilters] = useState<number[]>([]);
    const [load, setLoad] = useState<boolean>(false);

    useEffect(() => {
        setCityName(cities?.find(city => city.cityCode === Number(cityID))?.cityName);
        const filter = () => {
            setHotelsFilter(hotels);
            // Filtros por maximo de valor.
            (hotelsFilter.length && filters[0]) && setHotelsFilter(hotels.filter(({ rooms }) => rooms.some(({ price }) => price.adult <= filters[0])));
            (hotelsFilter.length && filters[1]) && setHotelsFilter(hotels.filter(({ rooms }) => rooms.some(({ price }) => price.child <= filters[1])));
        }
        const init = async () => {
            setLoad(true);
            // Primeira busca para guardar de backup para os filtros.
            (!filters[0] && !filters[1]) ? setHotels(await getAllData(cityID)) : filter();
            setLoad(false);
        }
        init();
    }, [cityID, filters]);

    return (
        <>
            <Header
                getCity={(e: number) => setCityID(e)}
                getLimit={(limit: number[]) => setFilters(limit)}
            />
            <section className="container mx-auto pt-14">
                <h2 className="text-3xl font-bold my-8">
                    Resultados para:
                    <span className="text-blue-400 ml-3">
                        {cityName}
                    </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center justify-center">
                    { load ? <LoadCard /> : !hotelsFilter.length && <p className="text-lg text-gray-400">Sem resultados.</p>}
                    { hotelsFilter && hotelsFilter?.map((item: Hotel) => <Card data={item}/>) }
                </div>
            </section>
        </>
    );
}

export default HomePage;