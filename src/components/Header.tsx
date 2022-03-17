import React from 'react';

const Header: React.FC = () => {
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
                    <div className="max-w-xl bg-white shadow-lg rounded-lg p-4 mx-auto mt-8 -mb-5">
                        <div className="flex justify-between px-2 space-x-2 rounded-lg">
                            <select className="flex-auto text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
                                <option value="1032" selected>Porto Seguro</option>
                                <option value="7110">Rio de Janeiro</option>
                                <option value="9626">São Paulo</option>
                            </select>
                            <button className="flex bg-secondary text-white text-base font-bold rounded-lg px-8 py-2">
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