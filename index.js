const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=express();
dotenv.config();
const port=3000;

mongoose.connect='mongodb://localhost:27017/FoodWeb';

const loginSchema=new mongoose.Schema({
    username:String,
    password:String
});

const login=new mongoose.model("login", loginSchema);


app.get("/" ,(req,res) =>{

    res.sendFile(__dirname+ "/mod/index.html")
})

app.post("/register" , async (req,res)=>{

const {username,password}=req.body;
try{
const logindata=new logindata({
    username,
    password
});
await logindata.save();
res.redirect("/success");
}catch{
res.redirect("/fail");
}})

app.get("/success" ,(req,res) =>{
    res.sendFile(__dirname+"/mod/food.html")
})

app.get("/fail" ,(req,res) =>{
    res.sendFile(__dirname+"/mod/index.html")
})


app.listen(port, ()=>{
    console.log("Server is connected")
})
