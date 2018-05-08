const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const subjectSchema = new mongoose.Schema(
    {
        name:            { type: String, required: true, unique: true },   // Nombre asignatura                    
        grade:           { type: Number, default: null },                                 // Nota media asignatura
        content:         { type: Number, default: null },                               // Nota media de los contenidos
        teacher:         { type: Number, default: null },                           // Nota media del profesor
        workload:        { type: Number, default: null },
        teachersName:    { type: String }                            // Nota media en relacion del tiempo y la carga de trabajo
    }
);


module.exports = mongoose.model('Subject', subjectSchema);