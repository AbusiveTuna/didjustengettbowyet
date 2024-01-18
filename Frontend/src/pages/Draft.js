import React from 'react';
import './css/Draft.css';
import playersData from '../utilities/playersData';

const StaticPlayer = ({ name }) => (
    <div className="player">
        {name}
    </div>
);

const StaticTeamContainer = ({ team, players }) => (
    <div className="team-container">
        <h2>{team}</h2>
        {players.map(player => (
            <StaticPlayer key={player.name} name={player.name} />
        ))}
    </div>
);

const Draft = () => {
    const teamTunaPhishPlayers = playersData.filter(player => player.team === "Team Tuna Phish");
    const teamNsyncPlayers = playersData.filter(player => player.team === "Team Nsync");
    const noTeamPlayers = playersData.filter(player => !player.team);

    return (
        <div className="draft">
            <div className="players-container">
                {noTeamPlayers.map(player => (
                    <StaticPlayer key={player.name} name={player.name} />
                ))}
            </div>
            <StaticTeamContainer team="Team Tuna Phish" players={teamTunaPhishPlayers} />
            <StaticTeamContainer team="Team Nsync" players={teamNsyncPlayers} />
        </div>
    );
}

export default Draft;
