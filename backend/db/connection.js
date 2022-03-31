const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/lists";

mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((instance) => {
        console.log(`Connected to the DB: ${instance.connections[0].name}`);
    })
    .catch((err) => console.log(`Connection failed`, err));
    
module.exports = mongoose;
