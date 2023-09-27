import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KC = ({ teamName }) => {
  const [kc, setKc] = useState(0);

  useEffect(() => {
    axios.get('https://osrscharterships.com:3000/templeData')
      .then(response => {
        const data = response.data;

        // Check if our team name matches then display the xp_gained as KC
        if (data[teamName]) {
          setKc(data[teamName]);
        }
      })
      .catch(error => {
        console.log('An error occurred while fetching the data:', error);
      });
  }, [teamName]);

  return (
    <div>
      <p>Team KC: {kc}</p>
    </div>
  );
};

export default KC;
