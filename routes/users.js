const router = require('express-promise-router')();
const users = require('../controllers/users');
const passport = require('passport');
const { validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/signin').post(validateBody(schemas.signIn), passport.authenticate('local', { session: false }) , users.signIn);
router.route('/signup').post(validateBody(schemas.signUp), users.signUp);


module.exports = router;