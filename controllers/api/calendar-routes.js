const router = require('express').Router();
const { User, Tasks, Messages, Responses, Calendar } = require("../../models");
const sequelize = require('../../config/connection');

// get all tasks
router.get('/', (req, res) => {
    Calendar.findAll({
        order: [['created_at', 'DESC']],
        // attributes: ['id', 'content', 'isComplete', 'user_id', 'created_at'],
        include: [{ model: User }]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/:id', (req, res) => {
    Calendar.findOne({
        where: {
            id: req.params.id
        },
        //attributes: ['content', 'isComplete', 'user_id', 'created_at'],
        include: [{ model: User }]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No appointment found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/', (req, res) => {
    Calendar.create({
        meeting: req.body.meeting,
        owner: req.body.owner,
        attendees: req.body.attendees

        // Array 
        // if (req.body.attendees.length > 1) {
        //     const attendeesMeetingArr = req.body.attendees.map((attendees) => {
        //     attendees: attendeesMeetingArr
        //     });
        // } else {
        //     attendees: req.body.attendees
        // };      
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.put('/:id', (req, res) => {
    Calendar.update(
        {
        meeting: req.body.meeting,
        owner: req.body.owner,
        attendees: req.body.attendees
     
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No appointment found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Calendar.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No appointment found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;