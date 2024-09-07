const express= require("express");
const app= express();
const path= require("path");
const dbo = require("./db_connection");
let data = [];
let locations = [];


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

app.use(async (req,res,next)=>{
    const dbo = require('./db_connection.js');
    const database = await dbo.getDatabase();
    const collection = database.collection('weatherData');
    const cursor = collection.find({});
    data =  await cursor.toArray();

    locations = data.map((item)=>{
        return item.location;
    })

    next();
})

app.get('/',(req,res)=>{
    const filePath = path.join(__dirname,'views','homePage.ejs');
    res.render(filePath,{locations: locations});
})

app.get('/:location',async (req,res,next)=>{
    const filePath = path.join(__dirname,'views',`detailsPage.ejs`);
    const location = req.params.location;
    const isLocation = locations.includes(location);
    const content = {
        location: location,
        temperature: "N/A",
        humidity: "N/A",
    };

    if(!isLocation){
        res.status(404).render(filePath,{data: content, isValidLocation: isLocation});
    }

    data.forEach((item)=>{
        if(item.location === location){
            content.temperature = item.temperature;
            content.humidity = item.humidity;
        }
    })

    console.log(location);
    res.status(200).render(filePath,{data:content, isValidLocation: isLocation});
})

app.listen(8000,()=>{console.log("Listening to port 8000");})
