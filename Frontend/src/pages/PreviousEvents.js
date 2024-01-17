import React from 'react';
import gooseCox from '../resources/gooseCox.png';

import './css/PreviousEvents.css';

const PreviousEvents = () => {
    return (
        <div className="PreviousEvents">
            <h2>In October of 2023 Goose's Gringos defeated MX and the Arcanes in a bloody war that saw both teams competing to see who could get all 12 purples from CoX first.</h2>
            <img src={gooseCox} alt="Goose CoX Bingo 2023" className="goose-cox-history-image" />
            <h3> Goose CoX Bingo 2023 </h3>
        </div>
    );
}

export default PreviousEvents;
