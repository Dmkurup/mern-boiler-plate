const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const {User} = require('./models/user');

const app = express();


mongoose.connect(config.mongoURI,
{useNewUrlParser: true}).then(()=>console.log("Connected to DB"))
                        .catch(err=>console.log(err));


app.use(bodyParser.urlencoded({extended:true})); //not to get any deprecation warning
app.use(bodyParser.json()); // to be able to parse json
app.use(cookieParser());

app.get('/',function(req,res){
    res.json({"Hello" :"Mern Stack"});
})

app.post('/api/users/register',(req,res)=>{
    const user = new User(req.body);
    user.save((err,data)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            userData:data
        })
    });

})


app.listen(5000);