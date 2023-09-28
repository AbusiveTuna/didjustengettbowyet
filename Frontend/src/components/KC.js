import React, { useEffect, useState } from 'react';
import axios from 'axios';

const fetchData = (url, setFunction, teamName) => {
  axios.get(url)
    .then(response => {
      let data = response.data;
     
      if (data[teamName] !== undefined) {
        setFunction(data[teamName]);
      }
      else if (data["Goose S Gringos"] && teamName == "Goose's Gringos") {
        setFunction(data[teamName]);
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
