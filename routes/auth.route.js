const express = require("express");
const authRouter = express.Router();
const {UserModel} = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

// User Registration.

authRouter.post("/register", async(req, res)=>{
    const {name, email, gender, password, age, city, is_married} = (req.body)

    const user = await UserModel.find({email});
    // console.log(user);
    bcrypt.hash(password, 3, function(err, hash) {

        try {
            if(user.length>0){
                res.status(400).send({message: "User already exist, please login"})
            }
            else {
                const newUser = new UserModel({name, email, gender, password: hash, age, city, is_married});
                newUser.save()
                res.status(200).send({message: "User Registered Successfully!"});
            }
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    });
})

authRouter.post("/login", async(req, res) =>{
    const {email, password} = (req.body);
    const user = await UserModel.find({email});
    bcrypt.compare(password, user[0].password, function(err, result) {
        if(result){
            let token = jwt.sign({password}, email);
            // I am not feeling well
            res.status(200).send({message: "Login Successfully!", token});
        }
        else {
            res.status(400).send({message: "Login Failed!"});
        }
    });

})

module.exports = authRouter