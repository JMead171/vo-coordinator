const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Tasks, Messages, Responses, Calendar, Attendees } = require("../models");

router.get('/', (req, res) => {
  //we wrap all this with in if statement ifManager
  User.findAll({
    where: {
      id: req.session.user_id
    },
    //attributes: ['id', 'title', 'created_at',],
    include: [{model: Messages}] //Responses, Calendar, Attendees ]
  })
    .then(dbData => {
      // serialize data before passing to template
      const vocData = dbData.map(data => data.get({ plain: true }));
      console.log("Data: ", vocData);
      console.table(vocData[0].tasks);
      res.render('dashboard', { vocData, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
