const router = require('express').Router()
const adminCtrl = require('../controllers/adminCtrl')

router.get("/get-candidate", adminCtrl.getCandidate)
router.get("/get-company", adminCtrl.getCompany)
router.get("/get-jobPost", adminCtrl.getJobPost)



module.exports = router