const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/newuser', (req,res) => {
  res.render('newuser');
});

 
module.exports = router;