function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
        console.log("inside first promise");
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`);
        }
        resolve(`${msg}`);
      }, 5000);
    });
}

function fakeFetch2(msg, shouldReject) {
    return new Promise((resolve, reject) => {
        console.log("inside second promise");
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`);
        }
        resolve(`${msg}`);
      }, 2000);
    });
}



async function usingFetch(){
  try{
    const output = await fakeFetch("I am testing async await");
    console.log(output);
    const second = await fakeFetch2((output + " for second time"), true);
    console.log(second)
  }
  catch (error){
     return error
  }
}


usingFetch()
.then(msg => console.error("the msg was ", msg ));

  