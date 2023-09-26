import React, { useState } from 'react';
import axios from 'axios';
import Tile from './Tile';
import './css/Board.css';

const Board = ({ teamName, images, isClickable, tileStates: initialTileStates }) => {
  const [tileStates, setTileStates] = useState(initialTileStates);
  
  const handleTileClick = async (index) => {
    const newTileStates = [...tileStates];
    newTileStates[index] = !newTileStates[index];
    setTileStates(newTileStates);
  
    try {
      await axios.post('changeMe.com/updateBoard', {
        teamName,
        tileStates: newTileStates,
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log('Error: The requested resource was not found.');
      } else {
        console.log('An unexpected error occurred.');
      }
    }
  };
  

  return (
    <div className="board">
      <h2>{teamName}</h2>
      <div className="board-grid">
        {images.map((image, index) => (
          <Tile
            key={index}
            imageSrc={image}
            isActive={tileStates[index]}
            isClickable={isClickable}
            onClick={() => handleTileClick(index)}
            teamName={teamName}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
