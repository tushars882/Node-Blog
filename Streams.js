const fs = require('fs');

const readStream = fs.createReadStream('./docs/stream.txt' , {encoding:'utf8'})   //use encoding to convert data to readable form
const writeStream = fs.createWriteStream('./docs/writeStream' , {encoding:'utf8'})
// readStream.on('data',(chunk)=>{                 //here .on is an eventListener listening data event on readStream which takes a chunk of data
//     console.log('----newChunk-------');
//     console.log(chunk);
// })

//creating pipeline to send data to write blog which we have read

readStream.pipe(writeStream);