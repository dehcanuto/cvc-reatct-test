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
    const [load, setLoad] = useState<boolean>(true);

    // Funciona apenas para disparar quando o `cityID` muda.
    useEffect(() => {
        setLoad(true);
        setCityName(cities?.find(city => city.cityCode === Number(cityID))?.cityName);
        const init = async () => {
            let results = await getAllData(cityID);
            setHotels(await results);
            setHotelsFilter(await results);
        }
        init()
            .then(() => {setLoad(false)})
            .catch(console.error);
    }, [cityID]);

    // Separei para não interferir nas buscas na api e usar apenas dados já guardados no estado.
    useEffect(() => {
        setLoad(true);
        const filter = async () => {
            let result = hotels;
            // Filtros por maximo de valor.
            setHotelsFilter(
                result.filter(({ rooms }) =>
                    rooms.some(({ price }) =>
                        price.adult <= (filters[0] ?? 9999) &&
                        price.child <= (filters[1] ?? 9999)
                    )
                )
            );
        }
        filter()
            .then(() => {setLoad(false)})
            .catch(console.error);
    }, [filters]);

    console.log('load', load);

    return (
        <>
            <Header
                getCity={(e: number) => setCityID(e)}
                getLimit={(limit: number[]) => setFilters(limit)}
            />
            <section className="container mx-auto pt-14">
                <h2 className="text-center text-xl sm:text-left sm:text-3xl font-bold my-8">
                    Resultados para:
                    <span className="text-blue-400 ml-3">
                        {cityName}
                    </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center justify-center">
                    { load ? <LoadCard /> : !hotelsFilter.length && <p className="text-lg text-gray-400">Sem resultados.</p> }
                    { hotelsFilter && hotelsFilter?.map((item: Hotel, index) => <Card key={index} data={item}/>) }
                </div>
            </section>
        </>
    );
}

export default HomePage;