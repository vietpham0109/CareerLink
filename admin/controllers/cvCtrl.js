const Users = require('../models/userModel')
const CV = require('../models/cvModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const cvCtrl = {
    createCV: async (req, res) => {
        try {

            const { avatar, fullname, email, dateofBirth, position, phoneNumber, address, descriptionProfile, educations,
                experiences, skill, language } = req.body

            if (!avatar || !fullname || !email || !dateofBirth || !position || !phoneNumber || !descriptionProfile || !skill || !language)
                return res.json({ msg: 'Missing parameter!' })

            const newCV = new CV({
                idCandidate: req.user._id, fullname, email, dateofBirth, avatar, position, phoneNumber, address, descriptionProfile,
                educations, experiences, skill, language
            })
            await newCV.save()
            return res.json({
                msg: 'Create successed'
            })
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    getAllCV: async (req, res) => {
        try {
            const resumes = await CV.find({ idCandidate: req.user._id })


            return res.json(resumes)
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    updateCV: async (req, res) => {
        try {
            const { id, avatar, fullname, email, dateofBirth, position, phoneNumber, address, descriptionProfile, nameSchool,
                major, startDateEducation, endDateEducation, descriptionEducation, nameCompany, positonCompany,
                startDateExperience, endDateExperience, descriptionExperience, skill, language } = req.body

            await CV.findOneAndUpdate({ _id: id }, {
                avatar, fullname, email, dateofBirth, position, phoneNumber, address, descriptionProfile, nameSchool,
                major, startDateEducation, endDateEducation, descriptionEducation, nameCompany, positonCompany,
                startDateExperience, endDateExperience, descriptionExperience, skill, language
            })
            return res.json({ msg: "update success" })
        } catch (err) {
            res.json({ msg: err.message })
        }
    },
    deleteCV: async (req, res) => {
        try {
            const { id } = req.body
            await CV.findOneAndDelete({ _id: id })
            return res.json({ msg: "delete success" })
        } catch (err) {
            return res.json({ msg: err.message })
        }
    }
}


module.exports = cvCtrl