var models  = require('../models');
var express = require('express');
var router  = express.Router();

var userController = require('../controllers/user')

router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router;
