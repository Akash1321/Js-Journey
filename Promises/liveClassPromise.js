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

fakeFetch("Promise testing", true)
.then(val => {
    console.log(val);
    return fakeFetch2("2nd " + val)
})
.then(next => console.log(next))
.catch(error => {
    console.error(error)
    return fakeFetch2(error + " now testing another promise")
})
.then(res => console.log(res));
