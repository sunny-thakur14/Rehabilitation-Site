const mongoose = require('mongoose')

const Service = mongoose.Schema({
    icon: String,
    title: String,
    desc: String,
    linkText: String,
    actlink: String
})

module.exports = mongoose.model('service', Service)