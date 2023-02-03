function processing(product, fn){
  console.log("we started the process");
  fn(product)
  console.log("we are done with the process");

}

function making(item){ // here we wrote the callback function on a different line and used it's name while passing the callback as argument
    console.log(item + " manufacturing is done")
}


processing("Soap", making);

// Now let's write an anonymous callback funtion

function understanding(txt, fn){
   let arr = txt.split("")
   fn(arr)
};

understanding("akash", function (array){ // this was the anonymous function 
    console.log(array.length)
});



