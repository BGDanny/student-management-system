const asynHandler  = require("express-async-handler");
const Admin = require("../models/adminModel");

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

module.exports = {loginAdmin};