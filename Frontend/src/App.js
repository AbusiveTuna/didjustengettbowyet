import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JustenMeme from './pages/JustenMeme';
import TobToaTracker from './pages/TobToaTracker';
import AdminPage from './pages/TobToaAdminPage';
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
            <Route path="/tunaTobToaBingo" element={<TobToaTracker/>} />
            <Route path="/tunaTobToaBingoAdminPage" element={<AdminPage/>}/>
            </Routes>
            
          </div>
        </Router>
  );
}

export default App;
