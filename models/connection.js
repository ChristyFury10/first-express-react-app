require("dotenv").config();

const mongoose = require("mongoose");
const {MONGODB_URL} = process.env;

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(MONGODB_URL, {
    // useUnifiedTopology: true, // UNSURE if NECESSARY
    // useNewUrlarser: true //
});
//connection events
mongoose.connection
    .on("open", ()=>{console.log("Connected to mongoose")})
    .on("close", ()=>{console.log("Disconnected fom mongoose")})
    .on("error", (error)=>{console.log(error)});

module.exports = mongoose;

