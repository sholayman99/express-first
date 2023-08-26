const express = require('express');
const app = express()

//middleware for parsing json data in post request
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//---->NOTE:::==Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
// It is written on top of busboy for maximum efficiency.
const multer = require("multer");
// const multers = multer();
// app.use(multers.array());
// app.use(express.static("public"));

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


//request method by get

//query request in get api
app.get("/query" , (req,res)=>{
    const name = req.query.id
    res.end(name)
})

//request by header
app.get("/header" , (req,res)=>{
    const name = req.header("name")
    res.end(name)
})

//request in post method

app.post("/query",(req,res)=>{
    const id = req.query.id
    res.end(id)
})

//post header request

app.post("/header",(req,res)=>{
    const last = req.header("last")
    const first = req.header("first")
    res.end(first+" "+last)
})

//json post request

app.post("/json",(req,res)=>{
   const body = req.body ;
   const data = JSON.stringify(body);
//    const data = JSON.stringify(name);
   res.send(data);
});

//multiple from-data
// app.post("/form",(req,res)=>{
//     const formData = req.body ;
//     res.send(formData);
//  })

 //uploading a file

const storage = multer.diskStorage({

destination:(req,file,callback)=>{
 callback(null,"./upload")
},

filename:(req,file,callback)=>{
 callback(null,file.originalname)
}

});

const upload = multer({storage:storage}).single("myFile");

app.post("/file",(req,res)=>{
    upload(req,res,(err)=>{
     if(err){
        res.send("Failed to upload")
     }else{
        res.send("uploaded successfully")
     }
    });
});
 


app.listen(8000,()=>{
    console.log("server is running......");
})