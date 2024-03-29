const express = require('express');
const app = express();
require('dotenv').config();

const port = 5000 || process.env.PORT;

const connectDB = require('./config/db');
connectDB();


app.listen(port,() =>{
   console.log(`Listening on Port ${port}`)
})
