////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express"); // needed for routes
const People = require("../models/people");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

// ROUTES////////////////////////////////

// PEOPLE INDEX ROUTE
//GET
router.get("/", async (req, res)=>{
    // res.json({message: "hello"})
    try{
        res.json(await People.find({}))
    } catch(error){
        res.status(400).json(error)

    } finally{
        console.log("this is the finally block..")
    }
})

// POST
router.post("/", async (req, res)=>{
    // res.json({message: "Post"})
    try{
        res.json(await People.create(req.body))
    } catch(error){
        res.status(400).json(error)
    }
})

//PUT
router.put("/:id", async (req, res)=>{
    // res.json({message: "Put"})
    try{
        res.json(await People.findByIdAndUpdate(req.params.id, req.body, {new:true})) // new true sends back the updated version of the object
    } catch(error){
        res.status(400).json(error)
    }
})

//DELETE
router.delete("/:id", async (req, res)=>{
    // res.json({message: "Delete"})
    try{
        res.json(await People.findByIdAndRemove(req.params.id)) // new true sends back the updated version of the object
    } catch(error){
        res.status(400).json(error)
    }
})


module.exports = router;