const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/', (req, res) => {
   console.log("home route is executed......................................");
   res.render('login');
});

module.exports = router;