console.log("started");

let y = setTimeout(function runner(){
    clearTimeout(x);
    console.log("the run is completed");
}, 10000);


let x = setInterval(function tracker(){
    console.log("running");
}, 2000);



console.log("ended");



