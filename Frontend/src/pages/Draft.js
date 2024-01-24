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
    const teamTunaPhishPlayers = ["Abrafebre","Abusivetunaa","bongij_mi","ChNPP","Cuhmmies","connorz","Desports Btw","Fe brimstone","Frelya","Goose L","IM Ivar","Iron Chkn","J_mes","Joan of Arf","Justen","MilkMate","MXIIA","Noble Mobile","I run East","Sailor Terry","Sacred Clays","KinuskiCorie","Shaharrav","Tiiiiiiiiiim","Vyraal1","Vorkathchan","Zero Rangers"];
    const teamNsyncPlayers = ["A sqrd","Astraleos","Fatboislimrs","a sync","ags friend","bid whist","Combatt1ron","Don Corgione","dj i nn","F aladorable","F loofy","GM Goblin","kazpu","Kundaii","Goose World","High Bonsai","Imago Loop","Ironcg","Lord Oziach","Matt93","Nerding Out","I got no job","Ninef","P Dirty Soda","St_rkWolf","S 7efen","Slaymebb","sticky died"];

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
