const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const subjectVoteSchema = new mongoose.Schema(
    {
        name:            { type: String, required: true, unique: true },   // Nombre asignatura                    
        concepts:        { type: Number, },
        difficulty:      { type: Number, },                       // Nota media de los contenidos
        relation:        { type: Number, },
        teacher:         { type: Number, },                           // Nota media del profesor
        materials:       { type: Number, },
        professor:       { type: String  }                            // Nota media en relacion del tiempo y la carga de trabajo
    }
);


module.exports = mongoose.model('SubjectVoteSchema', subjectVoteSchema);