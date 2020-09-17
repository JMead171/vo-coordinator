const router = require('express').Router();
const { User, Tasks, Messages, Responses, Calendar } = require("../../models");
const sequelize = require('../../config/connection');

// get all tasks
router.get('/', (req, res) => {
    Messages.findAll({
        order: [['created_at', 'DESC']],
        // attributes: ['id', 'content', 'isComplete', 'user_id', 'created_at'],
        //include: [{ model: User, Responses }]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/:id', (req, res) => {
    Messages.findOne({
        where: {
            receiver_id: req.params.id
        },
        //attributes: ['content', 'isComplete', 'user_id', 'created_at'],
        include: [{ model: User, Responses }]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No message found with this id' });
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
    Messages.create({
        content: req.body.content,
        sender_id: req.body.sender_id,
        receiver_id: req.body.receiver_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.put('/:id', (req, res) => {
    Messages.update(
        {
        content: req.body.content,
        sender_id: req.body.sender_id,
        receiver_id: req.body.receiver_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No message found with this id' });
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
    Messages.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No message found with this id' });
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