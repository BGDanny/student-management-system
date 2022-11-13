const asynHandler  = require("express-async-handler");
const Student = require("../models/studentModel");
const Section = require("../models/sectionModel");

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
    Student.findById(req.params.id).populate('sections').exec(function (err, sections)
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

module.exports = {loginStudent, registerStudent, allStudentData, individualStudentData, getEnrolledSections};