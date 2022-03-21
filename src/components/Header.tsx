import React, { useState, useEffect } from 'react';
import { City } from '../interfaces/city';
import { cities } from '../utils/city';
import InputDefault from './Input';

const Header: React.FC<{getCity:Function, getLimit:Function}> = ({getCity, getLimit}) => {
    const [maxAdult, setMaxAdult] = useState<number>();
    const [maxChild, setMaxChild] = useState<number>();

    useEffect(() => {
        getLimit([maxAdult, maxChild]);
    }, [maxAdult, maxChild]);

    return (
        <div className="flex justify-center items-center pt-12 bg-gradient-to-r from-secondary to-blue-500">
            <div className="container mx-auto">
                <div className="flex-1 justify-center items-center">
                    <div className="d-flex mx-auto text-white text-center">
                        <img className="w-24 sm:w-32 mx-auto mb-4" src="assets/image/cvc-logo.png" alt="CVC Logo"/>
                        <h1 className="font-bold text-white text-2xl sm:text-4xl">
                            Escolha a <span className="text-primary">viagem dos seus sonhos</span>
                        </h1>
                    </div>
                    <div className="max-w-xl bg-white shadow-lg rounded-lg py-4 px-3 mx-auto mt-8 -mb-12">
                        <div className="flex justify-between sm:px-2 space-x-2 rounded-lg">
                            <div className="relative flex-auto border-2 border-b-4 border-gray-200 rounded-xl px-4 py-2 pt-3">
                                <label className="absolute left-4 -top-2 text-xs font-bold bg-white px-2">Cidade</label>
                                <select
                                    defaultValue={cities[0].cityCode}
                                    onChange={(e) => getCity(e.target.value)}
                                    className="flex w-full focus:outline-none outline-none"
                                >
                                    {cities.map((item: City, index) => <option key={index} value={item.cityCode}>{item.cityName}</option>)}
                                </select>
                            </div>
                            <button className="rounded-2xl border-b-4 border-b-primary-500 bg-secondary py-3 px-8 font-bold text-white">
                                Buscar
                            </button>
                        </div>
                        <div className="flex-1 sm:flex justify-between space-y-4 sm:px-2 sm:space-x-2 space-y-0 rounded-lg mt-3">
                            <span className="flex font-bold text-xs mb-4 sm:my-auto">Valor máximo:</span>
                            <div className="flex justify-between space-x-2">
                                <InputDefault label="Adulto" value={maxAdult} change={(e: number) => setMaxAdult(e)} />
                                <InputDefault label="Criança" value={maxChild} change={(e: number) => setMaxChild(e)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;