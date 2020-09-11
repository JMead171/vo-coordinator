const router = require('express').Router();
const { User, Tasks, Messages, Responses, Calendar, Attendees } = require("../../models");
const sequelize = require('../../config/connection');


//get all
router.get('/', async (req, res) => {
    try{
        const results = await Attendees.findAll({
            order: [['created_at', 'DESC']], 
        });
    res.json(results);

    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

//get all meetings for one user
router.get('/user/:id', async (req, res) => {
    try{
        const results = await Attendees.findAll({
            where: {
                user_id: req.params.id
            }
        });
        res.status(200).json(results)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

//get all attendees for a single meeting
router.get('/meeting/:id', async (req, res) => {
    try{
        const results = await Attendees.findAll({
            where: {
                calendar_id: req.params.id
            }
        });
        res.status(200).json(results)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

//create
router.post('/', async (req, res) => {
    try{
        const results = await Attendees.create(req.body);
        res.status(200).json(results);
    }catch{
        console.log(err);
        res.status(500).json(err);
    }
});


//update 
//none written, no forseen circumstance to modify an existing attendee entry

//deletes a single entry
router.delete('/:id', async (req,res)=> {
    try{
        const results = await Attendees.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send('Single Attendee Deleted');
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

//deletes all attendess for a meeting
router.delete('/meeting/:id', async (req, res) => {
    try{
        const results = await Attendees.destroy({
            where: {
                calendar_id: req.params.id
            }
        });
        res.json(results);
    }catch{
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;