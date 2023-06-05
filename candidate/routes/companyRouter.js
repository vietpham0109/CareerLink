const router = require('express').Router()
const auth = require("../middleware/auth")
const companyCtrl = require('../controllers/companyCtrl')
const authCompany = require('../middleware/authCompany')
const authAdmin = require('../middleware/authAdmin')


router.get('/get_info_company', companyCtrl.getInfoCompany)
router.get('/get_top_company', companyCtrl.getTopCompany)
router.get('/get_info_company:id', auth, authCompany, companyCtrl.getInfomationCompany)
router.get('/get_all_company', companyCtrl.getAllCompany)
router.post('/get_company_by_industry', companyCtrl.getCompanyByIndustry)
router.patch('/update_info_company', auth, authCompany, companyCtrl.updateInfoCompany)
router.post('/delete_company', auth, authAdmin, companyCtrl.deleteCompany)
router.get('/get-info-company-by-id/:id', companyCtrl.getInfoCompanyById)
router.post('/update-info-company', auth, companyCtrl.updateCompany)





module.exports = router