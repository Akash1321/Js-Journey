// Tasks:
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function getData(url, fn) {
    console.log("fetching data from", url);

    setTimeout(function process() {
        let data = "dummy data";

        fn(data)

        console.log("download completed")
    }, 3000)
}

function saveData(res, filefn) {
    console.log(`"started saving the data ${res} in a file"`);
    setTimeout(function saving() {
        let savedFileName = "legend.txt"
        filefn(savedFileName)
        console.log("file name returned")
    }, 4000)
}

function uploadFile(fileName, uploadSite, uplaodFn) {
    console.log(`started to upload the ${fileName} file in`, uploadSite);
    setTimeout(function uploading() {
        let info = `"successfully uploaded the file to ${uploadSite}"`
        uplaodFn(info);
    }, 6000)
}


getData("www.google.com", function showData(response) {
    console.log("here is the downloaded response", response);

    saveData(response, function showFileName(ans) {
        console.log("The file is saved and the name is", ans);

        uploadFile(ans, "www.youtube.com", function showUploadmessage(message) {
            console.log(message)
          } );
          
    });

      
})