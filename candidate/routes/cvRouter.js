const router = require('express').Router()
const auth = require("../middleware/auth")
const cvCtrl = require('../controllers/cvCtrl')

router.post('/create_cv', auth, cvCtrl.createCV)
router.get('/get_all_cv', auth, cvCtrl.getAllCV)

router.patch('/update_cv', auth, cvCtrl.updateCV)
router.patch('/delete_cv', auth, cvCtrl.deleteCV)
// router.get('/search_job', jobCtrl.searchJob)



module.exports = router