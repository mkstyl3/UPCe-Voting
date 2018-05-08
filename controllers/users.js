const Subject = require('../models/subject');
const { JWT_SECRET } = require('../configs/keys');
const JWT = require('jsonwebtoken');

//try-catch blocks are implicit thanks to the express-promise-router lib from routes.users.js//

signToken = user => {
    return JWT.sign({
        iss: 'eetac.upc.cities2',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() +1) // Current time +1 day ahead
    }, JWT_SECRET);
};

module.exports = {
    //Función para entrar en el sistema
    signIn: async (req,res,next) => {
        // Generate token
        const token = signToken(req.user);
        res.status(200).json({
            'username': req.user.username,
            'token': token,
            'userId': req.user.id
        });
    },
    // Inserta un nuevo usuario (username único).
    signUp: async (req, res) => {
        console.log("I'm inside of insertUserToken!");

        //Check if there is a user with the same username
        const foundUser = await User.findOne({ username: req.value.body.username });
        if(foundUser) {
            return res.status(403).json({ error : 'This username is already in use'})
        }

        const newUser = new User(req.value.body);
        let user = await newUser.save();
        let userId = user.id;
        // Generate the token
        const token = signToken(newUser);
        //respond with a token

        res.status(200).json({ token, userId });
        //res.json(user);

    },
    addSubject: async (req, res) => {
        
        //Check if there is a user with the same username
        const foundSubject = await Subject.findOne({ name: req.value.body.name });
        if(foundSubject) {
            return res.status(403).json({ error : 'This subject is already in use'})
        }

        const newSubject = new Subject(req.value.body);
        let subject = await newSubject.save();
        let subjectId = subject.id;
        res.status(200).json({ subjectId });
    }
};