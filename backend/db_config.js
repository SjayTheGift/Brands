const { Sequelize } = require("sequelize");
const dotenv = require('dotenv').config();

// Connection parameters
const sequelize = new Sequelize(
    process.env.POSTGRESQL_DB_URI, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD,  
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
    }
  );

// Test connection
const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
};


module.exports = { sq: sequelize, testDbConnection };