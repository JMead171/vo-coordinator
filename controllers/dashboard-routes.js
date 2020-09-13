const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Tasks, Messages, Responses, Calendar, Attendees } = require("../models");

router.get('/dashboard', (req, res) => {
  User.findAll({
    where: {
      id: req.session.user_id
    },
    //attributes: ['id', 'title', 'created_at',],
    include: [{ model: Tasks, Messages, Responses, Calendar, Attendees }]
  })
    .then(dbData => {
      console.log("here" );
      // serialize data before passing to template
      const vocData = dbData.map(data => data.get({ plain: true }));
      console.log("Data: ", vocData);
      res.render('dashboard', { vocData, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;