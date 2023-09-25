// src/pages/coxTracker.js
import React from 'react';
import Board from '../components/Board';

const images = [
  '../resources/arcane.png',
  '../resources/dex.png',
  '../resources/dhcb.png',
  '../resources/dinh.png',
  '../resources/dclaws.png',
  '../resources/hat.png',
  '../resources/robetop.png',
  '../resources/robebottom.png',
  '../resources/twistyb.png',
  '../resources/maul.png',
  '../resources/kodai.png',
  '../resources/twistedbow.png',
];

const CoxTracker = () => {
  return (
    <div className="cox-tracker">
      <Board teamName="Team 1" images={images} />
      <Board teamName="Team 2" images={images} />
    </div>
  );
};

export default CoxTracker;
