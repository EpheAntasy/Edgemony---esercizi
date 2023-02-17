const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

const subrscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
    dateSub: {
        type: Date,
        required: true,
        default: Date.now()
    }

})

module.exports = mongoose.model('subscriber', subrscriberSchema)