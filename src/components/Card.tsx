import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel } from '../interfaces/hotel';

const Card: React.FC<{data:Hotel}> = ({data}) => {
    return (
        <Link to={`/${data.id}`} className="border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
            <div className="p-5 space-y-4">
                <div>
                    <h3 className="text-gray-600 font-extrabold text-lg">
                        {data.name}
                    </h3>
                    <p className="text-gray-400">
                        {data.cityName}
                    </p>
                </div>
                <button className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 px-8 font-bold text-white hover:bg-blue-400">
                    Ver Detalhes
                </button>
            </div>
        </Link>
    );
}

export const LoadCard: React.FC = () => {    
    return <>
        {Array(8).fill(
            <div className="border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
                <div className="grid grid-cols-6 p-5 gap-y-2">
                    <div className="col-span-5 md:col-span-4 ml-4">
                        <span className="flex w-48 h-6 mb-2 bg-gray-400 animate-pulse" />
                        <span className="flex w-28 h-6 bg-gray-200 animate-pulse" />
                    </div>
                </div>
            </div>
        )}
    </>;
}

export default Card;