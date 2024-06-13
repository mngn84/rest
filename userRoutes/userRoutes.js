const express = require('express');
const router = express.Router();

const listUsers = require('./listUsers');
const createUser = require('./createUser');
const getUser = require('./getUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');

router.get('/users', listUsers);
router.post('/users', createUser);
router.get('/users/*', getUser);
router.put('/users/*', updateUser);
router.delete('/users/*', deleteUser);

module.exports = router

