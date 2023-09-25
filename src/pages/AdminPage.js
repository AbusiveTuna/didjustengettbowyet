import React from 'react';
import Board from '../components/Board';

const images = [
    '../resources/arcane.png',
    '../resources/dex.png',
    '../resources/dhcb.png',
    '../resources/dinh.png',
    '../resources/dclaws.png',
    '../resources/hat.png',
    '../resources/robetop.png',
    '../resources/robebottom.png',
    '../resources/twistyb.png',
    '../resources/maul.png',
    '../resources/kodai.png',
    '../resources/twistedbow.png',
];

const Admin = () => {
  return (
    <div className="admin">
      <h1>Admin Page</h1>
      <Board teamName="Admin Board" images={images} />
    </div>
  );
};

export default Admin;
