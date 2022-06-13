const express = require('express');
// const { router } = require('../app');

const Authcontroller = require('../controller/Authcontroller.js');

const router=express.Router();

router.post('/signup', Authcontroller.signup);
router.post('/login', Authcontroller.login);

module.exports=router;