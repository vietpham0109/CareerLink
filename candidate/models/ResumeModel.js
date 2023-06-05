const mongoose = require('mongoose')

const ResumeSchema = new mongoose.Schema({
    idCandidate: {
        type: mongoose.Types.ObjectId, ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    birth_day: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    work_experience: {
        type: []
    },
    skill: {
        type: []
    },
    education: {
        type: {}
    },
    language: {
        type: []
    },
    hobbies: {
        type: String
    },
    avatar: {
        type: String
    },
    github: {
        type: String
    },
    facebook: {
        type: String
    },
    twitter: {
        type: String
    },
    tags: {
        type: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('resume', ResumeSchema)