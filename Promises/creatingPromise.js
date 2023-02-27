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

function writeData(data){
    return new Promise(function(resolve, reject){
        console.log(`started saving the ${data} in a file`);
        setTimeout(function saveFile(){
           let fileName = "firstTime.txt";
           resolve(fileName)
        }, 2000)
    })
}

function uploadFile(fileName, site){
    return new Promise(function(resolve, reject){
        console.log(`started uploading ${fileName} to ${site}`);
        setTimeout(function uploading(){
            let show = `the file ${fileName} is uploaded to ${site}`;
            resolve(show)
            console.log("this was the end")
        }, 4000)
    })
}

fetchData("www.google.com")
.then(value => {
    console.log("the data was", value);
    return value
})
.then(data => {
    return writeData(data);
})
.then(job => {
    console.log(job);
    return uploadFile(job, "www.youtube.com");
})
.then(show => console.log(show))

























// function resolveReject(num){
//    return new Promise(function(resolve, reject){
//     console.log("inside the promise");
//     setTimeout(function process(){
//         console.log("Calcutlation done")
//         if(num % 5 == 0){
//             resolve("Multiple of 5")
//         }else{
//             reject("Not a multiple of 5")
//         }
//     }, 10000)

//     console.log("we are somewhere in the middle")
//    })
// }