const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://DeepthiKurup:Guru222@react-boiler-plate.vkxsr.mongodb.net/<dbname>?retryWrites=true&w=majority',
{useNewUrlParser: true}).then(()=>console.log("Connected to DB"))
                        .catch(err=>console.log(err));

app.get('/',function(req,res){
    res.send("Hello Mern Stack");
})




app.listen(5000);