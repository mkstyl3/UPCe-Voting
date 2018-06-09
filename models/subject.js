const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const subjectSchema = new mongoose.Schema(
    {
        name:            { type: String, required: true, unique: true },   // Nombre asignatura                    
        concepts:        { type: Number, default: null },
        difficulty:      { type: Number, default: null },                       // Nota media de los contenidos
        relation:        { type: Number, default: null },
        teacher:         { type: Number, default: null },                           // Nota media del profesor
        materials:       { type: Number, default: null },
        professor:       { type: String }                            // Nota media en relacion del tiempo y la carga de trabajo
    }
);


module.exports = mongoose.model('Subject', subjectSchema);