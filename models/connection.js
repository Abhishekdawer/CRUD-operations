const mongoose  = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CRUD",{useNewUrlParser: true},(error)=>{
   if(!error)
   {
       console.log("Database Connected Successfully..");
   }
   else
   {
       console.log("Error connecting to database!!!");
   }
});

const course = require('./course.model');
