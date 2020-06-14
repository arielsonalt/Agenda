const mongoose = require('../../database/dbConnection');

const NoteSchema = new mongoose.Schema({
    text:{
        type: String,
        select: true,
        require: true
    },
    user:[{
        type: mongoose.Schema.Types.ObjectId,
        select: true,
        require: true
    }],
    createAt:{
        type:String,
        default: Date.now,
    }

});

const note = mongoose.model('note', NoteSchema,'notes');

module.exports = note;