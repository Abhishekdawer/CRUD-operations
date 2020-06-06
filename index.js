const connection = require('./models/connection');
const express = require('express');
const app = express();
const path = require('path');
const expressHandleBars = require('express-handlebars');
const bodyParser = require('body-parser');
const CourseController = require("./controllers/courses");


app.use(bodyParser.urlencoded({
extended:true
}));

app.set('views',path.join(__dirname,"/views/"));
app.engine("hbs",expressHandleBars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname+"/views/layouts"
}));

app.set("view engine","hbs");

app.get("/", (req,res)=>{
  //  res.send('<h1> Hello World!</h1>');
  res.render("index",{});
});


app.use("/course",CourseController);

app.listen("3000",() =>{
    console.log("server started..");
});
