import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JustenMeme from './pages/JustenMeme';
import CoxTracker from './pages/CoxTracker';
import TobTracker from './pages/TobTracker';
import ToaTracker from './pages/ToaTracker';
import AdminPage from './pages/AdminPage';
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
            <Route path="/gooseCoxBingo" element={<CoxTracker/>} />
            <Route path="/tob" element={<TobTracker/>} />
            <Route path="/toa" element={<ToaTracker/>} />
            <Route path="/dontgivethisfuckingurlaway" element={<AdminPage/>} />
            </Routes>
            
          </div>
        </Router>
  );
}

export default App;
