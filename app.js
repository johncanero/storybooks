const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db');


// Load config
dotenv.config({ path: './config/config.env' })

// connectDB function
connectDB();


// 1. Create const app = express()
const app = express();

// morgan console
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
};



// Handlebars Helpers
const {
    formatDate,
    stripTags,
    truncate,
    editIcon,
    select,
  } = require('./helpers/hbs')
  
  // Handlebars
  app.engine(
    '.hbs',
    exphbs({
      helpers: {
        formatDate,
        stripTags,
        truncate,
        editIcon,
        select,
      },
      defaultLayout: 'main',
      extname: '.hbs',
    })
  )
  app.set('view engine', '.hbs')
  




// 2. Create PORT 3000
const PORT = process.env.port || 3000

// 3 Create app.listen
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))



