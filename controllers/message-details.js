const router = require('express').Router();
const { response } = require('express');
const sequelize = require('../config/connection');
const { User, Tasks, Messages, Responses, Calendar, Attendees } = require("../models");

router.get('/', async (req, res)=> {

    res.render('message-details');
});


module.exports = router;