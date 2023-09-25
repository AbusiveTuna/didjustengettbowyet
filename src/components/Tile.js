import React, { useState } from 'react';

const Tile = ({ imageSrc }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleState = () => {
    setIsActive(!isActive);
  };

  return (
    <div onClick={toggleState} className={isActive ? 'active' : ''}>
      <img src={imageSrc} alt="tile" />
    </div>
  );
};

export default Tile;
