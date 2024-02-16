const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")



app.use(express.json())


const bounties = [
    {
        firstName: "Grant",
        lastName: "H",
        living: "Alive",
        bountyAmount: 24,
        type: "Sith",
        _id: uuidv4()


}

]
// Get All
app.get("/", (req, res) => {
    res.send(bounties)
})
// Get One

app.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const findBountyId = bounties.find(bounty => bounty._id === bountyId)
    res.send(findBountyId)
})

// Delete
app.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Succesfully deleted!!")

})

// PUT (update) an existing bounty.

app.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updateBounty = Object.assign(bounties[bountyIndex], req.body) //object assign is updating the objects with the updated information that user is updating
    res.send(updateBounty) //sending the updaye

})


app.post("/", (req, res) => {
   const newBounty = req.body
   newBounty._id = uuidv4()
   bounties.push(newBounty)
   res.send(`Succesfully added ${newBounty.firstName} to the database`)
})






app.listen(9000, ()=>{
    console.log("Port is working yaya!")
})