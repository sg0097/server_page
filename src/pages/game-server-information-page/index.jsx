// src/pages/game-server-information-page/index.jsx
import React, { useState } from 'react';
import Header from '../../components/common/Header';
import AdjustableSidebar from './components/AdjustableSidebar';
import ServerDetailsPanel from './components/ServerDetailsPanel';

const GameServerInformationPage = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [filters, setFilters] = useState({
    region: 'All Regions',
    gameMode: 'All Modes',
    playerCount: 'Any',
    hasPassword: false,
    punkbuster: false,
    fairfight: false,
    maxPing: 100
  });

  const handleSidebarToggle = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const handleFilterChange = (filterKey, value) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: value
    }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/img_menubackground.png)' }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      {/* Adjustable Sidebar */}
      <AdjustableSidebar 
        isExpanded={sidebarExpanded}
        onToggle={handleSidebarToggle}
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      
      {/* Main Content */}
      <div className="relative z-10">
        <div className={`transition-all duration-300 ${
          sidebarExpanded ? 'ml-80' : 'ml-16'
        }`}>
          <Header />
        </div>
        
        <ServerDetailsPanel sidebarExpanded={sidebarExpanded} />
        
        {/* Player Avatars - Adjusted for sidebar */}
        <div className={`fixed right-4 lg:right-8 top-16 space-y-4 transition-all duration-300 z-40`}>
          <div className="relative">
            <img src="/images/img_friend_profile_pic.png" alt="Player 1" className="w-10 h-10 lg:w-12 lg:h-12 rounded" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-white" />
          </div>
          <div className="relative">
            <img src="/images/img_friend_profile_pic_green_a700.png" alt="Player 2" className="w-10 h-10 lg:w-12 lg:h-12 rounded" />
            <img src="/images/img_online.svg" alt="Online" className="absolute -top-1 -right-1 w-3 h-3" />
          </div>
          <div className="relative">
            <img src="/images/img_vector_white_a700.svg" alt="Player 3" className="w-3 h-3" />
          </div>
          <div className="relative">
            <img src="/images/img_homejoindefault.svg" alt="Join Default" className="w-10 h-9 lg:w-12 lg:h-11" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameServerInformationPage;