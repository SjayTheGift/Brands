const { sq } = require('../db_config');
const { DataTypes } = require("sequelize");


// Creating Model for the brands

const Brands = sq.define("brands", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    image_url: {
      type: DataTypes.BLOB('long'),
    },
  
    name: {
      type: DataTypes.STRING,
    },
  
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
});

module.exports = Brands;