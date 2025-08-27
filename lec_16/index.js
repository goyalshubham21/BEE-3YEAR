//mongodb return and saves data in BSON Binary JSON
//mongoose is odm, to connect our server with mongodb
const express = require("express")
const mongoose = require("mongoose")
const app = express();
const Blogs = require("./model/user")
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.post("/blogs",async (req, res) => {
    let { title, body } = req.body
    // console.log(title, body);
    // res.send("Got it")
    let newBlog = new Blogs({
        title: title,
        body: body,
        date: Date.now()
    })
    await newBlog.save()
    res.json({
        success: true,
        data: newBlog,
        message: "Blog added successfully"
    })
})

app.get("/blogs", async (req, res)=>{
    let allblog = await Blogs.find();  // returns all data
    res.json({
        success: true,
        data: allblog
    })
})

app.get("/blogs/:id",async (req,res)=>{
    let {id}= req.params
    let blog = await Blogs.findOne({id:id});
    res.json({
        success:true,
        data:blog
    })
})

app.listen(4445, () => {
    console.log("Server started")
})

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
    .then(() => console.log("Connected!"));