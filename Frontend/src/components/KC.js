import React, { useEffect, useState } from 'react';
import axios from 'axios';

const nameMap = {
  "Goose's Gringos": "Goose S Gringos",
  'MX and the Arcanes': "Mx And The Arcanes"
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
  const [kc, setKc] = useState(0);
  const [kcCM, setKcCM] = useState(0);

  useEffect(() => {
    fetchData('https://osrscharterships.com:3000/templeData', setKc, teamName);
    fetchData('https://osrscharterships.com:3000/templeDataCM', setKcCM, teamName);
  }, [teamName]);

  return (
    <div>
      <p>CoX KC: {kc}</p>
      <p>CM KC: {kcCM}</p>
    </div>
  );
};

export default KC;
