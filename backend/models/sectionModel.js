const mongoose = require("mongoose");

    
const sectionSchema = new mongoose.Schema({
    _id:{
        type: Object
    },
    year: {
        type: Number,
        required:true
    },
    instructor: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required:true
    },
    students_id: [{
        type: Object,
        ref: 'Student'
    }],
    course_id: {
        type: Number,
        ref: 'Course'
    },
},
    {collection: 'section'}
);

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;