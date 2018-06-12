const router = require('express-promise-router')();
const subjects = require('../controllers/subjects');

router.route('/addSubject').post(subjects.addSubject);

module.exports = router;