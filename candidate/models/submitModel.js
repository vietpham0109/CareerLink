const mongoose = require('mongoose')

const submitSchema = new mongoose.Schema({
    idJob: {
        type: mongoose.Schema.ObjectId, ref: 'jobPost',
        required: true
    },
    cv: {
        type: Array
    },
    idCompany: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("submit", submitSchema)