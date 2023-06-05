const router = require('express').Router()
const authCtrl = require('../controllers/authCtrl')
const auth = require('../middleware/auth')

router.post('/register', authCtrl.register)
router.post('/activation', authCtrl.activateEmail)
router.post('/upgrade', auth, authCtrl.upgradeAccount)
router.post('/forgot', authCtrl.forgotPassword)

router.post('/reset', auth, authCtrl.resetPassword)

router.post('/login', authCtrl.login)
router.post('/google_login', authCtrl.googleLogin)

router.post('/logout', authCtrl.logout)

router.post('/refresh_token', authCtrl.generateAccessToken)


module.exports = router