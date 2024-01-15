import React from 'react';
import BuyIns from '../components/BuyIns';
import EventInfo from '../components/EventInfo';

import './css/EventDetails.css';

const EventDetails = () => {
    return (
        <div className="event-details-container">
            <BuyIns />
            <EventInfo />
        </div>
    );
};

export default EventDetails;
