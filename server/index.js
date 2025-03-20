const express = require('express');
const connectDB = require('./config/db');
const app = express();
app.use(express.json());

require('dotenv').config();

const port = process.env.PORT

connectDB();

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})