///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
const {PORT} = process.env; // process.env is an object that has PORT as a key now {PORT: 4000}
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
// importing router
const peopleRouter = require("./controllers/people")


///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
// cors can have a whitelist where only those IP adresses can access server. 
app.use(morgan("dev")); // use un dev mode for dev messages
app.use(express.json()); // parse json bodies. Accept json data. (converting a JSON object in text format to a Javascript object)

// use specific routers
app.use("/people", peopleRouter);

///////////////////////////////
// ROUTES
////////////////////////////////
app.get("/", (req, res)=>{
    res.send("hello world")
})

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, ()=> console.log(`Now listening on PORT ${PORT}`))