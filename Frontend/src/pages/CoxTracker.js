import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import arcane from '../resources/arcane.png';
import dex from '../resources/dex.png';
import dhcb from '../resources/dhcb.png';
import dinh from '../resources/dinh.png';
import dclaws from '../resources/dclaws.png';
import hat from '../resources/hat.png';
import top from '../resources/robetop.png';
import bottoms from '../resources/robebottom.png';
import twistyb from '../resources/twistyb.png';
import maul from '../resources/maul.png';
import kodai from '../resources/kodai.png';
import twistedBow from '../resources/twistedbow.png';
import axios from 'axios';
import KC from '../components/KC';

import './css/coxTracker.css';

const images = [
  arcane, dex, twistyb,
  dhcb,dinh,dclaws,
  hat,top,bottoms,
  maul,kodai,twistedBow
];

function setDefaultBoardStates(setBoardStates) {
  const defaultResponse = [
    {
      teamname: "Failed to load data",
      state: JSON.stringify(Array(12).fill(false)),
    },
    {
      teamname: 'Try again or complain to tuna',
      state: JSON.stringify(Array(12).fill(false)),
    },
  ];

  const parsedBoardStates = defaultResponse.map(function(item) {
    const newItem = Object.assign({}, item);
    newItem.tileStates = JSON.parse(item.state);
    return newItem;
  });  

  setBoardStates(parsedBoardStates);
}

const CoxTracker = () => {
  const [boardStates, setBoardStates] = useState([]);

  useEffect(() => {
    const teamNames = ["Goose's Gringos", 'MX and the Arcanes'];

    axios.get('https://osrscharterships.com:3000/fetchBoards', { params: { teamNames } })
      .then(response => {
        const parsedBoardStates = response.data.map(item => ({
          ...item,
          tileStates: JSON.parse(item.state),
        }));

        setBoardStates(parsedBoardStates);
      })
      .catch(error => {
        console.log('An error occurred while fetching the boards:', error);
        setDefaultBoardStates(setBoardStates);
      });
  }, []);

  return (
    <div className="cox-tracker">
      {boardStates.map((boardState, index) => (
        <div key={index}>
          <Board teamName={boardState.teamname} images={images} isClickable={false} tileStates={boardState.tileStates} />
          <KC teamName={boardState.teamname} /> {}
        </div>
      ))}
    </div>
  );
};

export default CoxTracker;
