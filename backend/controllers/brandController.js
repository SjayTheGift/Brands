const asyncHandler = require('express-async-handler');
const client = require('../db_config');

// @desc Get brands
// @route GET /api/brands
// @access Public
const getBrands = asyncHandler(async (req, res) =>{
    await client.connect();
    await client.query('SELECT * FROM brands', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
    })
});

module.exports = {
    getBrands
}