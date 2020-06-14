const express = require("express");
const User = require("../models/user");
const Note = require("../models/note");

const router =  express.Router();


router.post('/save/:id',async (req, res)=>{

    
    try{

        const user =  await User.findOne({_id: req.params.id});

        if(!user){
            return res.status(400).send({error: 'User not found !'});
        }

        const note = await Note.create({...req.body, user});
        note.save();

        await User.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { notes: note._id} },
            { new: true }
          ).populate("user");

          return res.send({note});

    }catch(err){
        console.log(err);
        return res.status(400).send({ error: "Don't was possible to save this note in database! Please check it out"});
    }

});

router.put('/update/:id',async (req, res)=>{

    
    try{

        const user =  await User.findOne({user: req._id});

        if(!user){
            return res.status(400).send({error: 'User not found !'});
        }

        const note = await Note.create({...req.body, user});
        note.save();

        await User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { notes: note._id} },
            { new: true }
          ).populate("user");

          return res.send({note});

    }catch(err){
        console.log(err);
        return res.status(400).send({ error: "Don't was possible to save this note in database! Please check it out"});
    }

});
router.get('/:id',async (req, res)=>{
 
    try {
        
        const note = await User.findOne({_id: req.params_id}).populate("user");

    }catch(err){
        console.log(err);
        return res.status(400).send({ error: "Don't was possible to save this note in database! Please check it out"});
    }

});


module.exports = app => app.use('/note',router); 