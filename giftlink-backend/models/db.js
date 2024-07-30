// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
    // {{insert code}}

    // Task 2: Connect to database giftDB and store in variable dbInstance
    //{{insert code}}

    // Task 3: Return database instance
    // {{insert code}}
    try {
        // Task 1: Connect to MongoDB
        await client.connect();

        // Task 2: Connect to the database
        dbInstance = client.db(dbName);

        // Task 3: Return the database instance
        return dbInstance;
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        throw err;
    }


}

module.exports = connectToDatabase;
