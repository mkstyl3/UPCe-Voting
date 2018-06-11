const router = require('express-promise-router')();
const users = require('../controllers/users');
const passport = require('passport');
const passportConfig = require('../passport');
const { validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/signin').post(passport.authenticate('local', { session: false }) , users.signIn);
router.route('/signup').post(users.signUp);
//router.route('/addSubjectVote').post(validateBody(schemas.addSubjectVote), users.addSubjectVote);
//router.route('/getSubjectVotes').get(users.getSubjectVotes);

router.route('/:id').get(passport.authenticate('jwt', { session: false }), users.getUser);
//passport.authenticate('jwt', { session: false })
module.exports = router;