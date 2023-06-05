const mongoose = require('mongoose')

const cvSchema = new mongoose.Schema({

    idCandidate: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    //profile
    avatar: {
        type: String
    },
    fullname: {
        type: String,
        default: ''
    },
    email: {
        type: String,
    },
    dateofBirth: {
        type: Date
    },
    images: {
        type: String
    },
    position: { //vi tri ung tuyen
        type: String
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    descriptionProfile: {
        type: String,
        default: '',
        maxlength: 200
    },
    //Education Details
    // nameSchool: {
    //     type: String,
    // },
    // major: {
    //     type: String,
    // },
    // startDateEducation: {
    //     type: Date
    // },
    // endDateEducation: {
    //     type: Date
    // },
    // descriptionEducation: {
    //     type: String,
    //     default: '',
    //     maxlength: 200
    // },
    educations: {
        type: Array
    },

    //Experience Details

    // nameCompany: {
    //     type: String,
    // },
    // positonCompany: {
    //     type: String,
    // },
    // startDateExperience: {
    //     type: Date
    // },
    // endDateExperience: {
    //     type: Date
    // },
    experiences: {
        type: Array
    },
    descriptionExperience: {
        type: String,
        default: '',
        maxlength: 200
    },
    skill: {
        type: Array,
    },
    language: {
        type: Array,
    },

}, {
    timestamps: true
})

module.exports = mongoose.model("cv", cvSchema)