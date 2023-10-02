import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import axios from 'axios';
import KC from '../components/KC';

import avernic from '../resources/tob/avernic.png';
// import sangkit from '../resources/tob/sangkit.png';
import dust from '../resources/tob/dust.png';
// import holykit from '../resources/tob/holykit.png';
import justichest from '../resources/tob/justichest.png';
import justihelm from '../resources/tob/justihelm.png';
import justilegs from '../resources/tob/justilegs.png';
import lilzik from '../resources/tob/lilzik.png';
import rapier from '../resources/tob/rapier.png';
import sangstaff from '../resources/tob/sangstaff.png';
import scythe from '../resources/tob/scythe.png';

import './css/TobTracker.css';

const images = [
  avernic,rapier,sangstaff,
  justihelm,justichest,justilegs,
  scythe,lilzik,dust
];

function setDefaultBoardStates(setBoardStates) {
  const defaultResponse = [
    {
      teamname: "Failed to load data",
      state: JSON.stringify(Array(8).fill(false)),
    },
    {
      teamname: 'Try again or complain to tuna',
      state: JSON.stringify(Array(8).fill(false)),
    },
  ];

  const parsedBoardStates = defaultResponse.map(function(item) {
    const newItem = Object.assign({}, item);
    newItem.tileStates = JSON.parse(item.state);
    return newItem;
  });  

  setBoardStates(parsedBoardStates);
}

const TobTracker = () => {
  const [boardStates, setBoardStates] = useState([]);

  useEffect(() => {
    const teamNames = ["Tunas Fish", 'TheAbusedTunas'];

    axios.get('https://osrscharterships.com:3000/fetchBoardsTob', { params: { teamNames } })
      .then(response => {
        let parsedBoardStates = response.data.map(item => ({
          ...item,
          tileStates: JSON.parse(item.state),
        }));

        parsedBoardStates = parsedBoardStates.sort((a, b) => {
          if (a.teamname === "Tunas Fish") return -1;
          if (b.teamname === "Tunas Fish") return 1;
          return 0;
        });

        setBoardStates(parsedBoardStates);
      })
      .catch(error => {
        console.log('An error occurred while fetching the boards:', error);
        setDefaultBoardStates(setBoardStates);
      });
  }, []);

  return (
    <div className="tob-tracker">
      {boardStates.map((boardState, index) => (
        <div key={index}>
          <Board teamName={boardState.teamname} images={images} isClickable={false} tileStates={boardState.tileStates} />
          <KC teamName={boardState.teamname} /> {}
        </div>
      ))}
    </div>
  );
};

export default TobTracker;
