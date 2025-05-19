 /*
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Real Estate MVP Backend is running!!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

*/



const express = require('express');
const app = express();
const sequelize = require('./config/db');
const listingRoutes = require('./routes/listingRoutes');
const path = require('path');

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/listings', listingRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});


