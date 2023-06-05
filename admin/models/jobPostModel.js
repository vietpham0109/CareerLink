const mongoose = require('mongoose')


const jobPostSchema = new mongoose.Schema({
    job_title: {
        type: String,
        require: true
    },
    job_description: {
        type: String,
        require: true
    },
    job_requirement: {
        type: String,
        require: true
    },
    industry: {
        type: mongoose.Schema.ObjectId, ref: 'industry'
    },
    working_location: { //city 
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    employment_type: { //type of job => part-time, full-time,..
        type: String,
        require: true
    },
    expiring_date: {
        type: String,
        require: true
    },
    benefit: {
        type: String,
        require: true
    },
    working_experience: {
        type: Object
    },
    level: { //intern, fresher, team lead, PM, CEO
        type: String,
        require: true
    },
    image: {
        type: Array
    },
    logo: {
        type: String,
        require: true
    },
    salary: { //{type: "USD/VND", min:100, max 500}
        type: Object,
        require: true
    },
    contact_name: {
        type: Object,
        require: true
    },
    contact_phone: {
        type: Object,
        require: true
    },
    contact_address: {
        type: Object,
        require: true
    },
    contact_email: {
        type: Object,
        require: true
    },
    experience: {
        type: Object
    },
    company_info: {
        type: mongoose.Types.ObjectId, ref: "company"
    },
    idUser: {
        type: mongoose.Types.ObjectId, ref: "user"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('jobPost', jobPostSchema)