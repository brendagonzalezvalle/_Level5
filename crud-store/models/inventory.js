const mongoose = require("mongoose")
const Schema = mongoose.Schema


//Blue print for Inventory
const inventorySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    breed: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true

    }




})

module.exports = mongoose.model("Inventory", inventorySchema) // Export Inventory model