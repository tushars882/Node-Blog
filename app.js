const express = require('express');


//set express app

const app = express();

//setting view egine
app.set('view engine' , 'ejs');

app.listen(3000);

app.use((req,res,next)=>{
    console.log('new request made:' );
    console.log('hostname:', req.hostname );
    console.log('method:', req.method );
    console.log('path:', req.path);
    next();
})


//this was for express only

// app.get('/' ,(req,res) =>{
//     res.sendFile('./views/home.html' , {root : __dirname});
//     console.log("response sent");
// })

//this is for ejs
app.get('/' ,(req,res) =>{
    const blogs =
     [
        {title:'Rockstar' , snippet : "asjbfjb sjdvabjbjs akdk"} ,
        {title : "Barfi" , snippet:'ajjfbaj adjfbj'}
    ]
    res.render('index',{title : 'Home' , blogs:blogs});
    console.log("response sent");
})

//---------------------------------------------------------------- 

// app.get('/about' , (req , res) =>{
//     res.sendFile('./views/about.html',{root : __dirname})       //here we have provided the relative path as by default the express will look into the root of our computer and here root we have provided is the current directory

// })

//for redirection to contact using view engine

app.get('/about',(req , res)=>{
    res.render('about')
})



// ----------------------------------------
// app.get('/contact' , (req , res) =>{
//     res.sendFile('./views/contact.html' , {root : __dirname});
// })


//for contact redirection in ejs
app.get('/contact' , (req , res) =>{
    res.render('contact');

})
// ---------------------------------------------------------
//for error handling

// app.use((req , res)=>{
//     res.status(404).sendFile('./views/err.html' ,{ root: __dirname });
// })

app.use((req,res)=>{
    res.render('err',{root:__dirname});
})