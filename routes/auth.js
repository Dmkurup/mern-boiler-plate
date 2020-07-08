const{User}=require('../models/user');
const express=require("express");
const router=express.Router();
const Joi = require('joi');
const bcrypt = require("bcrypt");
const mongoose= require('mongoose');


router.post("/",async(req,res)=>{

    //check if req body is valid
  const {error} = validate(req.body);
  if(error) return res.status(404).send(error);

  //authenticate email
  let user= await User.findOne({email:req.body.email});
  if(!user) return res.status(400).send("Invalid email");

  //verify password
  const validPassword = await bcrypt.compare(req.body.password,user.password);
  if(!validPassword) return res.status(400).send("Invalid password");

  const token = user.generateAuthToken();
  res.send(token); //send back the jwt once logged in

})

function validate(userLoginReq){
    const schema={
        email:Joi.string().min(5).max(255).required().email(),
        password:Joi.string().min(5).max(255).required()
    }
    return Joi.validate(userLoginReq,schema);
    }

    module.exports=router;