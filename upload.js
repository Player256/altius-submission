document.getElementById("imageUploadForm").addEventListener("submit",function(event){
    event.preventDefault();

    const fileInput = document.getElementById("imageFile");
    const file  = fileInput.files[0];
    const uploadStatus = document.getElementById("uploadStatus");

    if(!file){
        uploadStatus.innerText = 'No File selected';
        return;
    }

    const validTypes = ["image/png","image/jpeg"]
    if(!validTypes.includes(file.type)){
        uploadStatus.innerText = "Invalid file type"
    }

    const maxSizeInMB = 5;
    if(file.size > maxSizeInMB * 1024 * 1024){
        uploadStatus.innerText = "File size exceeds the max size";
        return;
    }

    const formData = new FormData();
    formData.append("imageFile",file);

    fetch("localhost://",{
        method: "POST",
        body : formData,
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.success){
            uploadStatus.innerText = 'Image File uploaded successfully';
        }else{
            uploadStatus.innerText = 'Image File upload failed';
        }
    })
    .catch((error)=> {
        console.log("Error:",error);
        uploadStatus.innerText = "An error occurred while uploading.";
    })
});