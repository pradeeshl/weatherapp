const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
let database;

 async function  getDatabase() {
        const client=await MongoClient.connect('mongodb://127.0.0.1:27017');
    //put the database name here
    // database=client.db('----');

if(!database){
    console.log('Database not connected');
}
    return database;
}
module.exports={
    getDatabase
