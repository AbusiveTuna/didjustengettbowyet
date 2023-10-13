import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import axios from 'axios';
import KC from '../components/KC';
import './css/ToaTracker.css';

import fang from '../resources/toa/fang.png'
import lightbearer from '../resources/toa/lightbearer.png'
import ward from '../resources/toa/ward.png'
import masoribody from '../resources/toa/masoribody.png'
import masorichaps from '../resources/toa/masorichaps.png'
import masorimask from '../resources/toa/masorimask.png'
import shadow from '../resources/toa/shadow.png'

const images = [
  fang,lightbearer,ward,
  masorimask,masoribody,masorichaps,
  shadow
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

const ToaTracker = () => {
  const [boardStates, setBoardStates] = useState([]);

  useEffect(() => {
    const teamNames = ["Goose's Gringos", 'MX and the Arcanes'];

    axios.get('https://osrscharterships.com:3000/fetchBoardsToa', { params: { teamNames } })
      .then(response => {
        let parsedBoardStates = response.data.map(item => ({
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
        setDefaultBoardStates(setBoardStates);
      });
  }, []);

  return (
    <div className="toa-tracker">
      {boardStates.map((boardState, index) => (
        <div key={index}>
          <Board teamName={boardState.teamname} images={images} isClickable={false} tileStates={boardState.tileStates} />
          <KC teamName={boardState.teamname} /> {}
        </div>
      ))}
    </div>
  );
};

export default ToaTracker;
