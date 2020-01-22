const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/:id/books', usersCtrl.getBooks);
router.post('/:id/books', usersCtrl.addbook);


/*---------- Protected Routes ----------*/


module.exports = router;