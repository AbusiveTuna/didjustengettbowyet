import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './css/DraftAdminPage.css';
import playersData from '../utilities/playersData';

const ItemTypes = {
  PLAYER: 'player',
};

const DraggablePlayer = ({ name, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PLAYER,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} className="player">
      {name}
    </div>
  );
};

const TeamContainer = ({ team, onDropPlayer }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PLAYER,
    drop: (item, monitor) => onDropPlayer(item.id, team),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`team-container ${isOver ? 'hovered' : ''}`}>
      <h2>{team}</h2>
      {/* Display players here */}
    </div>
  );
};

const DraftAdminPage = () => {
  const [teamTunaPhish, setTeamTunaPhish] = useState([]);
  const [teamNsync, setTeamNsync] = useState([]);

  const handleDropPlayer = (playerId, team) => {
    // Logic to add player to the team
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="draft-admin-page">
        <TeamContainer team="Team Tuna Phish" onDropPlayer={handleDropPlayer} />
        <div className="players-container">
          {playersData.map((player) => (
            <DraggablePlayer key={player.name} name={player.name} id={player.name} />
          ))}
        </div>
        <TeamContainer team="Team Nsync" onDropPlayer={handleDropPlayer} />
      </div>
    </DndProvider>
  );
};

export default DraftAdminPage;
