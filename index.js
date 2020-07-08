const express= require('express');
const app=express();
require('./startup/routes')(app);
require('./startup/db')();


app.get('/',(req,res)=>{
  res.send("Welcome to Mern Stack");
});


const port = process.env.PORT||5000;
const server=app.listen(port,()=>{console.log("Listening to port 5000")});

module.exports=server;
