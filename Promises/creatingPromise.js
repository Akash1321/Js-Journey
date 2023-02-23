// Creating a function that fetch data from a site and returns the downloaded data?


function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("fetching data from", url);
        setTimeout(function process() {
            let data = "dummy data";
            console.log("download completed");

            resolve(data);
        }, 4000)
    })
};

fetchData("www.google.com");