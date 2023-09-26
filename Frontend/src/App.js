import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JustenMeme from './pages/JustenMeme';
import CoxTracker from './pages/CoxTracker';
import AdminPage from './pages/AdminPage';

function App() {
  return (
<Router>
          <div className="App">
            <Routes>
            <Route path="/" element={<JustenMeme/>} />
            <Route path="/gooseCoxBingo" element={<CoxTracker/>} />
            <Route path="/dontgivethisfuckingurlaway" element={<AdminPage/>} />
            </Routes>
          </div>
        </Router>
  );
}

export default App;
