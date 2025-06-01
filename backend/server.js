const express = require('express');
const cors = require('cors');
const serverInfoRoutes = require('./routes/serverInfo');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow CORS for frontend
app.use(express.json());

// Use the server info route
app.use(serverInfoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
