const asynHandler  = require("express-async-handler");
const Student = require("../models/studentModel");

const loginStudent = asynHandler(async (req, res) => {

    const {email, password}  = req.body;
   
   const userExits = await Student.findOne({email});

    if(userExits)
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
});



module.exports = {loginStudent};