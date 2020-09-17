const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/', (req, res) => {
  if(req.session.loggedIn){
    res.render('landing', {loggedIn: true})
  }else{
    res.render('landing');
  }
});

router.get('/newuser', (req,res) => {
  res.render('newuser');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

 
module.exports = router;