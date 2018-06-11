const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const voteSchema = new mongoose.Schema(
    {
        name:            { type: String, required: true, unique: true },   // Nombre asignatura                    
        concepts:        { type: Number, },
        difficulty:      { type: Number, },                                 // Nota media de los contenidos
        relation:        { type: Number, },
        teacher:         { type: Number, },                                 // Nota media del profesor
        materials:       { type: Number, },
        professor:       { type: String  },    
        kpub:            { type: String  },
        kpriv:           { type: String  }              
    }
);

module.exports.schema = voteSchema;
module.exports = mongoose.model('Vote', voteSchema);
