const router = require('express').Router();
const { response } = require('express');
const sequelize = require('../config/connection');
const { User, Tasks, Messages, Responses, Calendar, Attendees } = require("../models");
let userData = [];
let taskData = [];
let messageData = [];
let meetingData = [];
let nameData = [];
let calendarMeet;


//Remove this later - if NO DATA on Tasks or Mesages or anything we need to error check, trying to display breaks page.
router.get('/', async (req, res) => {
  if(!req.session.loggedIn){
    res.render('/landing');
  }

  try{
    //start by getting tasks for the User
    const dbData = await User.findAll({
      where: {
        id: req.session.user_id
      },
      include: [
        {
          model: Tasks,
          attributes: ['id', 'content', 'isComplete', 'user_id'],
        }]
    });
    
    if(dbData){
    userData = dbData.map(data => data.get({ plain: true }));
    taskData = userData[0].tasks;
    console.log("Data: ", taskData);
    }

    //Get message data
    const msgData = await Messages.findAll({
      order: [['created_at', 'DESC']],
      where: {
        receiver_id: req.session.user_id
      }
    });

    if(msgData){
      messageData = msgData.map(data => data.get({plain: true}));
      console.log("Messages", messageData);
    }

    console.log('tasks: ', taskData.length);
    console.log('messages: ', messageData.length);

    //finds all the meetings where user is attending
    const calendarData = await Attendees.findAll({
      where: {
        user_id: req.session.user_id
      }
    });

    if(calendarData){
      meetingData = calendarData.map(data=> data.get({plain: true}));
      console.table(meetingData);
    }

    const namesData = await User.findAll({
      attributes: ['id', 'first_name', 'last_name']
    });

    nameData = namesData.map(data => data.get({plain: true}));
    // console.log(namesData);
    console.log(nameData);

    const monthlyCalendar = await Calendar.findAll({
      order: [['date', 'ASC']],
      where: {
        owner: req.session.user_id
      }
    });

    calendarMeet = monthlyCalendar.map(data => data.get({plain: true}));
    // Need to convert date here (Jeff)
    console.log("Calendar: ",  calendarMeet);
 
    res.render('dashboard', { userData, taskData, messageData, meetingData, nameData, calendarMeet, loggedIn: true });

  }
  catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;