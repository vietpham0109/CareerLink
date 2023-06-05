const router = require('express').Router()
const jobPostCtrl = require('../controllers/jobPostCtrl')
const auth = require('../middleware/auth')

router.post('/create-job', jobPostCtrl.createJob)
router.post('/get-all-job', jobPostCtrl.getAllJob)
router.get('/get-job/:id', jobPostCtrl.getJobById)
router.post('/delete-job', jobPostCtrl.deleteJob)
router.post('/get-jobs-by-company/:id', jobPostCtrl.getJobsbyCompany)
router.post('/update-jobPost', auth, jobPostCtrl.updateJobPost)
router.get('/search-jobPost', jobPostCtrl.searchJob)
router.post('/get-job-saved', jobPostCtrl.getJobSaved)
router.get('/data-chart-job-type/:id', jobPostCtrl.getDataChartPie)


module.exports = router;