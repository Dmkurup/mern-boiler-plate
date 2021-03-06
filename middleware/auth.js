const jwt = require('jsonwebtoken');
const config= require('config');

module.exports= function auth (req,res,next){
 //check if req conatins the jwt token header'
 const token = req.header("x-auth-token");
 if(!token) return res.status(401).send("Access Denied.No token provided");

 // else check if token is valid
 try{
  const decoded = jwt.verify(token,config.get("jwtPrivateKey"));
  req.user=decoded; //now we identify the user
  next();
 }
 catch(ex){
     res.status(400).send("Invalid Token");
 }
}