const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema(
    {
        name:            { type: String, required: true, unique: true },
        kpub:            { type: String },
        kpriv:           { type: String },
        professor:       { type: String }
    }
);

module.exports = mongoose.model('Subject', subjectSchema);