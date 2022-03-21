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

    // Separei para não interferir nas buscas na api e usar apenas dados já guardados no estado.
    useEffect(() => {
        // Para o filtro caso não hajam resultados de hoteis.
        if (!hotels.length) return;
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
            .then(() => setLoad(false))
            .catch(console.error);
    }, [filters]);

    // Funciona apenas para disparar quando o `cityID` muda.
    useEffect(() => {
        setLoad(true);
        setCityName(cities?.find(city => city.cityCode === Number(cityID))?.cityName);
        const init = async () => {
            setHotelsFilter([]);
            let results = await getAllData(cityID);
            setHotels(await results);
            setHotelsFilter(await results);
        }
        init()
            .then(() => setLoad(false))
            .catch(console.error);
    }, [cityID]);

    return (
        <>
            <Header
                getCity={(e: number) => setCityID(e)}
                getLimit={(limit: number[]) => setFilters(limit)}
            />
            <section className="container mx-auto pt-14 pb-5">
                <div className="text-center sm:text-left my-8">
                    <h2 className="text-xl sm:text-3xl font-bold">
                        Resultados para:
                        <span className="text-blue-400 ml-3">
                            {cityName}
                        </span>
                    </h2>
                    { hotelsFilter.length > 0 && <h3 className="text-gray-400 mt-3">Encontramos {hotelsFilter.length} Resultados.</h3>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center justify-center">
                    { load ? <LoadCard /> : !hotelsFilter.length && <p className="text-lg text-center sm:text-left text-gray-400">Sem resultados.</p> }
                    { hotelsFilter && hotelsFilter?.map((item: Hotel, index) => <Card key={index} data={item}/>) }
                </div>
            </section>
        </>
    );
}

export default HomePage;