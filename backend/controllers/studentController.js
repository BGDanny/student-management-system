const asynHandler  = require("express-async-handler");
const Student = require("../models/studentModel");
const Section = require("../models/sectionModel");
const Course = require("../models/courseModel");
const Post = require("../models/postModel");

const loginStudent = asynHandler(async (req, res) => {

    const {email, password}  = req.body; 
    const userExits = await Student.findOne({email});
    if(userExits)
    {
            let userPassword = userExits.password;
            let userId = userExits.id;
            console.log(userId);
            if(password == userPassword)
            {
            res.json({
            found: true,
            id: userId
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
    Student.findById(req.params.id).populate({path:'sections', model: 'Section', populate: {
            path: 'course_id', model: 'Course'
    }}).exec(async function (err, sections)
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

const getGrades = asynHandler(async (req, res) => {
    console.log(req.params.id);
    Student.findById(req.params.id).populate({ path: 'Grades', 
        populate:{
            path: 'course_id',
            model: 'Course'
        }}).exec(async function (err, grades)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {   
            res.json(grades.Grades);
        }
    })
}) 


const searchCourse = asynHandler(async (req, res) => {
    let nm = req.params.name

    Course.findOne({course_Name: nm}).exec(async function (err, course)
    {
        if(err)
        {
            console.log(err);
        }
        else if(course == null)
        {
            res.json(null);
        }   
        else{   
                const courseId = course._id;

            Section.findOne({course_id: courseId}).populate('course_id').exec(async function (err, section) {
                if(err)
                {
                    res.json(err);
                }
                else
                {   
                    console.log(section);
                    res.json(section);
                }
            })
        }
    })
    
}) 


const addCourse = asynHandler( async (req, res) => {
    Student.findOneAndUpdate({_id: req.params.id}, {$push: {sections: req.body.section}}).exec(async function(err)
    {
        if(err)
        {
            res.json(err);
        }
        else 
        {
            Section.findOneAndUpdate({_id: req.body.section}, {$push: {students_id: req.params.id}}).exec(async function(err)
            {
                if(err)
                {
                    res.json(err);
                }
                else 
                {
                    res.json("added Successfully");
                }
            })
        }
    })
})

const removeCourse = asynHandler(async (req, res) => {
    Student.findOneAndUpdate({_id: req.params.id}, {$pull: {sections: req.body.section}}).exec(async function(err)
    {
        if(err)
        {
            res.json(err);
        }
        else 
        {
            Section.findOneAndUpdate({_id: req.body.section}, {$pull: {students_id: req.params.id}}).exec(async function(err)
            {
                if(err)
                {
                    res.json(err);
                }
                else 
                {
                    res.json("removed Successfully");
                }
            })
        }
    })
})


const replyPost = asynHandler(async (req, res) => {
    console.log(req.params.id);
    const postID = req.params.id;
    Post.findOneAndUpdate({_id: req.params.id}, {$push: {replies: req.body.content}}).exec(async function(err)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            const PostExits = await Post.findOne({_id: postID});
            console.log(PostExits);
            if(PostExits)
            {
            res.json("Reply Added Successfully");
            }
            else
            {
            res.json("Post doesnot exits");
            }
        }
    })
})


const allPosts = asynHandler(async (req, res) => {
    const data = await Post.find();
    console.l
    res.json(data);
})



const createPost = asynHandler(async (req, res) => {
    const { id, post_title, post_description } = req.body;

    try {
        const post = new Post({
            _id: id,
            post_title: post_title,
            post_description: post_description,
            replies: []
        })
        console.log(post);
        post.save(function (err) {
            if (err) {
                res.json({ status: "error", error: 'Error posting' });
            }
            else {
                res.json("created post");
            }
        });
    } catch (err) {
        res.json({ status: "error", error: 'Error posting' });
    }
})


const editStudent = asynHandler(async (req, res) => {
    console.log(req.params.id);
    const {phoneNumber, address} = req.body;
    if(phoneNumber.length == 0)
    {   
        Student.findOneAndUpdate({ _id: req.params.id }, { $set: {'address': address } }).exec(async function (err) {
            if (err) {
                res.json(err);
            }
            else {
    
                res.json("Edit Address Successfully");
    
            }
        })
    }

    if(address.length == 0)
    {
        if(phoneNumber.match("[0-9]+") && phoneNumber.length == 10)
        {
        Student.findOneAndUpdate({ _id: req.params.id}, { $set: {'phone_Number': phoneNumber} }).exec(async function (err) {
            if (err) {
                res.json(err);
            }
            else {
    
                res.json("Edit Phone Number Successfully");
    
            }
        })
        }
        else 
        {
            res.json("Inavlid Phone Number");
        }

    }

    if(address.length != 0 && phoneNumber.length != 0)
    {
        if(phoneNumber.match("[0-9]+") && phoneNumber.length == 10)
        {
            Student.findOneAndUpdate({ _id: req.params.id }, { $set: { 'phone_Number': phoneNumber, 'address': address } }).exec(async function (err) {
        if (err) {
            res.json(err);
        }
        else {

            res.json("Edit Address and Phone Number Successfully");

        }
    })}
    else 
    {
        res.json("Inavlid Phone Number");
    }
}
})


const editStudentPassword = asynHandler(async (req, res) => {
    const {password} = req.body;
    if(password.length >= 7)
    {
    Student.findOneAndUpdate({ _id: req.params.id}, { $set: {'password': password} }).exec(async function (err) {
        if (err) {
            res.json(err);
        }
        else {
            res.json("Password Changed Successfully");
        }
    })
    }
    else if(password.length < 7)
    {
        res.json("Password must be at least 7 character's long");
    }
    else if(password.length == 0)
    {
        res.json("Empty Password, Please enter the password again");
    }
        
});

const addGrades = asynHandler(async (req, res) => {
    Student.findOneAndUpdate({ _id: req.params.id }, { $push: {Grades: { 'letter_grade': req.body.letter_grade, course_id: req.body.course_id } } }).exec(async function (err) {
        if (err) {
            res.json(err);
        }
        else {
            res.json("added grade successfully");
        }
    })
})





module.exports = { loginStudent, registerStudent, allStudentData, individualStudentData, getEnrolledSections, getFees, getCourses, updateFees, getGrades, searchCourse, addCourse, removeCourse, replyPost, allPosts, createPost, editStudent, addGrades, editStudentPassword};