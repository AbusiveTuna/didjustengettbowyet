import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import axios from 'axios';

//tob items
import avernic from '../resources/tob/avernic.png';
import justichest from '../resources/tob/justichest.png';
import justihelm from '../resources/tob/justihelm.png';
import justilegs from '../resources/tob/justilegs.png';
import rapier from '../resources/tob/rapier.png';
import sangstaff from '../resources/tob/sangstaff.png';
import scythe from '../resources/tob/scythe.png';

//toa items
import fang from '../resources/toa/fang.png'
import lightbearer from '../resources/toa/lightbearer.png'
import ward from '../resources/toa/ward.png'
import masoribody from '../resources/toa/masoribody.png'
import masorichaps from '../resources/toa/masorichaps.png'
import masorimask from '../resources/toa/masorimask.png'
import shadow from '../resources/toa/shadow.png'

import ironIcon from '../resources/iron.png'

import './css/adminPage.css';

const images = [
  avernic,rapier,sangstaff,
  justihelm,justichest,justilegs,
  scythe, fang, lightbearer,
  ward, masoribody,masorichaps,
  masorimask,shadow, ironIcon
];

const Admin = () => {
  const [boardStates, setBoardStates] = useState([]);

  useEffect(() => {
    const teamNames = ["TunaPhish", 'Team2'];
    axios.get('https://osrscharterships.com:3000/fetchBoards', { params: { teamNames } })
    .then(response => {
      let parsedBoardStates = response.data.map(item => ({
        ...item,
        tileStates: JSON.parse(item.state),
      }));

      parsedBoardStates = parsedBoardStates.sort((a, b) => {
        if (a.teamname === "TunaPhish") return -1;
        if (b.teamname === "TunaPhish") return 1;
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