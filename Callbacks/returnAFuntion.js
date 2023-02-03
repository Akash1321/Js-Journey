function a(fn){
    console.log("we are in the consuming function");
    fn();
    console.log("we are out of the consuming function");
}

function b(){
    console.log("we are in the callback function");
    console.log("we are out of the callback function");
    return function fun(){
        console.log("this was a prank");
    }
    
};

a(b()); 

// When we call "b" while calling "a" the "b" gets called immediately and reruns the function fun so now the value of the
// callback is function fun so when fn is called inside "a" then function fun gets called but if the function fun was not
// returned then it would have given error as we can't call undefined because "b" is already called and returns undefined.

