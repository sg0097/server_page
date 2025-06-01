import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import ServerInfoPage from './pages/ServerInfo';
import GameServerInformationPage from './pages/game-server-information-page';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/server-info" element={<ServerInfoPage />} />
        <Route path="/game-server-information-page" element={<GameServerInformationPage />} />
        <Route path="/" element={<ServerInfoPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;