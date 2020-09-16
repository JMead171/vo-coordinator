const router = require('express').Router();
const { User, Tasks, Messages, Responses, Calendar } = require("../../models");
const sequelize = require('../../config/connection');

// get all tasks
router.get('/', (req, res) => {
    Tasks.findAll({
        order: [['created_at', 'DESC']],
        // attributes: ['id', 'content', 'isComplete', 'user_id', 'created_at'],
        //include: [{ model: User, Messages, Responses, Calendar }]
    })
        .then(dbTaskData => res.json(dbTaskData))
            console.log("Tasks: ", dbTaskData)
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/:id', (req, res) => {
    Tasks.findOne({
        where: {
            id: req.params.id
        },
        //attributes: ['content', 'isComplete', 'user_id', 'created_at'],
        include: [{ model: User, Messages, Responses, Calendar }]
    })
        .then(dbTaskData => {
            if (!dbTaskData) {
                res.status(404).json({ message: 'No task found with this id' });
                return;
            }
            res.json(dbTaskData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/', (req, res) => {
    Tasks.create({
        content: req.body.content,
        isComplete: req.body.isComplete,
        user_id: req.session.user_id
    })
        .then(dbTaskData => res.json(dbTaskData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.put('/:id', (req, res) => {
    Tasks.update(
        {
            content: req.body.content,
            isComplete: req.body.isComplete,
            user_id: req.session.user_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbTaskData => {
            if (!dbTaskData) {
                res.status(404).json({ message: 'No task found with this id' });
                return;
            }
            res.json(dbTaskData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Tasks.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbTaskData => {
            if (!dbTaskData) {
                res.status(404).json({ message: 'No task found with this id' });
                return;
            }
            res.json(dbTaskData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;