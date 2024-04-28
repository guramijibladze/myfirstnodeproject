const { signup } = require('../controller/authController')

const router =require('express').Router()

router.route('/singup').post(signup)
module.exports = router