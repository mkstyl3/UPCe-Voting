const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const subjectVoteSchema = new mongoose.Schema(
    {
        name:            { type: String, required: true, unique: true },
        concepts:        { type: Number },
        difficulty:      { type: Number },
        relation:        { type: Number },
        teacher:         { type: Number },
        materials:       { type: Number },
        conceptsList:    [{type:Number}],
        difficultyList:  [{type:Number}],
        relationList:    [{type:Number}],
        teacherList:     [{type:Number}],
        materialsList:   [{type:Number}]

    }
);


module.exports = mongoose.model('SubjectVoteSchema', subjectVoteSchema);