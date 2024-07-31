require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Load MongoDB URI from environment variables
const mongoURI = process.env.MONGODB_URI;
// console.log(mongodb+srv://phanindra0041:sQ5q3LkLGc08erLY@cluster0.fkpejoj.mongodb.net/)

mongoose.connect('mongodb+srv://phanindra0041:GW9xTwo5F7ynwyCc@cluster0.g9ahjdk.mongodb.net/');
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
