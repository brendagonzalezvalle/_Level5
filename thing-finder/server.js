const express = require("express")
const thingApp = express()


thingApp.use(express.json()) // Middleware(for every request)//
// app.use("/ ", express.json())// looks for a request body, and turns it into "req.body"
// **optional "/" ** to fire every time we can use express.json()

const things= [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]
// Get all things in array
thingApp.get("/", (req, res) => {
    res.send(things)

})
// Get & search by food type in post man to call get this pquery string used was localhost:1000/search/food?type=food
thingApp.get("/search/food", (req, res) => {
    console.log(req)
    const type = req.query.type
    const filterThings = things.filter(thing => thing.type === type )
    res.send(filterThings)
})

thingApp.listen(1000, () => {
    console.log("The server 1000 is running")
})