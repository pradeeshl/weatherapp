const express=require("express");
const app=express();
const path=require("path");
const bodyparser=require("body-parser");
//const dbo=require('./db)
// home page middleware
app.use('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','weatherapp','views','html_response_page.html'));

})
// app.use('location',(req,res,next)=>{
    
// })
// app.get('/',async (req,res)=>{
// let database=await dbo.getDatabase();
// const collection=database.collection(collection_name );})

// const cursor=collection.find({});
// let authors=await cursor.toArray();



app.listen(8000,()=>{console.log("Listening to port 8000");})
