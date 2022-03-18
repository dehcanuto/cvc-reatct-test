import React from 'react';
import { useParams } from 'react-router-dom';

const HotelSingle: React.FC = () => {
    const { id } = useParams();

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    HotelSingle page {id}
                </p>
            </header>
        </div>
    );
}

export default HotelSingle;