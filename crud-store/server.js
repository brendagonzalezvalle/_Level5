const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

//Middle ware

app.use(express.json()) // looks for a request body, and turns it into "req.body"
app.use(morgan('dev')) // logs requests to console

//Routes

app.use("/inventory", require("./routes/inventoryRouter.js"))

//Connect to Data Base
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://brendagonzalez22valle:FAjr0O8sPdbr9VEP@cluster0.mrh7uxp.mongodb.net/')
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

//Error handler

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})

})
//Listen

app.listen("8000", () => {
    console.log("Server at port 8000 is working!")
})