import express from "express"
import dotenv from "dotenv"
dotenv.config()

const port=process.env.PORT || 5000

const app=express()

app.get("/health",(req,res)=>{
   return res.status(200).json({message:"all is good👍"})
})
app.get("/",(req,res)=>{
   return res.status(200).json({message:"hello ayush👍"})
})
// Key-pair is very important to access EC2 instance from local machine
// i.e ham uss ka command apne command prompt pe de sakte hain
// Now if we have changes in the file
// first we have to again commit it i.e push it in the github then in the ubuntu we have to write git pull where we had written git clone url
// (git inbuild hota h docker ko install karna padta hain)
// Then we have stop the container as image has been build earlier so changes wont be seen 
// in the running container(kyunki dockerfile mein apan ne likha copy .. toh pehle toh vo nhi tha(changes) 
// isiliye ab new image se build karna hoga wapis)
// 
app.listen(port,()=>{
    console.log(`server started ${port}`)
})