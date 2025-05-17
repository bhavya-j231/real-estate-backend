const Listing = require('../models/listing');
const path = require('path');

exports.createListing = async (req, res) => {
  try {
    const { userName, location, rating } = req.body;
    const imagePath = req.file.path;

    const listing = await Listing.create({
      userName,
      location,
      rating,
      imagePath
    });

    res.status(201).json(listing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getListings = async (req, res) => {
  const listings = await Listing.findAll();
  res.json(listings);
};

exports.getListing = async (req, res) => {
  const listing = await Listing.findByPk(req.params.id);
  if (!listing) return res.status(404).json({ message: 'Not found' });
  res.json(listing);
};
