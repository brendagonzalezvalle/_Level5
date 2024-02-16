const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")


app.use(express.json())
// Middleware(for every request)//
// app.use("/ ", express.json())// looks for a request body, and turns it into "req.body"
// **optional "/" ** to fire every time we can use express.json()

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

app.get("/", (req, res) => {
    res.send(bounties)
})

app.post("/", (req, res) => {
   const newBounty = req.body
   newBounty._id = uuidv4()
   bounties.push(newBounty)
   res.send(`Succesfully added ${newBounty.firstName} to the database`)
})

app.listen(9000, () => {
    console.log("The port 9000 is working!!")
})