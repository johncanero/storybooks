const express = require('express');
const dotenv = require('dotenv');

// Load config
dotenv.config({ path: './config/config.ev' })

// 1. Create const app = express()
const app = express();


// 2. Create PORT 3000
const PORT = process.env.port || 3000

// 3 Create app.listen
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))



