const asyncHandler = require('express-async-handler');
const Brands = require('../models/brands_models');

// @desc Get brands
// @route GET /api/brands
// @access Public
const getBrands = asyncHandler(async (req, res) =>{
    try {
    const { sort, filter } = req.query;
    const sortOptions = parseSortQuery(sort);
    let brands;

    const isPublished = filter.split(':')[1]
    

    if(isPublished){
        brands = await Brands.findAll({
            order: sortOptions,
            where: {published: true},
        });
    }else{
        brands = await Brands.findAll({
            order: sortOptions,
        });
    }

    const brandsResponses = brands.map(brand => ({
            id: brand.id,
            image_url: brand.image_url.toString('base64'),
            name: brand.name,
            published: brand.published,
        }));

        res.setHeader('Content-Type', 'application/json');
         // Send the images as the response
        res.send(brandsResponses);
    
    } catch (error) {
        console.error('Error retrieving images:', error);
        res.status(500).send('Error retrieving images');
    }

});

// Helper function to parse the sort query
const parseSortQuery = (sortQuery) => {
    if (!sortQuery) {
      return [];
    }
  
    const sortFields = sortQuery.split(',');
  
    return sortFields.map((field) => {
      const parts = field.split(':');
      const attribute = parts[0].trim();
      const order = parts[1] && parts[1].trim().toUpperCase();
  
      return [attribute, order || 'ASC'];
    });
  };

module.exports = {
    getBrands
}