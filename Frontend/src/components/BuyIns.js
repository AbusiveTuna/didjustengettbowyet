import React from 'react';
import playersData from '../utilities/playersData';

import templeIcon from '../resources/templeIcon.png'

import './css/BuyIns.css';

const BuyIns = () => {

    const sortedPlayers = [...playersData].sort((a, b) => b.amount - a.amount);

    return (
        <div className="player-buyins">
            <h2>Player Buy-ins/Donations</h2>
            <ul>
                {sortedPlayers.map((player, index) => (
                    <li key={index}>
                        <a href={`https://templeosrs.com/player/overview.php?player=${player.name}`} target="_blank" rel="noopener noreferrer">
                            <img src={templeIcon} alt="Profile" style={{ width: '20px', marginRight: '5px', verticalAlign: 'middle' }} />
                        </a>
                        {player.name} - {player.amount}M
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BuyIns;
