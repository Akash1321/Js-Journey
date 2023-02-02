function fun(txt, job){ //here the job function is getting consumed by the fun function which means it is a paramerter for upcoming function
    console.log("we are inside the function fun");
    job() // here the callback function is being called 
    console.log("this is just to " + txt);
    console.log("The function fun is completed and we are getting out of it");
    
}



fun("understand", function jobWriting(){ // this is where the callback function is defined or say passed as an argument
    console.log("we are insdie the function jobWriting");
    console.log("done with writing the job");
    console.log("the jobWriting function is done");
})

console.log("----------------");
console.log("Done with first test now let's change the where the job is called"); 
console.log("----------------");

function fun(txt, job){ //here the job function is getting consumed by the fun function which means it is a paramerter for upcoming function
    console.log("we are inside the second function fun");
    console.log("this is just to " + txt);
    console.log("The second function fun is completed and we are getting out of it");
    job() // here the callback function is being called 
    
}



fun("understand", function jobWriting(){ // this is where the callback function is defined or say passed as an argument
    console.log("we are insdie the function jobWriting");
    console.log("done with writing the job");
    console.log("the jobWriting function is done");
})