const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")

//Get one by Id using find by Id method
//using findById() method

inventoryRouter.get("/:inventoryId", (req, res, next) => {
    Inventory.findById(req.params.inventoryId, (err, item) => {
        if(err){
            res.status(500)
            return next(err)

        }
        return res.status(200).send(item)
    })
    
})





//Get request for all items in database
//using .find() method

inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})



//Post new items 
// .save() method
//req.body when creating a new object with the schema built in models

inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body) //req.body is given to us by express.json( when a body is given to us for a put or post request
    newInventory.save((err, saveInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newInventory)
    })
})

//delete one item
// findOneAndDelete() method

inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.inventoryId}, (err, deletedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Sucessfully deleted item ${deletedItem.name} from the database`)
    })
})




//Put 
// Use findOneAndUpdate() method

inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryId}, //find id to update
        req.body, //update the object with this data
        {new: true}, //send back the update version
        (err, updatedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
        )
})






module.exports = inventoryRouter
