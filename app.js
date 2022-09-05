const express = require('express');


//set express app

const app = express();
app.listen(3000);


app.get('/' ,(req,res) =>{
    res.sendFile('./views/home.html' , {root : __dirname});
    console.log("response sent");
})

app.get('/about' , (req , res) =>{
    res.sendFile('./views/about.html',{root : __dirname})       //here we have provided the relative path as by default the express will look into the root of our computer and here root we have provided is the current directory

})

app.get('/contact' , (req , res) =>{
    res.sendFile('./views/contact.html' , {root : __dirname});

})

//for error handling

app.use((req , res)=>{
    res.status(404).sendFile('./views/err.html' ,{ root: __dirname });
})