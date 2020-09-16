const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Tasks, Messages, Responses, Calendar, Attendees } = require("../models");

router.get('/', (req, res) => {
  //we wrap all this with in if statement ifManager
  User.findAll({
    where: {
      id: req.session.user_id
    },
    include: [
      {
        model: Tasks,
        attributes: ['id', 'content', 'isComplete', 'user_id'],
      }]
  })
    .then(dbData => {
      const userData = dbData.map(data => data.get({ plain: true }));
      const taskData = userData[0].tasks
      console.log("Data: ", taskData);
      console.log("Task data: ", taskData[0].content);
      res.render('dashboard', { userData, taskData, loggedIn: true });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;