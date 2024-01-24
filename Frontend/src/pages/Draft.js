import React from 'react';
import './css/Draft.css';

const StaticPlayer = ({ name }) => (
    <div className="player">
        {name}
    </div>
);

const StaticTeamContainer = ({ team, players }) => (
    <div className="team-container">
        <h2>{team}</h2>
        {players.map(player => (
            <StaticPlayer key={player} name={player} />
        ))}
    </div>
);

const Draft = () => {
    const teamTunaPhishPlayers = ["AbusiveTunaa"];
    const teamNsyncPlayers = ["a sync"];

    return (
        <div className="draft">
            <div className="players-container">
                {}
            </div>
            <StaticTeamContainer team="Team Tuna Phish" players={teamTunaPhishPlayers} />
            <StaticTeamContainer team="Team Nsync" players={teamNsyncPlayers} />
        </div>
    );
}

export default Draft;
