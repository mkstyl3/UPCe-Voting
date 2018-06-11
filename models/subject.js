const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const subjecSchema = new mongoose.Schema(
    {
        name:            { type: String, required: true, unique: true },
        kpub:            { type: String },
        kpriv:           { type: String },
        professor:       { type: String }

    }
);


module.exports = mongoose.model('SubjectSchema', subjectSchema);