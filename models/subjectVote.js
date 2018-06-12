const mongoose = require('mongoose');

const subjectVoteSchema = new mongoose.Schema(
    {
        name:            { type: String, required: true, unique: true },
        conceptsList:    [{type:Number}],
        difficultyList:  [{type:Number}],
        relationList:    [{type:Number}],
        teacherList:     [{type:Number}],
        materialsList:   [{type:Number}]

    }
);


module.exports = mongoose.model('SubjectVote', subjectVoteSchema);