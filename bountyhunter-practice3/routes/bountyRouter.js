const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounties.js")
// const {v4: uuidv4} = require("uuid") mongoDB will create id's

// const bounties = [
//     {
//         firstName: "Grant",
//         lastName: "H",
//         living: "Alive",
//         bountyAmount: 24,
//         type: "Sith",
//         _id: uuidv4()


// },
// {
//     firstName: "Bleu",
//     lastName: "Merle",
//     living: "Alive",
//     bountyAmount: 2,
//     type: "Sith",
//     _id: uuidv4()


// },
// {
//     firstName: "Henny",
//     lastName: "H",
//     living: "Alive",
//     bountyAmount: 3,
//     type: "Sith",
//     _id: uuidv4()


// }

// ]

// Get All


//Add Mongoose Queries to each request type in order to get the necessary information. (See Code example below)


// Get All
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)

    })
})
// Get One

bountyRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    const findBountyId = bounties.find(bounty => bounty._id === bountyId)
    if(!findBountyId){
        const error = new Error(`The item with id ${bountyId} was not found`)
        return next(error)
    }
    res.send(findBountyId)
})

// Delete
bountyRouter.delete("/:bountyId", (req, res) => {
    // const bountyId = req.params.bountyId
    // const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    // bounties.splice(bountyIndex, 1)
    // res.send("Succesfully deleted!!")
Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(`Sucessfully deleted item ${deletedItem.firstName} from the database!`)


})


})

// PUT (update) an existing bounty.

bountyRouter.put("/:bountyId", (req, res, next) => {
    // const bountyId = req.params.bountyId
    // const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    // const updateBounty = Object.assign(bounties[bountyIndex], req.body) //object assign is updating the objects with the updated information that user is updating
    // res.status(201).res.send(updateBounty) //sending the update
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId}, // find this to update
        req.body, //update the object with this data
        {new: true}, //send back the updated version
        (err, updatedBounty) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }


    )
})

// Post a new object bounty 
bountyRouter.post("/", (req, res, next) => {
//    const newBounty = req.body
//    newBounty._id = uuidv4()
//    bounties.push(newBounty)
//    res.send(newBounty) //send the new bounty that has the new id added
    const newBounty = new Bounty(req.body) // req.body is given to us by express.json( when a body is given to us for a put or post request)
    newBounty.save((err, savedBounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)

    })
})



module.exports = bountyRouter;