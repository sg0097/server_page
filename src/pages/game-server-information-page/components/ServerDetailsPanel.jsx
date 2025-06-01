// src/pages/game-server-information-page/components/ServerDetailsPanel.jsx
import React from 'react';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

const ServerDetailsPanel = ({ sidebarExpanded }) => {
  const handleJoinClick = () => {
    alert('Joining server...');
  };

  const handleSpectateClick = () => {
    alert('Spectating server...');
  };

  const handleCommanderClick = () => {
    alert('Joining as commander...');
  };

  const mapRotationData = [
    {
      image: '/images/img_dawnbreaker_1.png',
      mode: 'CONQUEST LARGE',
      name: 'DAWNBREAKER'
    },
    {
      image: '/images/img_propaganda_1.png',
      mode: 'CONQUEST LARGE',
      name: 'PROPAGANDA'
    },
    {
      image: '/images/img_op_locker_1_1.png',
      mode: 'CONQUEST LARGE',
      name: 'OPERATION LOCKER'
    },
    {
      image: '/images/img_lancang_dam_1.png',
      mode: 'CONQUEST LARGE',
      name: 'LANCANG DAM'
    }
  ];

  const settingsData = [
    { label: 'REGION', value: 'EUROPE - DE' },
    { label: 'PUNKBUSTER', value: 'ON' },
    { label: 'FAIRFIGHT', value: 'ON' },
    { label: 'PASSWORD', value: 'OFF' },
    { label: 'PRESET', value: 'NORMAL' }
  ];

  const advancedData = [
    { label: 'MINIMAP', value: 'ON' },
    { label: 'ONLY SQUAD LEADER SPAWN', value: 'OFF' },
    { label: 'VEHICLES', value: 'ON' },
    { label: 'TEAM BALANCE', value: 'ON' },
    { label: 'MINIMAP SPOTTING', value: 'ON' },
    { label: 'HUD', value: 'ON' },
    { label: '3P VEHICLE CAM', value: 'ON' },
    { label: 'REGENERATIVE HEALTH', value: 'ON' },
    { label: 'KILL CAM', value: 'ON' },
    { label: 'FRIENDLY FIRE', value: 'OFF' },
    { label: '3D SPOTTING', value: 'ON' },
    { label: 'ENEMY NAME TAGS', value: 'ON' }
  ];

  const rulesData = [
    { label: 'TICKETS', value: '400', highlight: true },
    { label: 'VEHICLE SPAWN DELAY', value: '25', highlight: true },
    { label: 'BULLET DAMAGE', value: '100' },
    { label: 'KICK AFTER TEAM KILLS', value: '5' },
    { label: 'PLAYER HEALTH', value: '100' },
    { label: 'PLAYER RESPAWN TIME', value: '100' },
    { label: 'KICK AFTER IDLE', value: '300' },
    { label: 'BAN AFTER KICKS', value: '3' }
  ];

  return (
    <div className={`transition-all duration-300 ${
      sidebarExpanded ? 'ml-80' : 'ml-16'
    }`}>
      <main className="px-4 lg:px-8 pb-8">
        {/* Title */}
        <h2 className="text-2xl lg:text-4xl font-semibold text-white mb-6 tracking-wide">
            #1| NASA | Noobs Welcome | Conquest 40Hz
          </h2>
          
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <img src="/images/img_germanyflag.svg" alt="Germany Flag" className="w-4 h-2 mr-3" />
            <p className="text-sm lg:text-lg font-semibold text-white text-opacity-80 uppercase tracking-wide">
              CONQUEST LARGE - SIEGE OF SHANGHAI - NORMAL - 40 HZ
            </p>
          </div>
          
          
          
          <p className="text-sm lg:text-lg font-semibold text-white text-opacity-80 leading-relaxed max-w-4xl">
            Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord<br />
            https://discord.gg/3r5NK4d
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-0 mb-12">
          <Button 
            onClick={handleJoinClick}
            className="w-full lg:w-80 h-12 lg:h-14"
          >
            JOIN
          </Button>
          <Button 
            onClick={handleSpectateClick}
            className="w-full lg:w-80 h-12 lg:h-14"
          >
            SPECTATE
          </Button>
          <Button 
            onClick={handleCommanderClick}
            className="w-full lg:w-80 h-12 lg:h-14"
          >
            JOIN AS COMMANDER
          </Button>
          <Button 
            variant="star"
            className="w-full lg:w-40 h-12 lg:h-14"
          >
            <div className="w-6 h-6 bg-white mr-3" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
            13672
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mb-12">
          <div className="text-center lg:text-left">
            <p className="text-lg font-semibold text-white uppercase tracking-wide mb-2">PLAYERS</p>
            <p className="text-3xl font-semibold text-white tracking-wide">64/64</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-lg font-semibold text-white uppercase tracking-wide mb-2">PING</p>
            <p className="text-3xl font-semibold text-white tracking-wide">47ms</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-lg font-semibold text-white uppercase tracking-wide mb-2">TICKRATE</p>
            <p className="text-3xl font-semibold text-white tracking-wide">60 Hz</p>
          </div>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Settings Column */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-6">SETTINGS</h3>
            <div className="space-y-4">
              {settingsData.map((setting, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm lg:text-base font-medium text-white uppercase">{setting.label}</span>
                    <span className="text-sm lg:text-base font-medium text-white uppercase">{setting.value}</span>
                  </div>
                  {index < settingsData.length - 1 && (
                    <div className="h-px bg-white bg-opacity-10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Column */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-6">ADVANCED</h3>
            <div className="space-y-4">
              {advancedData.map((setting, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm lg:text-base font-medium text-white uppercase">{setting.label}</span>
                    <span className="text-sm lg:text-base font-medium text-white uppercase">{setting.value}</span>
                  </div>
                  {index < advancedData.length - 1 && (
                    <div className="h-px bg-white bg-opacity-10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Rules Column */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-6">RULES</h3>
            <div className="space-y-4">
              {rulesData.map((rule, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm lg:text-base font-medium text-white uppercase">{rule.label}</span>
                    <span className={`text-sm lg:text-base font-medium uppercase ${
                      rule.highlight ? 'text-yellow-300' : 'text-white'
                    }`}>
                      {rule.value}
                    </span>
                  </div>
                  {index < rulesData.length - 1 && (
                    <div className="h-px bg-white bg-opacity-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Rotation Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-6">MAP ROTATION</h3>
          
          {/* Gradient Overlay */}
          <div className="h-12 bg-gradient-to-t from-transparent to-teal-600 mb-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {mapRotationData.map((map, index) => (
              <Card
                key={index}
                className="h-44 w-full bg-black bg-opacity-50"
                backgroundImage={map.image}
                overlay={true}
              >
                <div className="absolute bottom-6 left-6">
                  <p className="text-sm lg:text-lg font-bold text-white uppercase mb-1">{map.mode}</p>
                  <p className="text-sm lg:text-lg font-bold text-white uppercase">{map.name}</p>
                </div>
              </Card>
              
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServerDetailsPanel;