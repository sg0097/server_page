// src/pages/game-server-information-page/components/AdjustableSidebar.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter, Clock, Star, Settings } from 'lucide-react';
import Button from '../../../components/ui/Button';

const AdjustableSidebar = ({ isExpanded, onToggle, filters, onFilterChange }) => {
  const [activeSection, setActiveSection] = useState('filters');

  const menuItems = [
    { icon: '/images/img_sidemenugame_48x32.png', alt: 'All Servers', id: 'all' },
    { icon: '/images/img_sidemenugame.png', alt: 'Conquest', id: 'conquest' },
    { icon: '/images/img_sidemenu.png', alt: 'Rush', id: 'rush' },
    { icon: '/images/img_sidemenugame_1.png', alt: 'Team Deathmatch', id: 'tdm' },
    { icon: '/images/img_sidemenucareer.png', alt: 'Domination', id: 'domination' },
    { icon: '/images/img_vector.svg', alt: 'Gun Master', id: 'gunmaster' },
    { icon: '/images/img_sidemenunews.svg', alt: 'Obliteration', id: 'obliteration' }
  ];

  const quickActions = [
    { icon: Star, label: 'Favorites', count: 12 },
    { icon: Clock, label: 'Recent', count: 5 },
    { icon: Settings, label: 'Preferences', count: null }
  ];

  const regions = ['All Regions', 'North America', 'Europe', 'Asia', 'Oceania'];
  const playerCounts = ['Any', '1-10', '10-32', '32-48', '48-64', '64+'];
  const gameModes = ['All Modes', 'Conquest Large', 'Conquest Small', 'Rush', 'Team Deathmatch', 'Domination', 'Obliteration'];

  return (
    <>
      {/* Overlay for mobile */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-black bg-opacity-90 backdrop-blur-sm transition-all duration-300 z-30 ${
        isExpanded ? 'w-80' : 'w-16'
      }`}>
        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="absolute -right-3 top-20 bg-gray-800 text-white rounded-full p-1 hover:bg-gray-700 transition-colors z-40"
        >
          {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        <div className="h-full flex flex-col p-4">
          {/* Main Menu Icons */}
          <div className="space-y-4 mb-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-center lg:justify-start hover:bg-white hover:bg-opacity-10 rounded transition-colors p-2 group"
              >
                <img src={item.icon} alt={item.alt} className="w-8 h-8 flex-shrink-0" />
                {isExpanded && (
                  <span className="ml-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.alt}
                  </span>
                )}
              </button>
            ))}
          </div>

          {isExpanded && (
            <div className="flex-1 overflow-y-auto">
              {/* Section Tabs */}
              <div className="flex border-b border-gray-600 mb-4">
                <button
                  onClick={() => setActiveSection('filters')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === 'filters' 
                      ? 'text-white border-b-2 border-blue-500' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Filters
                </button>
                <button
                  onClick={() => setActiveSection('quick')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === 'quick' 
                      ? 'text-white border-b-2 border-blue-500' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Quick Access
                </button>
              </div>

              {/* Filters Section */}
              {activeSection === 'filters' && (
                <div className="space-y-6">
                  {/* Region Filter */}
                  <div>
                    <h3 className="text-white text-sm font-semibold mb-2 uppercase tracking-wide">Region</h3>
                    <select 
                      value={filters.region || 'All Regions'}
                      onChange={(e) => onFilterChange('region', e.target.value)}
                      className="w-full bg-gray-800 text-white border border-gray-600 rounded p-2 text-sm focus:outline-none focus:border-blue-500"
                    >
                      {regions.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>

                  {/* Game Mode Filter */}
                  <div>
                    <h3 className="text-white text-sm font-semibold mb-2 uppercase tracking-wide">Game Mode</h3>
                    <select 
                      value={filters.gameMode || 'All Modes'}
                      onChange={(e) => onFilterChange('gameMode', e.target.value)}
                      className="w-full bg-gray-800 text-white border border-gray-600 rounded p-2 text-sm focus:outline-none focus:border-blue-500"
                    >
                      {gameModes.map(mode => (
                        <option key={mode} value={mode}>{mode}</option>
                      ))}
                    </select>
                  </div>

                  {/* Player Count Filter */}
                  <div>
                    <h3 className="text-white text-sm font-semibold mb-2 uppercase tracking-wide">Player Count</h3>
                    <select 
                      value={filters.playerCount || 'Any'}
                      onChange={(e) => onFilterChange('playerCount', e.target.value)}
                      className="w-full bg-gray-800 text-white border border-gray-600 rounded p-2 text-sm focus:outline-none focus:border-blue-500"
                    >
                      {playerCounts.map(count => (
                        <option key={count} value={count}>{count}</option>
                      ))}
                    </select>
                  </div>

                  {/* Custom Rules */}
                  <div>
                    <h3 className="text-white text-sm font-semibold mb-2 uppercase tracking-wide">Server Options</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={filters.hasPassword || false}
                          onChange={(e) => onFilterChange('hasPassword', e.target.checked)}
                          className="mr-2" 
                        />
                        <span className="text-white text-xs">Password Protected</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={filters.punkbuster || false}
                          onChange={(e) => onFilterChange('punkbuster', e.target.checked)}
                          className="mr-2" 
                        />
                        <span className="text-white text-xs">PunkBuster</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={filters.fairfight || false}
                          onChange={(e) => onFilterChange('fairfight', e.target.checked)}
                          className="mr-2" 
                        />
                        <span className="text-white text-xs">FairFight</span>
                      </label>
                    </div>
                  </div>

                  {/* Ping Range */}
                  <div>
                    <h3 className="text-white text-sm font-semibold mb-2 uppercase tracking-wide">Max Ping</h3>
                    <input 
                      type="range" 
                      min="0" 
                      max="200" 
                      value={filters.maxPing || 100}
                      onChange={(e) => onFilterChange('maxPing', parseInt(e.target.value))}
                      className="w-full" 
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>0ms</span>
                      <span>{filters.maxPing || 100}ms</span>
                      <span>200ms</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Access Section */}
              {activeSection === 'quick' && (
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 bg-gray-800 bg-opacity-50 rounded hover:bg-opacity-70 transition-colors"
                    >
                      <div className="flex items-center">
                        <action.icon size={16} className="text-white mr-3" />
                        <span className="text-white text-sm font-medium">{action.label}</span>
                      </div>
                      {action.count && (
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {action.count}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Bottom Actions */}
          <div className="mt-auto space-y-2">
            <img src="/images/img_sidemenumisc.svg" alt="Misc" className="w-6 h-6 mx-auto" />
            {isExpanded && (
              <Button 
                variant="outline" 
                size="small" 
                className="w-full text-xs"
              >
                Reset Filters
              </Button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdjustableSidebar;