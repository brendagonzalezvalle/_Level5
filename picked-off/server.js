// Set up express server 
const express = require("express")
const app = express()

app.use(express.json())

app.use("/", (req, res, next) => {
    console.log("Line 8 is running")
    next()
})

// Write a middleware function in a separate JavaScript file that accepts the req, res, and next parameters, adds a property to the req, and allows the server to continue on with it's normal operation.
app.use("/", (req, res, next) => {
    req.body = {name: "Brenda", place: "Utah"}
    next()
})
// Write an Express server to handle a GET request that returns an object (of any kind) as a response.
app.get("/", (req, res, next)=>{
    res.send(req.body)
})

app.listen(9000, ()=>{
    console.log("The server 9000 is running")
})