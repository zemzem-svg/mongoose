const express = require('express')
const userRouter = express.Router();
const User = require('../models/User');
//POST A VEW USER
userRouter.post("/add", async(req, res)=> {
    try {
        const newUser = new User(req.body);
        let result = await newUser.save();
        res.send({ user: result, msg: "user is added" });
        
    } catch (error) {
        console.log(error);
    }
})

//GET ALL USERS
userRouter.get("/", async (req, res) => {
    try {
        let result = await User.find();
        res.send({users:result, msg: "all users"});
    } catch (error) {
        console.log(error)
    }
})
//GET USER BY ID

//DELETE USER BY ID

//UPDATE USER

module.exports = userRouter;