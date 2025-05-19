// importing the listingService module from services
const listingService = require('../services/listingService');

// Handle request to create a new listing
exports.createListing = async (req, res) => {
  try {
    // Extract listing details and image path from the request
    const { userName, location, rating } = req.body;
    const imagePath = req.file.path;

    // Call service to create the listing and send response with created listing
    const listing = await listingService.createListing({ userName, location, rating }, imagePath);
    res.status(201).json(listing);
  } catch (err) {
    // Handle errors and send error response
    res.status(500).json({ error: err.message });
  }
};

// Handle request to get all listings
exports.getListings = async (req, res) => {
  try {
    // Call service to fetch all listings and send them in response
    const listings = await listingService.getAllListings();
    res.json(listings);
  } catch (err) {
    // Handle errors and send error response
    res.status(500).json({ error: err.message });
  }
};

// Handle request to get a single listing by ID
exports.getListing = async (req, res) => {
  try {
    // Call service to find the listing by ID
    const listing = await listingService.getListingById(req.params.id);
    // If not found, send 404 response
    if (!listing) return res.status(404).json({ message: 'Not found' });

    // Send the found listing in response
    res.json(listing);
  } catch (err) {
    // Handle errors and send error response
    res.status(500).json({ error: err.message });
  }
};


// Controller layer - handles incoming HTTP request, extracts necessary data
// calls service layer and sends back HTTP response.. it also handles error responses.