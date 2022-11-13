const mongoose = require("mongoose");

    
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    phone_Number: {
        type: String
    },
    address: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    department_id: {
        type: String,
        default: "1121"
    },
    sections: [{
        type: Object,
        ref:'Section',
        default: []
    }],
    fees: {
            tution_Fee: {
                type: String,
                default: " "
            },
            date_of_Receipt: {
                type: Date,
                default: null
        } 
    },
},
    {collection: 'student'}
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;