const JobPost = require('../models/jobPostModel')
const Company = require('../models/companyModel')

const jobPostCtrl = {
    createJob: async (req, res) => {
        try {
            const { job_title, job_description, job_requirement, industry, working_location, address, employment_type, expiring_date, benefit, experience, level, image, logo, salary,
                contact_name, contact_address, contact_email, contact_phone, company_id, idUser } = req.body;
            if (!company_id) return res.status(500).json({ msg: "Create fail" })

            const newJob = new JobPost({ job_title, job_description, job_requirement, industry, working_location, address, employment_type, expiring_date, benefit, working_experience: experience, level, image, logo, salary, contact_name, contact_address, contact_email, contact_phone, company_info: company_id, idUser });

            await newJob.save();

            return res.json({ msg: "Create success." })

        } catch (error) {
            return res.status(500).json({ msg: error.msg })
        }
    },
    getAllJob: async (req, res) => {
        try {
            const { page, limit } = req.query;
            if (page && limit) {
                let skip = (page - 1) * limit;
                const totalJob = await JobPost.find({})
                const jobs = await JobPost.find({}).populate(
                    "company_info", "_id companyName logo address working_location"
                ).sort('-createdAt').limit(Number(limit)).skip(skip)
                return res.json({ jobs, total: totalJob.length })
            }
            else {
                const jobs = await JobPost.find({}).populate(
                    "company_info", "_id companName logo address"
                )
                return res.json({ jobs, total: jobs.length })
            }

        } catch (error) {
            return res.status(500).json({ msg: error.msg })
        }
    },
    getJobsbyCompany: async (req, res) => {
        try {
            const { id } = req.params;
            const company = await Company.findOne({ idCompany: id })
            const jobs = await JobPost.find({ company_info: company._id }).populate("industry", "title description").sort('-createdAt')
            return res.json(jobs)
        } catch (error) {
            return res.json(error.msg)
        }
    },
    deleteJob: async (req, res) => {
        try {
            const { id } = req.body;
            await JobPost.findOneAndDelete({ _id: id })
            return res.json({ msg: "Delete success!" })
        } catch (error) {
            return res.status(500).json(error.msg)
        }
    },
    getJobById: async (req, res) => {
        try {
            const { id } = req.params
            const job = await JobPost.findOne({ _id: id })
                .populate("industry", "title description")
                .populate(
                    "company_info", "_id companyName logo address"
                )
            return res.json(job)
        } catch (error) {
            return res.json({ msg: error.msg })
        }
    },
    updateJobPost: async (req, res) => {
        try {
            const { id, benefit, job_description, job_requirement, job_title, expiring_date } = req.body
            await JobPost.findOneAndUpdate({ _id: id }, { benefit, job_description, job_requirement, job_title, expiring_date })
            return res.json({ msg: "Update success!" })
        } catch (error) {
            return res.json({ msg: error.msg })
        }
    },
    searchJob: async (req, res) => {
        try {
            const { search } = req.query;

            if (search) {
                const jobs = await JobPost.find({ job_title: { $regex: search, $options: 'i' } }).populate({ path: "company_info" }).sort('-createdAt')
                // const jobs2 = await JobPost.find({ skill: { $elemMatch: { title: { $regex: req.query.position, $options: 'i' } } } })
                const company = await Company.findOne({ companyName: { $regex: search, $options: 'i' } })
                if (company) {
                    const jobs2 = await JobPost.find({ company_info: company._id }).populate({ path: "company_info" }).sort('-createdAt')
                    if (jobs2.length > 0)
                        return res.json([...jobs2])
                }

                return res.json([...jobs])

            }
            return res.json({ msg: "Not exitst" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getJobSaved: async (req, res) => {
        try {
            const { saved } = req.body;
            console.log(saved)
            const jobs = await JobPost.find({}).populate("company_info")
            const newArr = []
            jobs.map(element => {
                if (saved.includes(element._id.toString()))
                    newArr.push(element)
            })
            return res.json(newArr)
        } catch (error) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getDataChartPie: async (req, res) => {
        try {
            const { id } = req.params

            const jobs = await JobPost.find({ company_info: id })
            let parttime = 0, fulltime = 0, intership = 0, fresher = 0;
            jobs.map(element => {
                switch (element.employment_type) {
                    case 'Full-time':
                        fulltime++
                        break;
                    case 'Part-time':
                        parttime++
                        break;
                    case 'Intership':
                        intership++
                        break;
                    case 'Fresher':
                        fresher++
                        break;
                    default:
                        break;
                }
            })
            return res.json([{ type: 'Part-time', value: parttime }, { type: 'Intership', value: intership }, { type: 'Full-time', value: fulltime }, { type: 'Fresher', value: fresher }])


        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = jobPostCtrl;