const User = require("../models/userModel")
const Company = require("../models/companyModel")
const jobPost = require("../models/jobPostModel")

const adminCtrl = {
    getCandidate: async (req, res) => {
        try {
            const candidates = await User.find({ role: "candidate" })
            return res.json(candidates)
        } catch (error) {
            return res.json({ msg: error.mesenger })
        }
    },
    getCompany: async (req, res) => {
        try {
            const companies = await Company.find({}).populate({ path: "idCompany" })
            return res.json(companies)
        } catch (error) {
            return res.json({ msg: error.mesenger })
        }
    },
    getJobPost: async (req, res) => {
        try {
            const jobPosts = await jobPost.find({}).populate({ path: "company_info" })
            return res.json(jobPosts)
        } catch (error) {
            return res.json({ msg: error.mesenger })
        }
    }
}

module.exports = adminCtrl;