// src/pages/coxTracker.js
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

import './css/coxTracker.css';

const images = [
    arcane, dex, twistyb,
    dhcb,dinh,dclaws,
    hat,top,bottoms,
    maul,kodai,twistedBow
];

const CoxTracker = () => {
  //const [teamKCs, setTeamKCs] = useState({});

//once aws is setup
  const [boardStates, setBoardStates] = useState([]);

  
  useEffect(() => {
    const teamNames = ['goose', 'mx'];

    // teamNames.forEach(teamName => {
    //   axios.get('https://templeosrs.com/getKCUpdate', { params: { teamName } })
    //     .then(response => {
    //       setTeamKCs(prevState => ({ ...prevState, [teamName]: response.data }));
    //     })
    //     .catch(error => {
    //       console.log(`An error occurred while fetching the KC for team ${teamName}:`, error);
    //     });
    // });

    axios.get('https://3.89.217.13/fetchBoards', { params: { teamNames } })
      .then(response => {
        setBoardStates(response.data);
      })
      .catch(error => {
        console.log('An error occurred while fetching the boards:', error);
      });
  }, []);

  return (
    <div className="cox-tracker">
      {boardStates.map((boardState, index) => (
        <div key={index}>
          <Board teamName={boardState.teamName} images={images} isClickable={false} tileStates={boardState.tileStates} />
          {/* <p>Total CoX KC: 420{teamKCs[boardState.teamName]}</p> */}
        </div>
      ))}
    </div>
  );
};

export default CoxTracker;