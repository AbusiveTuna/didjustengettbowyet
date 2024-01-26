import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JustenMeme from './pages/JustenMeme';
import TunaBingoTracker from './pages/TunaBingoTracker';
import EventDetails from './pages/EventDetails';
import AdminPage from './pages/TunaBingoAdminPage';
import Draft from './pages/Draft';
import DraftAdmin from './pages/DraftAdminPage';
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
            <Route path="/tunaBingo" element={<TunaBingoTracker/>} />
            <Route path="/eventDetails" element={<EventDetails/>} />
            <Route path="/draft" element={<Draft/>} />
            <Route path="/draftAdmin" element={<DraftAdmin/>} />
            <Route path="/previousEvents" element={<PreviousEvents/>} />
            <Route path="/thisPageDoesntHaveSecuritySoDontGiveThisUrlAway" element={<AdminPage/>}/>
            </Routes>
            
          </div>
        </Router>
  );
}

export default App;
