const submit = require('../models/submitModel')
const jobs = require('../models/jobModel')
const JobPost = require('../models/jobPostModel')


const caculatePoint = (dataJob, dataCV) => {
    let point = 0;
    dataCV.map(element => {
        dataJob.map(data => {
            if (element.title === data.title) {
                point = point + element.point * data.point
            }
        })
    })
    return point;
}

const submitCtrl = {
    submit: async (req, res) => {
        try {
            const { idJob, idCompany, idCV, dataCV, dateSubmit } = req.body
            const job = await JobPost.findOne({ _id: idJob })
            const oldSubmit = await submit.findOne({ idJob })
            if (oldSubmit) {
                const arr = oldSubmit.cv.filter(element => element.idCV === idCV)
                if (!arr[0]) {
                    await submit.findOneAndUpdate({ idJob }, {
                        $push: {
                            cv: {
                                'idCV': idCV, 'idCandidate': req.user._id, 'dateSubmit': dateSubmit,
                                'status': 'Waiting', 'dataCV': dataCV
                                // 'fullname': req.user.firstname + ' ' + req.user.lastname, 'point': caculatePoint(job.skill, dataCV.skill)
                            }
                        }
                    })

                    return res.json({ newSubmit: { idCompany, idCV, idJob }, msg: 'submit success!' })
                }
                else {
                    return res.json({ msg: 'Your CV has been submitted' })
                }
            }

            const newSubmit = new submit({
                idJob, idCompany, cv: {
                    'idCV': idCV, 'idCandidate': req.user._id,
                    'dateSubmit': dateSubmit, 'status': 'Waiting', 'dataCV': dataCV
                    // , 'fullname': req.user.firstname + ' ' + req.user.lastname,
                    // 'dataCV': dataCV, 'point': caculatePoint(job.skill, dataCV.skill)
                }
            })
            await newSubmit.save()
            return res.json({ newSubmit: { ...newSubmit._doc, user: req.user }, msg: 'submit success!' })

        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    getSubmited: async (req, res) => {
        try {
            const submited = await submit.find({ cv: { $elemMatch: { idCandidate: req.user._id } } })
                .populate({
                    path: "idJob",
                    populate: {
                        path: "company_info"
                    }
                })


            res.json(submited)
        } catch (err) {
            return res.json({ msg: err.message })
        }

    },
    getSubmitedForCompany: async (req, res) => {
        try {
            const submited = await submit.find({ idCompany: req.user._id })
            res.json(submited)
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    unsubmit: async (req, res) => {
        try {
            const { idJob } = req.body

            await submit.findOneAndUpdate({ idJob: idJob }, {
                $pull: { cv: { idCandidate: req.user._id } }
            })
            return res.json({ msg: 'Unsubmit success!!' })
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    setStatus: async (req, res) => {
        try {
            const { idJob, idCV, status, idCandidate } = req.body
            await submit.updateOne({ idJob: idJob, cv: { $elemMatch: { idCV: idCV } } }, {
                $set: { "cv.$.status": status }
            })
            return res.json({ msg: "Success", status, idCandidate, idJob })
        } catch (err) {
            return res.json({ msg: err.message })
        }

    },
    deleteSubmit: async (req, res) => {
        try {
            const { id } = req.body
            await submit.findOneAndDelete({ idJob: id })
            return res.json({ msg: 'success' })
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    deleteCV: async (req, res) => {
        try {
            const { idJob, idCV } = req.body
            await submit.findOneAndUpdate({ idJob: idJob }, {
                $pull: { cv: { idCV: idCV } }
            })
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    getResumeByIdJob: async (req, res) => {
        try {
            const { id } = req.params;
            const submits = await submit.findOne({ idJob: id })
            return res.json(submits.cv)
        } catch (error) {
            return res.json({ msg: error.msg })
        }
    },
    dataStatus: async (req, res) => {
        try {
            const { id } = req.params
            const submits = await submit.find({ idCompany: id })
            let count = 0
            submits.map(element => count += element.cv.length)
            return res.json({ count })
        } catch (error) {
            return res.json({ msg: error.msg })
        }
    },
    dataChartCVSubmitedByMonth: async (req, res) => {
        try {
            const data = [
                {
                    month: 'Feb',
                    resume: 0,
                },
                {
                    month: 'Feb',
                    resume: 0,
                },
                {
                    month: 'Mar',
                    resume: 0,
                },
                {
                    month: 'Apr',
                    resume: 0,
                },
                {
                    month: 'May',
                    resume: 0,
                },
                {
                    month: 'Jun',
                    resume: 0,
                },
                {
                    month: 'Jul',
                    resume: 0,
                },
                {
                    month: 'Aug',
                    resume: 0,
                },
                {
                    month: 'Sep',
                    resume: 0,
                },
                {
                    month: 'Oct',
                    resume: 0,
                },
                {
                    month: 'Nov',
                    resume: 0,
                },
                {
                    month: 'Dec',
                    resume: 0,
                }
            ];

            const { id } = req.params;
            const submits = await submit.find({ idCompany: id })

            let totalResume = []
            submits.map(element => {
                totalResume = [...totalResume, ...element.cv]
            })
            totalResume.map(element => {
                let d = new Date(element.dateSubmit)
                let month = parseInt(d.getMonth())
                data[month]['resume'] = data[month]['resume'] + 1
            })
            return res.json(data)
        } catch (error) {
            return res.json({ msg: error.msg })
        }
    }
}

module.exports = submitCtrl