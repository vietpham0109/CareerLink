const router = require('express').Router()
const resumeCtrl = require('../controllers/resumeCtrl')
const auth = require('../middleware/auth')

router.post("/create-resume", auth, resumeCtrl.createResume);
router.get("/get-list-resume", auth, resumeCtrl.getListResume);
router.get("/get-resume-by-id/:id", auth, resumeCtrl.getResumeById);
router.delete("/delete-resume-by-id/:id", auth, resumeCtrl.deleteResumeById)
router.post("/find-resume", resumeCtrl.findResume)


module.exports = router