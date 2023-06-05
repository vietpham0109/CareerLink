const router = require('express').Router()
const auth = require("../middleware/auth")
const authAdmin = require('../middleware/authAdmin')
const userCtrl = require("../controllers/userCtrl")


router.get('/search', auth, userCtrl.searchUser)


router.get('/user/:id', auth, userCtrl.getUser)
router.get('/users', auth, authAdmin, userCtrl.getUserAll)

router.patch('/user', auth, userCtrl.updateUser)
router.patch('/update_role', auth, authAdmin, userCtrl.updateUsersRole)
router.post('/delete', auth, authAdmin, userCtrl.deleteUser)

router.patch('/user/:id/follow', auth, userCtrl.follow)
router.patch('/user/:id/unfollow', auth, userCtrl.unfollow)

router.patch('/user/:id/followcompany', auth, userCtrl.followCompany)
router.patch('/user/:id/unfollowcompany', auth, userCtrl.unFollowCompany)

router.patch('/user/:id/followjob', auth, userCtrl.followJob)
router.patch('/user/:id/unfollowjob', auth, userCtrl.unFollowJob)



router.get('/suggestionsUser', auth, userCtrl.suggestionsUser)







module.exports = router