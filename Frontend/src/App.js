import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JustenMeme from './pages/JustenMeme';
import PreviousEvents from './pages/PreviousEvents';
import Toolbar from './components/Toolbar';
import SiteCredits from './components/SiteCredits';

function App() {
  return (
<Router>
          <div className="App">
            <Toolbar />
            <SiteCredits />
            <Routes>
            <Route path="/" element={<JustenMeme/>} />
            <Route path="/previousEvents" element={<PreviousEvents/>} />
            </Routes>
            
          </div>
        </Router>
  );
}

export default App;
