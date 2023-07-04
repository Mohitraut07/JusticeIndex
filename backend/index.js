// Required Modules
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT||5000

const cors = require('cors');
app.use(cors());
// Using json to be able to send json 
app.use(express.json());

// login route
const login = require('./api/login.js')
// Display top 10 Criminals route
const topCriminals = require('./api/topCriminals.js')
// Display all Criminals route
const criminals = require('./api/Criminals.js');
// Add more Criminals route
const addCriminal = require('./api/addCriminal.js');

// using the routes
app.use('/login',login)
app.use('/topCriminals',topCriminals);
app.use('/criminals',criminals);
app.use('/addCriminal',addCriminal);

// Listenning to localhost 5000 Port
app.listen(PORT, () => {
   console.log(`listening on ${PORT}`);
});

