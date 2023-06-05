const router = require('express').Router()
const auth = require("../middleware/auth")
const authCompany = require("../middleware/authCompany")
const submitCtrl = require('../controllers/submitCtrl')

router.post('/submit-cv', auth, submitCtrl.submit)
router.get('/get_submited', auth, submitCtrl.getSubmited)
router.post('/unsubmit_cv', auth, submitCtrl.unsubmit)
router.post('/set_status', submitCtrl.setStatus)
router.get('/get_submited_for_company/:id', submitCtrl.getResumeByIdJob)
router.post('/delete_submit', auth, authCompany, submitCtrl.deleteSubmit)
router.post('/delete_cv', auth, authCompany, submitCtrl.deleteCV)
router.get('/get-status-card/:id', submitCtrl.dataStatus)
router.get('/get-resume-submited-by-month/:id', submitCtrl.dataChartCVSubmitedByMonth)


module.exports = router