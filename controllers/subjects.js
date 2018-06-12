const Subject = require('../models/subject');

module.exports = {
    addSubject: async (req, res) => {
        //Check if there is a user with the same username
        const foundSubject = await Subject.findOne({ name: req.body.name });
        if(foundSubject) {
            return res.status(403).json({ error : 'This subject is already in use'})
        }
    
        const newSubject= new Subject(req.body);
        let subject = await newSubject.save();
        let subjectId = subject.id;
        res.status(200).json({ subjectId });
    }
}