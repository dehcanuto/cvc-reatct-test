import React from 'react';

const Header: React.FC<{getCity:Function}> = ({getCity}) => {
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
                                defaultValue="1032"
                                className="flex-auto text-base text-gray-800 outline-none border-2 border-b-4 border-gray-200 rounded-xl px-4 py-2"
                                onChange={(e) => getCity(e.target.value)}
                            >
                                <option value="1032">Porto Seguro</option>
                                <option value="7110">Rio de Janeiro</option>
                                <option value="9626">São Paulo</option>
                            </select>
                            <button className="rounded-2xl border-b-4 border-b-primary-500 bg-secondary py-3 px-8 font-bold text-white">
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;