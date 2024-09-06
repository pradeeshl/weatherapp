const express= require("express");
const app= express();
const path= require("path");

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// home page middleware
app.get('/',(req,res)=>{
    const filePath = path.join(__dirname,'views','homePage.ejs');
    res.render(filePath,{pageTitle:'Home Page'});
})

app.get('/:location',(req,res,next)=>{
    const location = req.params.location;

    // logic to get data from database
    // app.get('/',async (req,res)=>{
    // let database=await dbo.getDatabase();
    // const collection=database.collection(collection_name );})

    // const cursor=collection.find({});
    // let authors=await cursor.toArray();

    const filePath = path.join(__dirname,'views',`detailsPage.ejs`);
    res.render(filePath,{location:location});
})

app.listen(8000,()=>{console.log("Listening to port 8000");})
