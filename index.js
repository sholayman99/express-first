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

//creating some response

//1. Simple string response

app.get("/one" , (req,res) =>{
   res.send("This is simple string response") //----> body of the response
//    res.end("This is simple string response")---> end point of the response
});
app.post("/two" , (req,res) =>{
    res.send("This is simple string response by post")
});

//status response
app.get("/three" , (req,res) =>{
  
res.status(404).end("Not found") ; //-->end is optional

});

//json response
app.get("/four" , (req,res) =>{

    const myJson =[
        {
            name:"Sholayman",
            age:24,
            isDeveloper:true
        },
        {
            name:"Atikur",
            age:24,
            isDeveloper:true
        },
        {
            name:"Labib",
            age:25,
            isDeveloper:false
        }
    ]
    
    res.json(myJson) ;
});

//download response
app.get("/five" , (req,res) =>{
    res.download("./file/img.png")
});

//redirect response
app.get("/bd" , (req,res) =>{
  res.redirect("http://localhost:8000/sa")
});

app.get("/sa" , (req,res) =>{
    res.send("Hello SA")
})

//headers response

app.get("/six" , (req,res) =>{
    res.append("name","Sholayman")
    res.append("age","24")
    res.status(201).send("Hello World!!")
});

//response set cookie

app.get("/seven" ,(req,res) =>{
    res.cookie("name","Leo");
    res.cookie("city","Barcelona");
    res.cookie("age","36");

    res.send('Setting up cookie')

});

//clear cookie
app.get("/eight" ,(req,res) =>{
    res.clearCookie("name");
    res.clearCookie("age");
    res.clearCookie("city");



    res.send('Setting up cookie')

});

app.listen(8000,()=>{
    console.log("server is running......");
})