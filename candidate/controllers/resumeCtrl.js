const Resume = require('../models/ResumeModel')


const resumeCtrl = {
    createResume: async (req, res) => {
        try {
            const { title, first_name, last_name, phone, birth_day, country, language,
                email, city, address, overview, work_experience, skill, education, hobbies,
                avatar, facebook, github, twitter, tags } = req.body
            const newResume = new Resume({
                title, first_name, last_name, phone, birth_day, country, language,
                email, city, address, overview, work_experience, skill, education,
                hobbies, avatar, idCandidate: req.user._id, facebook, github, twitter, tags
            });
            await newResume.save();
            return res.json({ msg: "Create success" })
        } catch (error) {
            return res.json({ msg: error.msg })
        }
    },
    getListResume: async (req, res) => {
        try {
            const resumes = await Resume.find({ idCandidate: req.user._id })
            return res.json([...resumes])
        } catch (error) {
            return res.json({ msg: error.msg })
        }
    },
    getResumeById: async (req, res) => {
        try {
            const { id } = req.params;
            const resume = await Resume.findOne({ _id: id })
            return res.json(resume)
        } catch (error) {
            return res.json({ msg: error.msg })
        }
    },
    deleteResumeById: async (req, res) => {
        try {
            const { id } = req.params;
            const resume = await Resume.findOneAndDelete({ _id: id })
            return res.json({ msg: "Delete success" })
        } catch (error) {
            return res.json({ msg: error.msg })
        }
    },
    findResume: async (req, res) => {
        try {
            const { tag, location } = req.body;
            if (location && location !== "All location") {
                const resumes = await Resume.find({ tags: { $elemMatch: { $regex: tag, $options: 'i' } }, city: { $regex: location, $options: 'i' } })
                return res.json(resumes)
            }
            const resumes = await Resume.find({ tags: { $elemMatch: { $regex: tag, $options: 'i' } } })
            return res.json(resumes)
        } catch (error) {
            return res.json({ msg: error.msg })
        }
    }
}

module.exports = resumeCtrl;