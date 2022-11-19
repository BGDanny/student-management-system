const asynHandler  = require("express-async-handler");
const Admin = require("../models/adminModel");
const Section = require("../models/sectionModel");

const loginAdmin = asynHandler(async (req, res) => {

    const {email, password}  = req.body; 
    const userExits = await Admin.findOne({email});
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

const addSection = asynHandler(async (req, res) => {
    const{id, year,semester, instructor, day, courseId} = req.body;

    try{
        const section = new Section ({
            _id: id,
            year: year,
            semester: semester,
            instructor: instructor,
            day: day,
            students_id: [],
            course_id: courseId
        })
        console.log(section);
    section.save(function(err)
    {
        if(err)
        {
            res.json({status: "error", error:'Duplicate section'});
        }
        else {
            res.json("created");
        }
    });
    }catch(err)
    {
        res.json({status: "error", error:'Duplicate section'});
    }
})


module.exports = {loginAdmin, addSection};