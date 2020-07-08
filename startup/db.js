const mongoose=require('mongoose');
const config=require('config');

module.exports=function(){
 const mongoDB = config.get('mongoDB');

 mongoose.connect(mongoDB)
         .then(()=>console.log("Connected to mongo db...."))
         .catch(()=>console.error("Could not connect to the db"));
}