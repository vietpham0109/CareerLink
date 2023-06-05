const submit = require('../models/submitModel')
const jobs = require('../models/jobModel')

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
            const { idJob, idCompany, idCV, dataCV, dateSubmit, endDate } = req.body
            if (new Date(endDate).getTime() < new Date().getTime())
                return res.json({ msg: 'Job expired' })
            if (!idJob || !idCV)
                return res.json({ msg: 'Missing parameter!' })
            // const oldCandidate = await submit.findOne({ idJob: idJob })
            // oldCandidate.cv.map(data => {
            //     console.log(data.idCandidate == req.user._id)
            //     console.log(data.idCandidate)
            //     console.log(req.user._id)
            //     // if (data.idCandidate === req.user._id) {

            //     // }
            //     // return res.json({ msg: 'You has been applied this job' })
            // })
            const job = await jobs.findOne({ _id: idJob })
            const oldSubmit = await submit.findOne({ idJob })
            if (oldSubmit) {
                const arr = oldSubmit.cv.filter(element => element.idCV === idCV)
                if (!arr[0]) {
                    await submit.findOneAndUpdate({ idJob }, {
                        $push: {
                            cv: {
                                'idCV': idCV, 'idCandidate': req.user._id, 'dateSubmit': dateSubmit,
                                'status': 'Waiting', 'dataCV': dataCV, 'fullname': req.user.firstname + ' ' + req.user.lastname, 'point': caculatePoint(job.skill, dataCV.skill)
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
                    'dateSubmit': dateSubmit, 'status': 'Waiting', 'fullname': req.user.firstname + ' ' + req.user.lastname,
                    'dataCV': dataCV, 'point': caculatePoint(job.skill, dataCV.skill)
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
            console.log(idCandidate)
            // const status1 = await submit.findOne({ idJob: idJob, cv: { $elemMatch: { idCV: idCV } } })
            const status1 = await submit.updateOne({ idJob: idJob, cv: { $elemMatch: { idCV: idCV } } }, {
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
    }
}

module.exports = submitCtrl