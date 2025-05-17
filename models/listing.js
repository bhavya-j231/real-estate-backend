const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Listing = sequelize.define('Listing', {
  imagePath: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  timeStamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Listing;
