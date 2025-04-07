const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;