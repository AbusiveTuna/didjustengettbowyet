import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './css/KC.css';

const nameMap = {
  "TunaPhish": "TunaPhish",
  'Nsync': "Nsync"
};

const fetchData = (teamName, setKcData) => {
  axios.get('https://osrscharterships.com:3000/templeDataAll')
    .then(response => {
      const data = response.data;
      const serverName = nameMap[teamName];
      
      // Update state for each raid
      if (data[39] && data[39][serverName] !== undefined) {
        setKcData(prevData => ({ ...prevData, kcCox: data[39][serverName] }));
      }
      if (data[40] && data[40][serverName] !== undefined) {
        setKcData(prevData => ({ ...prevData, kcCM: data[40][serverName] }));
      }
      if (data[66] && data[66][serverName] !== undefined) {
        setKcData(prevData => ({ ...prevData, kcTob: data[66][serverName] }));
      }
      if (data[85] && data[85][serverName] !== undefined) {
        setKcData(prevData => ({ ...prevData, kcHMT: data[85][serverName] }));
      }
      if (data[93] && data[93][serverName] !== undefined) {
        setKcData(prevData => ({ ...prevData, kcToa: data[93][serverName] }));
      }
      if (data[94] && data[94][serverName] !== undefined) {
        setKcData(prevData => ({ ...prevData, kcEToa: data[94][serverName] }));
      }
    })
    .catch(error => {
      console.log('An error occurred while fetching the data:', error);
    });
};

const KC = ({ teamName }) => {
  const [kcData, setKcData] = useState({
    kcCox: 0,
    kcCM: 0,
    kcTob: 0,
    kcHMT: 0,
    kcToa: 0,
    kcEToa: 0
  });

  useEffect(() => {
    fetchData(teamName, setKcData);
  }, [teamName]);

  return (
    <div className="kc-container">
      <div className="kc-group">
        <p>Cox KC: {kcData.kcCox}</p>
        <p>Tob KC: {kcData.kcTob}</p>
        <p>Toa KC: {kcData.kcToa}</p>
      </div>
      <div className="kc-group">
        <p>CM KC: {kcData.kcCM}</p>
        <p>HMT KC: {kcData.kcHMT}</p>
        <p>Expert Toa KC: {kcData.kcEToa}</p>
      </div>
    </div>
  );
};

export default KC;
