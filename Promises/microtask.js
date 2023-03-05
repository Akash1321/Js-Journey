function testing(){
    console.log('function started');

    setTimeout(function timer1(){
        console.log("Timer 1 completed")
    }, 0);

    let x = Promise.resolve('dummy data');
    x.then(function afterThen(data){
      console.log(`This is the data ${data}`);
    });

    setTimeout(function timer2(){
        console.log("Timer 2 completed")
    }, 0);

    console.log("function ended");
}

testing();











