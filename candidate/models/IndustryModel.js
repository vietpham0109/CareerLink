const mongoose = require('mongoose')

const industrySchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('industry', industrySchema)