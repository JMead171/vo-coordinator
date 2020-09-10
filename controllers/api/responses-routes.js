const router = require('express').Router();
const { User, Tasks, Messages, Responses, Calendar } = require("../../models");
const sequelize = require('../../config/connection');

// get all tasks
router.get('/', (req, res) => {
    Responses.findAll({
        order: [['created_at', 'DESC']],
        // attributes: ['id', 'content', 'isComplete', 'user_id', 'created_at'],
        include: [{ model: Messages }]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/:id', (req, res) => {
    Responses.findOne({
        where: {
            id: req.params.id
        },
        //attributes: ['content', 'isComplete', 'user_id', 'created_at'],
        include: [{ model: Messages }]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No response found with this id' });
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
    Responses.create({
        content: req.body.content,
        sender_id: req.body.sender_id,
        receiver_id: req.body.receiver_id,
        message_id: req.body.message_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.put('/:id', (req, res) => {
    Responses.update(
        {
        content: req.body.content,
        sender_id: req.body.sender_id,
        receiver_id: req.body.receiver_id,
        message_id: req.body.message_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No response found with this id' });
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
    Responses.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No response found with this id' });
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