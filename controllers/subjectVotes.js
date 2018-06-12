const SubjectVote = require('../models/subjectVote');

module.exports = {
    addSubjectVote: async (req, res) => {
        //Check if there is a user with the same username
        const foundSubjectVote = await SubjectVote.findOne({ name: req.body.name });
        if(foundSubjectVote) {
            return res.status(403).json({ error : 'This subjectVote is already voted'})
        }
    
        const newSubjectVote= new SubjectVote(req.body);
        let subjectVote = await newSubjectVote.save();
        let subjectVoteId = subjectVote.id;
        res.status(200).json({ subjectVoteId });
    }
}