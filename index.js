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

// Add this to test server alive easily
app.get('/', (req, res) => {
  res.send('Server is running!');
});

sequelize.sync()
  .then(() => {
    console.log('Sequelize sync successful');
    app.listen(3000, () => {
      console.log('Server running on http://0.0.0.0:3000');
    });
  })
  .catch(err => {
    console.error('Sequelize sync error:', err);
  });
