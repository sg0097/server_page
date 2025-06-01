const express = require('express');
const router = express.Router();

// Mock server configuration data
const data = {
  settings: [
    { label: 'REGION', value: 'EUROPE - DE' },
    { label: 'PUNKBUSTER', value: 'ON' },
    { label: 'FAIRFIGHT', value: 'ON' },
    { label: 'PASSWORD', value: 'OFF' },
    { label: 'PRESET', value: 'NORMAL' }
  ],
  advanced: [
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
  ],
  rules: [
    { label: 'TICKETS', value: '400', highlight: true },
    { label: 'VEHICLE SPAWN DELAY', value: '25', highlight: true },
    { label: 'BULLET DAMAGE', value: '100' },
    { label: 'KICK AFTER TEAM KILLS', value: '5' },
    { label: 'PLAYER HEALTH', value: '100' },
    { label: 'PLAYER RESPAWN TIME', value: '100' },
    { label: 'KICK AFTER IDLE', value: '300' },
    { label: 'BAN AFTER KICKS', value: '3' }
  ]
};

router.get('/api/server-info', (req, res) => {
  res.json(data);
});

module.exports = router;
