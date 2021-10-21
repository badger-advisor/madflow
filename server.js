const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// set up enviromental variables
require('dotenv').config();

const app = express();

var corsOptions = {
  origin : 'http://localhost:8081'
};

app.use(cors(corsOptions));

// To Parse incoming requesrts with JSON payloads
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MadFlow.' });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});

// Connect to mongodb
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

try {
  mongoose.connect(db).then(() => console.log('DB connection successful!'));
} catch (error) {
  console.log('Cannot connect to DB', error);
}
