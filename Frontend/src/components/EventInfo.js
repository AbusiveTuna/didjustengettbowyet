import React from 'react';
import './css/EventInfo.css';

const EventInfo = () => {
    return (
        <div className="event-info">
            <h2>Event Details</h2>
            <p>The raid completion event is a race to complete all three OSRS raids. Two teams will be drafted from the list of participating players. The first team to obtain all 26 items wins.</p>
            <p>Users will submit their drops via Discord, and once verified can see their drop updated on the tracker: <a href="/tunaBingo">Link to Tracker</a></p>
            <p>Draft Date: whatever the discord says.</p>
            <p>Event Start: whatever the discord says.</p>
            <p>Event End: whatever the discord says.</p>
        </div>
    );
};

export default EventInfo;
