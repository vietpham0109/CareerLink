const Industry = require('../models/IndustryModel')

const industryCtrl = {
    createIndustry: async (req, res) => {
        try {
            const { title, description, image, type } = req.body;

            const newIndustry = new Industry({ title, description, image, type })
            await newIndustry.save();
            return res.json({ msg: "Add success" })
        } catch (error) {
            return res.json({ msg: "Add fail!" })
        }
    },
    getIndustry: async (req, res) => {
        try {
            const industries = await Industry.find({})
            return res.json(industries)
        } catch (error) {
            return res.json({ msg: "Get fail!" })
        }
    }
}

module.exports = industryCtrl