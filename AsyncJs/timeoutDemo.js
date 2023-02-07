function fun(){
    console.log("starting");
    setTimeout(function execute(){
        console.log("inside the timer 4s")
    }, 4000)

    setTimeout(function process(){
        console.log("inside the timer 7s")
    }, 7000)
}

fun();

for(let i = 0; i < 10000000000; i++){

};

setTimeout(function lastone(){
    console.log("inside the last one of 0s timer")
}, 0);