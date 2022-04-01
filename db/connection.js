const mongoose = require("mongoose");


const MONGODB_URI = process.env.NODE_ENV === 'production' ? process.env.DB_URL : 'mongodb://127.0.0.1:27017/lists'

mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((instance) => {
        console.log(`Connected to the DB: ${instance.connections[0].name}`);
    })
    .catch((err) => console.log(`Connection failed`, err));
    
module.exports = mongoose;
