import React from 'react';
import './css/Tile.css';

const Tile = ({ imageSrc, isActive, isClickable, onClick, teamName }) => {
  return (
    <div onClick={isClickable ? onClick : undefined} className={isActive ? 'active' : 'inactive'}>
      <img src={imageSrc} alt="tile" />
    </div>
  );
};

export default Tile;
