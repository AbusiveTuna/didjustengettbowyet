import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import axios from 'axios';

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

import './css/adminPage.css';

const images = [
  arcane, dex, twistyb,
  dhcb,dinh,dclaws,
  hat,top,bottoms,
  maul,kodai,twistedBow
];

const Admin = () => {
  const [boardStates, setBoardStates] = useState([]);

  useEffect(() => {
    const teamNames = ["Goose's Gringos", 'MX and the Arcanes'];
    axios.get('https://osrscharterships.com:3000/fetchBoards', { params: { teamNames } })
    .then(response => {
      const parsedBoardStates = response.data.map(item => ({
        ...item,
        tileStates: JSON.parse(item.state),
      }));

      parsedBoardStates = parsedBoardStates.sort((a, b) => {
        if (a.teamname === "Goose's Gringos") return -1;
        if (b.teamname === "Goose's Gringos") return 1;
        return 0;
      });

      setBoardStates(parsedBoardStates);
    })
    .catch(error => {
      console.log('An error occurred while fetching the boards:', error);
    });
}, []);

  return (
    <div className="admin">
      <h1>Admin Page</h1>
      {boardStates.map((boardState, index) => (
        <Board teamName={boardState.teamname} images={images} isClickable={true} tileStates={boardState.tileStates} />
      ))}
    </div>
  );
};

export default Admin;