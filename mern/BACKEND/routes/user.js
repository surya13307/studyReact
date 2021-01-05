const express = require('express')
const router = express.Router();


const { getUserById, getUser, getUsersId } = require('../controllers/user');
const { isSgnedIn, isAuthenticated } = require('../controllers/auth');

router.param('userId', getUserById)

router.get('/user/:userId',isSgnedIn,isAuthenticated,getUser)

router.get('/users',getUsersId)



module.exports = router;
