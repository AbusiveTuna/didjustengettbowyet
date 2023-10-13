import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JustenMeme from './pages/JustenMeme';
import CoxTracker from './pages/CoxTracker';
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
            </Routes>
            
          </div>
        </Router>
  );
}

export default App;
