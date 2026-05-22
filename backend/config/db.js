const mongoose = require("mongoose");

let db1Connection;
let db2Connection;

async function connectDB(){

    try{
        db1Connection = await mongoose.createConnection(process.env.MONGO_URI);
        console.log("MongoDB1 Atlas Connected");

        db2Connection = await mongoose.createConnection(process.env.MONGO_URI_LISTINGS);
        console.log("MonogDB2 Atlas Connected");

        return {db1Connection, db2Connection};
    } catch (error){
        console.log(error);
    }
    
}

module.exports = {
    connectDB, 
    getDB1: () => db1Connection, 
    getDB2: () => db2Connection
};