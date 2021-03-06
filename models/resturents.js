var mongoose = require('mongoose');

var resturentsSchema = new mongoose.Schema({

    id: {type:[Number]},
    name: {type: String, default: ''},
    discription: {typr: String, default: ''},
    longitude: { type: String, default: ''},
    latitude: { type: String, default: ''},
    img: { data: Buffer, contentType: String },
    rating: {type: String, default: ''},
    waittime: {type: String, default: ''},
    date:{type: String, default:Date.now},

})

module.exports = mongoose.model('resturentsSchema', resturentsSchema)