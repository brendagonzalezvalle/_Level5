const express = require("express")
const mongoose = require("mongoose")
const app = express()
const morgan = require("morgan")

//Middleware

app.use(express.json())
app.use(morgan("dev"))

//Connect to Database
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://brendagonzalez22valle:X9zjhWLADk9osiwS@cluster0.qnmkk6x.mongodb.net", () => {
    console.log("MongoDB is connected")
})

//Listen

app.listen("8000", () => {
    console.log("The server at port 8000 is running!")
})

//Error Handler

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})