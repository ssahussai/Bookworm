const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

/*---------- Protected Routes ----------*/
router.get('/:id/books', usersCtrl.getBooks);
router.post('/:id/books', usersCtrl.addbook);
// router.delete('/:id/books', usersCtrl.deleteBook);



module.exports = router;