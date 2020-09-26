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


router.post('/', async (req, res) => {
    /* req.body should look like
        meeting: 'description/title of meeting',
        owner: 1, //owner id
        date: date object,
        attendees: [2, 3, 4] //array of integers
     */

    try{
        const results = await Calendar.create(req.body);
        if(req.body.attendees.length) {
            const meetingAttendees = req.body.attendees.map((attendee) => {
                return {
                    user_id: attendee,
                    meeting_id: results.id
                };
            });
            return Attendees.bulkCreate(meetingAttendees);
        }
        res.status(200).json(results);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

// Add meeting to calendar
router.post('/addmeet', async (req, res) => {
    console.log("Add meeting..............................................")
    Calendar.create({
        meeting: req.body.meeting,
        owner: req.session.user_id,
        date: req.body.date    
    })
    .then(dbCalData => res.json(dbCalData))
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