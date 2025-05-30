const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require('./config/db');
const listingRoutes = require('./routes/listingRoutes');
const path = require('path');
const cors = require('cors');

app.use(cors({
  origin: 'http://3.109.123.88', // replace with your actual EC2 public IP or domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/listings', listingRoutes);

app.get('/', (req, res) => {
  res.send('Real Estate MVP Backend is running!!');
});

sequelize.sync()
  .then(() => {
    console.log('Sequelize sync successful');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://0.0.0.0:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Sequelize sync error:', err);
  });
