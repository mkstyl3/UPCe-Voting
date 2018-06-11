const Vote = require('../models/vote');
const { JWT_SECRET } = require('../configs/keys');
const JWT = require('jsonwebtoken');
const rsa = require('../lib/rsa');
const User = require('../models/user');

/*
    Try-catch blocks are implicit thanks to the express-promise-router lib from routes.users.js//
*/

signToken = user => {
    return JWT.sign({
        iss: 'eetac.upc.cities2',
        sub: user.id,
        user: user.username,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() +1) // Current time +1 day ahead
    }, JWT_SECRET);
};

module.exports = {
    //Función para entrar en el sistema
    signIn: async (req,res,next) => {
        // Generate token
        const token = signToken(req.user);
        res.status(200).json({ token });
    },
    // Inserta un nuevo usuario (username único).
    signUp: async (req, res) => {
        console.log("I'm inside of insertUserToken!");

        //Check if there is a user with the same username
        const foundUser = await User.findOne({ username: req.body.username });
        if(foundUser) {
            return res.status(403).json({ error : 'This username is already in use'})
        }
        /* El constructor no me pilla la lista de asignatura,
           se lo paso manualmente...       
        */
        const newUser = new User(req.body);
        newUser.subjects = req.body.subjects;
        let user = await newUser.save();
        let userId = user.id;
        // Generate the token
        const token = signToken(newUser);
        //respond with a token

        res.status(200).json({ token, userId });
        //res.json(user);

    },
    addSubjectVote: async (req, res) => {
        //Check if there is a user with the same username
        const foundSubjectVote = await Vote.findOne({ name: req.value.body.name });
        if(foundSubjectVote) {
            return res.status(403).json({ error : 'This subjectVote is already in use'})
        }

        const newSubjectVote = new Vote(req.value.body);
        let subjectVote = await newSubjectVote.save();
        let subjectVoteId = subjectVote.id;
        res.status(200).json({ subjectVoteId });
    },

    getSubjectVotes: async (req, res) => {
        Vote.find({}, { __v: false })
            .exec(function (err, subjectsVotes) {
                if (err) {
                    console.log(err);
                    return res.status(202).send({'error': err.getMessage()});  // Devuelve un JSON
                } else {
                    return res.status(200).send(subjectsVotes);                // Devuelve un JSON
        }});
    },

    getSubjects: async (req, res) => {
        const subjects = User.distinct('subjects', {'_id': ObjectId(req.body.id)} );
        res.status(200).json({ subjects });
    },

    getUser: async (req, res) => {
        const foundUser = await User.findOne({ id: req.body.username });
        if(!foundUser) {
            return res.status(404).json({ dbError : 'Not found'})
        }
        foundUser.password = null;
        return res.status(200).json( foundUser );
    }
};