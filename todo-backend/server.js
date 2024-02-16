const express = require("express")
const app = express()
const morgan = require("morgan")


app.use(express.json())
app.use(morgan("dev"))


// route

app.use("/todos", require("./routes/todoRouter.js"))

// Listening for server running
app.listen(9000, ()=>{
    console.log("The port 9000 is runnning !")
})

