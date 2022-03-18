import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { getSingle } from '../lib/Hotels';
import { Hotel, Rooms } from '../interfaces/hotel';

const HotelSingle: React.FC = () => {
    const { id } = useParams();
    const [hotelSingle, setHotelSingle] = useState<Hotel>();

    useEffect(() => {
        const init = async () => setHotelSingle(await getSingle(id));
        init();
        console.log('hotelSingle', hotelSingle);
    }, [id]);

    return (
        <div className="App">
            <header className="flex justify-center items-center bg-gradient-to-r from-secondary to-blue-500 py-8">
                <img className="d-flex w-20 mx-auto" src="assets/image/cvc-logo.png" alt="CVC Logo"/>
            </header>
            <div className="max-w-4xl mx-auto mt-5">
                <NavLink to={'/'} className="flex font-bold text-2xl text-blue-500 mb-8">
                    <svg fill="currentColor" viewBox="0 0 24 24" width="2rem">
                        <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
                    </svg>
                    Voltar
                </NavLink>
                <div className="border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
                    <strong className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
                        Informações Gerais
                    </strong>
                    <div className="p-5 space-y-4">
                        <div>
                            <h3 className="text-gray-600 font-extrabold text-lg">
                                {hotelSingle?.name}
                            </h3>
                            <p className="text-gray-400">
                                Cidade: {hotelSingle?.cityName}
                            </p>
                        </div>
                    </div>
                </div>
                <h3 className="font-bold text-xl my-5">Quartos disponíveis</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-center">
                    {hotelSingle?.rooms?.map((room: Rooms) => {
                        return (
                            <div className="border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
                                <div className="p-5 space-y-3">
                                    <h3 className="text-gray-600 font-extrabold text-xl">
                                        {room?.categoryName}
                                    </h3>
                                    <div className="flex space-x-4">
                                        <div>
                                            <h4 className="font-bold">Valor Adulto:</h4>
                                            <p className="text-gray-400">R$ {room?.price?.adult}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Valor Criança:</h4>
                                            <p className="text-gray-400">R$ {room?.price?.child}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default HotelSingle;