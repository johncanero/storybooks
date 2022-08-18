const express = require('express');
const router = express.Router();


// @description: Login/Landing Page
// @route: GET /
router.get('/', (req, res) => {
    res.send('Login')
});


// @description: Dashboard
// @route: GET /dashboard
router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
});




module.exports = router