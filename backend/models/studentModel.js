const mongoose = require("mongoose");


const studentSchema = {
    _id: {
        type: Number
    },
    name: {
        type: String,
    },
    email: {
        type: String
    },
    phone_Number: {
        type: String
    },
    address: {
        type: String
    },
    password: {
        type: String
    },
    department_id: {
        type: String
    },
    sections: [{
        type: Number
    }],
    fees: [{
        _receipt_Number: {
            type: Number
        },
        tution_Fee: {
            type: String
        },
        date_of_Receipt: {
            type: Date
        }
    }]
};

const Student = mongoose.model('Model', studentSchema, 'student');

module.exports = Student;