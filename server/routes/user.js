const express = require('express');
const router = express.Router();

const UserController = require('../controller').userAPI;

router.get('/', UserController.getUserAll);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.post('/find', UserController.getUser);
router.post('/search', UserController.getByUsername);
router.put('/:id', UserController.updateUser);


module.exports = router;