import React from 'react';
import './css/Toolbar.css';
const Toolbar = () => {
  return (
    <div className="toolbar">
      <a href="/draft">2024 Tuna/aSync Raid Completion Mega Draft</a>
      <a href="/eventDetails">Raid Completion Bingo Details</a>
      <a href="/tunaBingo">Raid Completion Bingo Tracker</a>
      <a href="https://www.templeosrs.com/competitions/standings.php?id=24834">TempleOSRS Tracker</a>
      <a href="/previousEvents">Previous Events</a>
    </div>
  );
};

export default Toolbar;
