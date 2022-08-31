setTimeout(()=>{
    console.log("hello i am after 3s");
    clearInterval(int);
},3000);


const int = setInterval(()=>{
    console.log("hello world")   //to clear this or to stop this we have added clearinterval after a particular time that is in settimeout the funciton to clear this runs
})
