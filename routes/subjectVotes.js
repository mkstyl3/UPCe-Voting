const router = require('express-promise-router')();
const subjectVotes = require('../controllers/subjectVotes');

router.route('/addSubjectVote').post(subjectVotes.addSubjectVote);

module.exports = router;