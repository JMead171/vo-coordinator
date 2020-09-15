const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/newuser', (req,res) => {
  res.render('newuser');
});

 
module.exports = router;