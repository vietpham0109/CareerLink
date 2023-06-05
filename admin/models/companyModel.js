const mongoose = require('mongoose')


const companySchema = new mongoose.Schema({
    idCompany: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
        unique: true
    },
    companyName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    contactName: {
        type: String,
        required: true,
    },
    industry: {
        type: String,
        default: ''
    },
    info: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: ''
    },
    logo: {
        type: String,
        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    },
    images: {
        type: String,
        default: ''
    },
    website: {
        type: String,
        default: ''
    },
    phone: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        default: "company"
    },
}, {
    timestamps: true
})


module.exports = mongoose.model('company', companySchema)