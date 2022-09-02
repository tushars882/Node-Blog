const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res )=>{
    console.log( req.url , req.method);

    //setting a setHeader           for more information

    res.setHeader('content-Type' , 'text/html');

    //for routing to different html pages 
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact' :
            path += 'contact.html';
            res.statusCode = 200;
            break;
            //if in case we need to re-direct a page from some location to a particular already made webpage use setHEader

        case '/about-me':
            res.statusCode = 301    //for redirecting
            res.setHeader('Location' , '/about');
            res.end();
            break;

        default :
            path +='err.html'
            res.statusCode = 404;
            break;   
            
            
    }
    fs.readFile(path, (err , data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
}) 

server.listen(3000 , 'localhost' ,()=>{
    console.log('server listening on port 3000')
})