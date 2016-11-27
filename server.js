/*jshint esversion: 6*/
var express=require("express");
var app=express();
var script=require("./script.js");
script();
app.listen(3000);
app.use("/",express.static(__dirname))
app.get("/", (req,res)=>{
  res.sendFile(__dirname+"/index.html");
});
