const express = require("express")
const app = express()
const morgan = require("morgan")
const {v4: uuidv4} = require("uuid")
const mongoose = require("mongoose")


// Middleware for every request
app.use(express.json())
app.use(morgan("dev"))

//Connect to Database
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://brendagonzalez22valle:1Zebralove@cluster0.sc9ncaq.mongodb.net')
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));



// Routes

app.use("/api/bounty", require("./routes/bountyRouter.js"))


// Error Handler

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, ()=>{
    console.log("The port 8000 is runnning !")
})