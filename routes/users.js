const router = require('express-promise-router')();
const users = require('../controllers/users');
const subjects = require('../controllers/subjects');
const passport = require('passport');
const passportConfig = require('../passport');
const { validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/signin').post(passport.authenticate('local', { session: false }) , users.signIn);
router.route('/signup').post(users.signUp);
//router.route('/addSubjectVote').post(validateBody(schemas.addSubjectVote), users.addSubjectVote);
//router.route('/getSubjectVotes').get(users.getSubjectVotes);

router.route('/:id').get(passport.authenticate('jwt', { session: false }), users.getUser);
//passport.authenticate('jwt', { session: false })
router.route('/addSubject').post(subjects.addSubject);
router.route('/vote').post(users.vote);
router.route('/sendBKpub').post(users.receiveBKpub);
module.exports = router;