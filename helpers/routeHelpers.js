const Joi = require ('joi');

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                let type = result.error.details[0].path[0];
                return res.status(400).json( { 'validationError' : type } );
            }

            if (!req.value) { req.value = {}; }
            req.value['body'] = result.value;   
            next();

            // req.value.body instead req.body
        }
    },

    schemas: {
        signUp: Joi.object().keys({ 
            username: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            email: Joi.string().email().required(),
            subjects: Joi.array().items(Joi.string()),
            role: Joi.number().integer(),
            anonymous: Joi.boolean()
        }),
        signIn: Joi.object().keys({
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            username: Joi.string().alphanum().min(3).max(30).required(),
        }),
        addSubjectVote: Joi.object().keys({
            name: Joi.string().alphanum().max(10).required(),
            grade: Joi.number(),
            content: Joi.number(),
            teacher: Joi.number(),
            workload: Joi.number(),
            teachersName: Joi.string().alphanum().min(3).max(30).required(),
        }),
    }
}