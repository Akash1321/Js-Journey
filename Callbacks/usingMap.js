//using the map function to understand callback

const arr = [1, 2, 3, 4, 5];

let x = arr.map(function calulate(v, i){ // first argument is always value and the second is index
     console.log(v, i);
     return v*2
});

console.log(x);

// now here we are using the higher order function but if we have to make the mapper function by ourselves then how 
// we do it

console.log("FROM HERE WE WILL BE MAKING THE MAPPING FUNCTION");

function mapping(arr, fn){ // function that consumes the callback and calls it internally with the logic

    let returned = [] // array that will be returned

    for(let i = 0; i < arr.length; i++){ // loop to go througn each value and index one by one 
        let x = fn(array[i], i); // using a variable to store what the callback function call returns
        returned.push(x) // using push to insert the retruned value from each iteration of the callback function to the returned array
    }

    return returned // in the end mapping function returns the updated array named retured


}

const array = [5, 4, 3, 2, 1];  // array

let y = mapping(array, function calulating(v, i){ // the function definiton of what the fn function will do with the iterations
    console.log(v, i); // consoling the value and the index for each iteration
    return v*i // returning what we want to do with the value and index
    
});

console.log(y)