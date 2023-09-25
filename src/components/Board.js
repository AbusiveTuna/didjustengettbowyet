import React from 'react';
import Tile from './Tile';

const Board = ({ teamName, images }) => {
  return (
    <div className="board">
      <h2>{teamName}</h2>
      <div className="board-grid">
        {images.map((image, index) => (
          <Tile key={index} imageSrc={image} />
        ))}
      </div>
    </div>
  );
};

export default Board;
