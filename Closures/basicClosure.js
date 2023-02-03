console.log("let's start");

function tool(format){

    console.log("we are entering the writing app");

    setTimeout(function writing(){  //this function starts after the tool function is over but it still it can access the values 
                                      //because it remembers it lexical scope until executed
        console.log( format + " writing completed")
    }, 5000)

    console.log("we are out of the writing app");
    format = "biography";  // here I change the value and the format inside the callback takes this value
    // which shows that it remembers the variable and its scope and not the value
}


console.log("ended");

tool("essay");
