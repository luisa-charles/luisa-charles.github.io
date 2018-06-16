const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String },
    image: { type: String },
    text: { type: String },
    type: { type: String },
    materials: { type: String }
});

module.exports = mongoose.model('Project', projectSchema);