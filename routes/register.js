const {User,validate}=require('../models/user');
const express= require('express');
const router = express.Router();
const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require("bcrypt");
const saltRounds = 10;


router.post('/',async(req,res)=>{

    //check if req body is valid
    const {error}= validate(req.body);
    if(error) return res.status(404).send(error);

    //check if user already exists
    let user = await User.findOne({ email: req.body.email});
    if(user) return res.status(400).send("User already registered");

    //if new user, then add user details from the request body to db
    user =new User(_.pick(req.body,["name","email","password"]));

    //before storing to db lets encrypt the password
    const salt = await bcrypt.genSalt(10);
    user.password= await bcrypt.hash(user.password,salt);

    //now save the record
    await user.save();

    //while registering new user, set the jwt token in the res header so that it can be saved to local storage by the client aka browser

    const token = user.generateAuthToken();

    res.header("x-auth-token",token)  //set the header
       .header("access-control-expose-header","x-auth-token") //expose the header
       .send(_.pick(user,["_id","name","email"]))   //exclude password from the response
    
})

module.exports=router;