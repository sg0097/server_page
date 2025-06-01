import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const ServerInfoPage = () => {
  const [settingsData, setSettingsData] = useState([]);
  const [advancedData, setAdvancedData] = useState([]);
  const [rulesData, setRulesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/server-info');
        const data = await response.json();
        setSettingsData(data.settings || []);
        setAdvancedData(data.advanced || []);
        setRulesData(data.rules || []);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/background.png)' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <Sidebar />

      <div className="relative z-10 ml-16">
        <Header />
        <main className="px-8 pb-8">
          <h2 className="text-4xl font-semibold text-white mb-6 tracking-wide">
            #1| NASA | Noobs Welcome | Conquest 40Hz
          </h2>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <img src="/images/img_germanyflag.svg" alt="Germany Flag" className="w-4 h-2 mr-3" />
              <p className="text-lg font-semibold text-white text-opacity-80 uppercase tracking-wide">
                CONQUEST LARGE - SIEGE OF SHANGHAI - NORMAL - 40 HZ
              </p>
            </div>
            <p className="text-lg font-semibold text-white text-opacity-80 leading-relaxed max-w-4xl">
              Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord<br />
              https://discord.gg/3r5NK4d
            </p>
          </div>

          <div className="flex space-x-0 mb-12">
            <Button onClick={handleJoinClick} className="w-80 h-14">JOIN</Button>
            <Button onClick={handleSpectateClick} className="w-80 h-14">SPECTATE</Button>
            <Button onClick={handleCommanderClick} className="w-80 h-14">JOIN AS COMMANDER</Button>
            <Button variant="star" className="w-40 h-14">
              <div className="w-6 h-6 bg-white mr-3" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
              13672
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-12 mb-12">
            <div>
              <p className="text-lg font-semibold text-white uppercase tracking-wide mb-2">PLAYERS</p>
              <p className="text-3xl font-semibold text-white tracking-wide">64/64</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white uppercase tracking-wide mb-2">PING</p>
              <p className="text-3xl font-semibold text-white tracking-wide">47ms</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white uppercase tracking-wide mb-2">TICKRATE</p>
              <p className="text-3xl font-semibold text-white tracking-wide">60 Hz</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-6">SETTINGS</h3>
              <div className="space-y-4">
                {settingsData.map((setting, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-base font-medium text-white uppercase">{setting.label}</span>
                      <span className="text-base font-medium text-white uppercase">{setting.value}</span>
                    </div>
                    {index < settingsData.length - 1 && <div className="h-px bg-white bg-opacity-10" />}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-6">ADVANCED</h3>
              <div className="space-y-4">
                {advancedData.map((setting, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-base font-medium text-white uppercase">{setting.label}</span>
                      <span className="text-base font-medium text-white uppercase">{setting.value}</span>
                    </div>
                    {index < advancedData.length - 1 && <div className="h-px bg-white bg-opacity-10" />}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-6">RULES</h3>
              <div className="space-y-4">
                {rulesData.map((rule, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-base font-medium text-white uppercase">{rule.label}</span>
                      <span className={`text-base font-medium uppercase ${rule.highlight ? 'text-yellow-300' : 'text-white'}`}>
                        {rule.value}
                      </span>
                    </div>
                    {index < rulesData.length - 1 && <div className="h-px bg-white bg-opacity-10" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-6">MAP ROTATION</h3>
            <div className="grid grid-cols-4 gap-8">
              {mapRotationData.map((map, index) => (
                <Card
                  key={index}
                  className="h-44 w-80 bg-black bg-opacity-50"
                  backgroundImage={map.image}
                  overlay={true}
                >
                  <div className="absolute bottom-6 left-6">
                    <p className="text-lg font-bold text-white uppercase mb-1">{map.mode}</p>
                    <p className="text-lg font-bold text-white uppercase">{map.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Player Avatars */}
          <div className="fixed right-8 top-16 space-y-4">
            <div className="relative">
              <img src="/images/img_friend_profile_pic.png" alt="Player 1" className="w-12 h-12 rounded" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-white" />
            </div>
            <div className="relative">
              <img src="/images/img_friend_profile_pic_green_a700.png" alt="Player 2" className="w-12 h-12 rounded" />
              <img src="/images/img_online.svg" alt="Online" className="absolute -top-1 -right-1 w-3 h-3" />
            </div>
            <div className="relative">
              <img src="/images/img_vector_white_a700.svg" alt="Player 3" className="w-3 h-3" />
            </div>
            <div className="relative">
              <img src="/images/img_homejoindefault.svg" alt="Join Default" className="w-12 h-11" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServerInfoPage;
