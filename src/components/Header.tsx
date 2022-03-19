import React, { useState, useEffect } from 'react';
import { City } from '../interfaces/city';
import { cities } from '../utils/city';
import InputDefault from './Input';

const Header: React.FC<{getCity:Function, getLimit:Function}> = ({getCity, getLimit}) => {
    const [maxAdult, setMaxAdult] = useState<number>();
    const [maxChild, setMaxChild] = useState<number>();

    useEffect(() => {
        console.log('maxAdult / child', maxAdult +'/'+maxAdult);
        getLimit([maxAdult, maxChild]);
    }, [maxAdult, maxChild]);

    return (
        <div className="flex justify-center items-center pt-12 bg-gradient-to-r from-secondary to-blue-500">
            <div className="container mx-auto">
                <div className="flex-1 justify-center items-center">
                    <div className="d-flex mx-auto text-white text-center">
                        <img className="d-flex w-32 mx-auto mb-4" src="assets/image/cvc-logo.png" alt="CVC Logo"/>
                        <h1 className="font-bold text-white text-4xl">
                            Escolha a cidade para a <span className="text-primary">viagem dos seus sonhos</span>
                        </h1>
                    </div>
                    <div className="max-w-xl bg-white shadow-lg rounded-lg py-4 px-3 mx-auto mt-8 -mb-5">
                        <div className="flex justify-between px-2 space-x-2 rounded-lg">
                            <select
                                defaultValue={cities[0].cityCode}
                                className="flex-auto text-base text-gray-800 outline-none border-2 border-b-4 border-gray-200 rounded-xl px-4 py-2"
                                onChange={(e) => getCity(e.target.value)}
                            >
                                {cities.map((item: City) => <option value={item.cityCode}>{item.cityName}</option>)}
                            </select>
                            <button className="rounded-2xl border-b-4 border-b-primary-500 bg-secondary py-3 px-8 font-bold text-white">
                                Buscar
                            </button>
                        </div>
                        <div className="flex justify-between px-2 space-x-2 rounded-lg mt-3">
                            <span className="font-bold text-xs my-auto">Valor máximo:</span>
                            <InputDefault label="Adulto" value={maxAdult} change={(e: number) => setMaxAdult(e)} />
                            <InputDefault label="Criança" value={maxChild} change={(e: number) => setMaxChild(e)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;