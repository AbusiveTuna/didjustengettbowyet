import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './css/DraftAdminPage.css';
import playersData from '../utilities/playersData';

const ItemTypes = {
    PLAYER: 'player',
};

const DraggablePlayer = ({ name, id, onDrag }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.PLAYER,
        item: () => {
            onDrag(id);
            return { id };
        },
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


const TeamContainer = ({ team, players, onDropPlayer, onDragPlayer }) => {
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
            {players.map(player => (
                <DraggablePlayer key={player.name} name={player.name} id={player.name} onDrag={onDragPlayer} />
            ))}
        </div>
    );
};

const DraftAdminPage = () => {
    const [players, setPlayers] = useState(playersData.map(player => ({ ...player, team: null })));

    const handleDropPlayer = (playerId, newTeam) => {
        setPlayers(prevPlayers => prevPlayers.map(player => {
            if (player.name === playerId) {
                return { ...player, team: newTeam };
            }
            return player;
        }));
    };

    const handleDragPlayer = (playerId) => {
        setPlayers(prevPlayers => prevPlayers.map(player => {
            if (player.name === playerId) {
                return { ...player, team: null };
            }
            return player;
        }));
    };


    return (
        <DndProvider backend={HTML5Backend}>
            <div className="draft-admin-page">
                <div className="players-container">
                    {players.filter(player => !player.team).map((player) => (
                        <DraggablePlayer key={player.name} name={player.name} id={player.name} onDrag={handleDragPlayer} />
                    ))}
                </div>
                <TeamContainer team="Team Tuna Phish" players={players.filter(player => player.team === "Team Tuna Phish")} onDropPlayer={handleDropPlayer} onDragPlayer={handleDragPlayer} />
                <TeamContainer team="Team Nsync" players={players.filter(player => player.team === "Team Nsync")} onDropPlayer={handleDropPlayer} onDragPlayer={handleDragPlayer} />

            </div>
        </DndProvider>
    );
};

export default DraftAdminPage;
