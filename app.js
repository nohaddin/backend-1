const fs = require("fs")
const express = require("express");

const userData = fs.readFileSync('./data.json');
const users = JSON.parse(userData);
console.log(users);
const app = express()

app.get('/',(req , res)=>{
res.json(users)
})
app.get('/user',(req , res)=>{
res.send("user page")
})

app.listen(7000,()=>{
  console.log("seife calisdi")  
})