//With var

// function processing(){

//     console.log("WITH VAR");
     
//     for(var i = 0; i < 4; i++){
//         setTimeout(function executing(){
//            console.log(`i: ${i}`)
//         }, i*1000)
//     }
    
// }

// processing();

//With let

function processing(){

    console.log("WITH LET");
     
    for(let i = 0; i < 4; i++){
        setTimeout(function executing(){
           console.log(`i: ${i}`)
        }, i*1000)
    
    }
    
}

processing();



