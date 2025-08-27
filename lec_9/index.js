const fs= require("fs")
const express = require("express")
const app = express();

app.use(express.json());

app.post("/users",(req,res)=>{
    let allUser=[];
    // console.log(req.body);
    let name = req.body.name;
    let age = req.body.age;
    let user ={name, age};
    fs.readFile("./userdata.json","utf-8",function(err,data){
        if(err) return res.json({
            error:err
        })
        if(data && data.length>0){
            allUser = JSON.parse(data);
        }
        allUser.push(user);
        fs.writeFile("userdata.json", JSON.stringify(allUser),function(err){
            if(err) return res.send(err);
        })
    })
    res.json({
        name:name,
        password:password
    })
})

app.listen(3000,()=>{
    console.log("server started");
})



