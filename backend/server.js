const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors')
const app = express()

// app.use(express.json())



app.use(cors());

app.use('/api/brands', require('./routes/brandRoutes'))

app.listen(port, () => console.log('Server started on port', port))