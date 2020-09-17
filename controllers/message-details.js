const router = require('express').Router();
const { response } = require('express');
const sequelize = require('../config/connection');
const { User, Tasks, Messages, Responses, Calendar, Attendees } = require("../models");
let messages = [];
let users = [];
let msgId = 0;

router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            const results = await Messages.findAll({
                where: {
                    receiver_id: req.session.user_id
                },
                include: [
                    {
                        model: Responses
                    }
                ]
            });

            if(results){
                messages = results.map(data => data.get({plain: true}));
                console.log(messages);
            }


            const userData = await User.findAll();

            if(userData){
                let temp = userData.map(data => data.get({plain: true}));
                
                for(let i = 0; i < temp.length; i++){
                    users.push(temp[i].first_name + ' ' + temp[i].last_name);
                }
                console.table(users);
            }


            res.render('message-details', { users, messages, loggedIn: true });
        }
        else {
            res.render('landing');
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }


});


router.get('/:id', async (req, res) => {
   
    let msgId = req.params.id;
    try{
        if(!req.session.loggedIn){
            res.render('landing');
        }

        const messageData = await Messages.findOne({
            where: {
                id: msgId
            },
            include: [ {model: Responses}]
        });

        

        if(messageData){
            
            messages = messageData.get({plain: true});
            console.log(messages);
        }

        res.render('message-details', {messages, loggedIn: true});

    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }


    
});


module.exports = router;