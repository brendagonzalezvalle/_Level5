const mongoose = require("mongoose")
const Schema = mongoose.Schema



// Bounty blue print everything created as a bounty must follow blue print below

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true // makes it so user is required to enter a first name
    },
    lastName: {
        type: String,
        required: true
    },
    bountyAmount: Number,
    
    

})

module.exports = mongoose.model("Bounty", bountySchema)

// firstName: "Grant",
// lastName: "H",
// living: "Alive",
// bountyAmount: 24,
// type: "Sith",
// _id: uuidv4()