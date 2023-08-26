const express = require('express');

const app = express()


app.get("/", (req,res) =>{
    res.send("Hello from get route")
})
app.post("/", (req,res) =>{
    res.send("Hello from post route")
})
app.put("/", (req,res) =>{
    res.send("Hello from put route")
})
app.delete("/", (req,res) =>{
    res.send("Hello from delete route")
})



app.listen(8000,()=>{
    console.log("server is running......");
})