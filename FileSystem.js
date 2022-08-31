const fs = require('fs')


//read file

// fs.readFile('./docs/text.txt' , (err , data)=>{
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         console.log(data.toString())
//     }
// })

// console.log("This ran first");      //as js works asynchronously reading file took some time meanwhile this ran

//rename file

// fs.rename('./docs/newName.txt' ,'./docs/text.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
// })



//deleting a file

if(fs.existsSync('./docs/delete.txt')){
    fs.rmdir('./docs/delete.txt' , (err)=>{
        if(err){
            console.log(err);
        }
        console.log('deleted')
    })
}
else{
    fs.mkdir('./docs/delete.txt' , (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("created successully")
        }
    })
}