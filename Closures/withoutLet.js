function processing(){
    for(var i = 0; i < 5; i++){

        function exec(a){ // with this function calling i everytime it changes this makes helps to store the new 
            // value of i for every iteration

            setTimeout(function(){

                console.log(a)

            }, a*1000);

        }

        exec(i);
}
}

processing();
