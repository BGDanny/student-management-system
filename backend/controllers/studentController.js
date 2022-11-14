const asynHandler  = require("express-async-handler");
const Student = require("../models/studentModel");
const Section = require("../models/sectionModel");
const Course = require("../models/courseModel");

const loginStudent = asynHandler(async (req, res) => {

    const {email, password}  = req.body; 
    const userExits = await Student.findOne({email});
    if(userExits)
    {
            let userPassword = userExits.password;
            
            if(password == userPassword)
            {
            res.json({
            found: true
            })
            }
            else
            {
                res.json(
                    {
                        found: false
                    }
                )
            }
    }
    else 
    {
        res.json(
            {
                found: false
            }
        )
    }
});

const registerStudent = asynHandler(async (req, res) => {
    const{name, email, phoneNumber, address, password} = req.body;

    try{
    const student = new Student ({
        name: name,
        email: email,
        phone_Number: phoneNumber,
        address: address,
        password: password
    });

    student.save(function(err)
    {
        if(err)
        {
            res.json({status: "error", error:'Duplicate email'});
        }
        else {
            res.json("created");
        }
    });
  

    }catch(err)
    {
        res.json({status: "error", error:'Duplicate email'});
    }

})

const allStudentData = asynHandler(async (req, res) => {
    const data  = await Student.find();
    res.json(data);
})

const individualStudentData = asynHandler(async (req, res) => {
   Student.findById(req.params.id)
   .then(result => {
    res.status(200).json({
        student:result
    })
   })
   .catch(err => {
    console.log(err);
    res.status(500).json({
        error:err
    })
   })
})

const getEnrolledSections = asynHandler (async (req, res) => {
    Student.findById(req.params.id).populate('sections').exec(async function (err, sections)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(sections.sections);
        }
    })
}) 


const getFees = asynHandler( async (req, res) => {
    Student.findById(req.params.id).exec(function(err, fees)
    {
        if(err)
        {
            res.json(err)
        }
        else 
        {
            res.json(fees.fees);
        }
    })
})


const getCourses = asynHandler(async (req, res) => {
    Student.findById(req.params.id).populate({ path: 'sections', 
        populate:{
            path: 'course_id',
            model: 'Course'
        }}).exec(async function (err, sections)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {   
            const sects = sections.sections;
            const courss = sects.map(obj => obj.course_id);
            res.json(courss);
        }
    })
})

const updateFees = asynHandler(async (req, res) => {
    let id = req.params.id;
    const { fees } = req.body;

    Student.findOneAndUpdate({_id: id}, {$set:{'fees.tution_Fee': fees, 'fees.date_of_Receipt': new Date()}}).exec(function(err)
    {
        if(err)
        {
            res.json(err);
        }
        else 
        {
            res.json("Update Successfull");
        }
    })
}) 


module.exports = {loginStudent, registerStudent, allStudentData, individualStudentData, getEnrolledSections, getFees, getCourses, updateFees};