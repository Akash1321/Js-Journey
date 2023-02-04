// 16:02 PM
function shopping(item1, item2){
    return function buying(){
        console.log("Bought a " + item1 + " and a " + item2)
    }
}

let x = shopping("perfume", "facewash");

console.log(x);

for(let i = 0; i < 10000000000; i++){

}

x();

//This was to understand that after shopping was called we had a long forloop to finish and the x which had the
// returned function from shopping is called a way later but it still is able to remember the vaiable item1 and item2 which
// had the scope of shopping which was executed a long time ago