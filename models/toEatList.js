const mongoose = require("../db/connection");

const toEatListSchema = new mongoose.Schema({
    destination: {type: String, required: true},
    startDateOfTravel: {type: String, required: true},
    endDateOfTravel:{type: String, required: true},
    amountOfDays: {type: Number},
    restaurantName: {type: String},
    owner: {
        // References use the type ObjectId
        type: mongoose.Schema.Types.ObjectId,
        // the name of the model to which they refer
        ref: 'User'
      } 
    // tripComplete: {type: Boolean}
})

const ToEatList = mongoose.model("ToEatList", toEatListSchema);

module.exports = ToEatList;