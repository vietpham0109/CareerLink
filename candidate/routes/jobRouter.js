const router = require('express').Router()
const auth = require("../middleware/auth")
const jobCtrl = require('../controllers/jobCtrl')
const authCompany = require('../middleware/authCompany')
const authAdmin = require('../middleware/authAdmin')


router.post('/create_job', auth, authCompany, jobCtrl.createJob)
router.post('/get_all_job', jobCtrl.getAllJob)
router.post('/get_job_by_type', jobCtrl.getjobByType)
router.get('/search_job', jobCtrl.searchJob)
router.post('/update_job', auth, authCompany, jobCtrl.updateJob)
router.post('/delete_job', auth, authCompany, jobCtrl.deleteJob)
router.post('/delete_company_for_admin', auth, authAdmin, jobCtrl.deleteJobForAdmin)

module.exports = router