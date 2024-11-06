const mongoose = require('mongoose');

const empDetSchema = new mongoose.Schema({
    Empname: {
        type: String,
        required: true,
    },
    EmpId: {
        type: String,
        unique: true,
        required: true,
    },
    Designation: {
        type: String,
        required: true,
    },
    Department: {
        type: String,
        required: true,
    },
    joiningdate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        default: 'Active',
    }
}, { timestamps: true });

module.exports = mongoose.model('empdet', empDetSchema);
