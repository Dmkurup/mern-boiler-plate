const express= require('express');
const cors = require('cors');
const register = require('../routes/register');
const auth = require('../routes/auth');

module.exports=function(app){
    app.use(express.json());
    app.use('/api/register',register);
    app.use('/api/auth',auth);
}