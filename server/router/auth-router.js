const express = require('express');
const router = express.Router();
const authcontrollers = require('../controller/auth-controller')
const authMiddleware = require('../middleware/auth-middleware')

let User = require('../models/user')



router.route("/").get(authcontrollers.home);
router.route("/register").post( authcontrollers.register);
router.route("/login").post(authcontrollers.login);
router.route("/user").get(authMiddleware, authcontrollers.user)

module.exports = router;