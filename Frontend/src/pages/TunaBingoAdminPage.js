import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import axios from 'axios';

//cox items
import arcane from '../resources/itemIcons/cox/arcane.png';
import dex from '../resources/itemIcons/cox/dex.png';
import dhcb from '../resources/itemIcons/cox/dhcb.png';
import dinh from '../resources/itemIcons/cox/dinh.png';
import dclaws from '../resources/itemIcons/cox/dclaws.png';
import hat from '../resources/itemIcons/cox/hat.png';
import top from '../resources/itemIcons/cox/robetop.png';
import bottoms from '../resources/itemIcons/cox/robebottom.png';
import twistyb from '../resources/itemIcons/cox/twistyb.png';
import maul from '../resources/itemIcons/cox/maul.png';
import kodai from '../resources/itemIcons/cox/kodai.png';
import twistedBow from '../resources/itemIcons/cox/twistedbow.png';

//tob items
import avernic from '../resources/itemIcons/tob/avernic.png';
import justichest from '../resources/itemIcons/tob/justichest.png';
import justihelm from '../resources/itemIcons/tob/justihelm.png';
import justilegs from '../resources/itemIcons/tob/justilegs.png';
import rapier from '../resources/itemIcons/tob/rapier.png';
import sangstaff from '../resources/itemIcons/tob/sangstaff.png';
import scythe from '../resources/itemIcons/tob/scythe.png';

//toa items
import fang from '../resources/itemIcons/toa/fang.png'
import lightbearer from '../resources/itemIcons/toa/lightbearer.png'
import ward from '../resources/itemIcons/toa/ward.png'
import masoribody from '../resources/itemIcons/toa/masoribody.png'
import masorichaps from '../resources/itemIcons/toa/masorichaps.png'
import masorimask from '../resources/itemIcons/toa/masorimask.png'
import shadow from '../resources/itemIcons/toa/shadow.png'


import './css/AdminPage.css';

const images = [
  arcane, dex, twistyb,
  dhcb,dinh,dclaws,
  hat,top,bottoms,
  maul,kodai,twistedBow,
  avernic,rapier,sangstaff,
  justihelm,justichest,justilegs,
  scythe, fang, lightbearer,
  ward, masoribody,masorichaps,
  masorimask,shadow
];

const Admin = () => {
  const [boardStates, setBoardStates] = useState([]);

  useEffect(() => {
    const teamNames = ["TunaPhish", 'SyncsSinks'];
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