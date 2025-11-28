const dropArea = document.querySelector('.drag-area');
dragText = dropArea.querySelector('.header')
button = dropArea.querySelector('.btn2')
input = dropArea.querySelector('input')

let file;

button.onclick = ()=>{
    input.click();
}

input.addEventListener("change", function(){
    file = this.files[0];
    showfile();
});
dropArea.addEventListener('dragover', (event)=>{
    // console.log("file is over DragArea")
    event.preventDefault();
    dropArea.classList.add('active');
    dragText.textContent ='Release to upload file'
});

dropArea.addEventListener('dragleave', ()=>{
    // console.log("fi,e")
    dropArea.classList.remove("active")
    dragText.textContent = 'Drag and Drop to Upload File'
});


dropArea.addEventListener('drop', (event)=>{
    event.preventDefault();
   file = event.dataTransfer.files[0];
   showfile();
//    console.log(file);
});

function showfile(){
    let fileType = file.type;
    let validExtensions = ['image/jpeg','image/jpg','image/png'];
    if(validExtensions.includes(fileType)){
      console.log("this is an image")
       let fileReader = new FileReader();
       fileReader.onload = ()=>{
        let fileURL = fileReader.result;
        let imgTag = `<img src="${fileURL}" alt="">`;
        dropArea.innerHTML = imgTag;
        
       }
      fileReader.readAsDataURL(file); 
    }else{
        alert("this is not an image file")
        dropArea.classList.remove('active');
    }
}