const router = require('express').Router()
const industryCtrl = require('../controllers/industryCtrl')


router.post("/create-industry", industryCtrl.createIndustry)
router.get("/get-industry", industryCtrl.getIndustry)

module.exports = router