const express = require('express');
const dotenv = require('dotenv');

// Load config
dotenv.config({ path: './config/config.ev' })

const app = express();

const PORT = process.env.port || 3000


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))



