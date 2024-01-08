import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './css/KC.css';

const nameMap = {
  "TunaPhish": "TunaPhish",
  'Team2': "Team2"
};

const fetchData = (url, setFunction, teamName) => {
  axios.get(url)
    .then(response => {
      let data = response.data;
      const serverName = nameMap[teamName];
      if (data[serverName] !== undefined) {
        setFunction(data[serverName]);
      }
    })
    .catch(error => {
      console.log('An error occurred while fetching the data:', error);
    });
};


const KC = ({ teamName }) => {
  const [kcTob, setKcTob] = useState(0);
  const [kcHMT, setKcHMT] = useState(0);
  const [kcToa, setKcToa] = useState(0);
  const [kcEToa, setKcEToa] = useState(0);

  useEffect(() => {
    fetchData('https://osrscharterships.com:3000/templeDataTob', setKcTob, teamName);
    fetchData('https://osrscharterships.com:3000/templeDataHMT', setKcHMT, teamName);
    fetchData('https://osrscharterships.com:3000/templeDataToa', setKcToa, teamName);
    fetchData('https://osrscharterships.com:3000/templeDataEToa', setKcEToa, teamName);
  }, [teamName]);

  return (
  <div className="kc-container">
    <div className="kc-group">
      <p>Tob KC: {kcTob}</p>
      <p>Toa KC: {kcToa}</p>
    </div>
    <div className="kc-group">
      <p>HMT KC: {kcHMT}</p>
      <p>Expert Toa KC: {kcEToa}</p>
    </div>
  </div>
  );
};

export default KC;
