var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var todoRoutes = require('./routes/todos');


//USING BODY_PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/views'));
app.use("/api/todos",todoRoutes);  //middleware function mounted api/todos path

//Require after the bodyParser else post request won't work 
app.get("/",function(req,res){
   res.sendFile("index.html");
});


app.listen(process.env.PORT||3000,function(){
  console.log("Server Started :)!");
});