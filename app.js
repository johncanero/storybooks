const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/db');


// Load config
dotenv.config({ path: './config/config.env' });

// Passport config
require('./config/passport')(passport);


// connectDB function
connectDB();


// 1. Create const app = express()
const app = express();

// Include morgan to check console and error
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
};

// Create Handlebars to set hbs files
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');


// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }))


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Create a static folder for public and css
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));


// 2. Create PORT 3000
const PORT = process.env.port || 3000

// 3 Create app.listen
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))



