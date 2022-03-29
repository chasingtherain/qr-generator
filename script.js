const qrcode = document.querySelector("img");
const textArea = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener('click',generateQr);
button.addEventListener('click',saveImg);

function generateQr(){
    let userInput = textArea.value;
    const baseUrl = "https://api.qrserver.com/v1/create-qr-code/";
    let request = `${baseUrl}?size=${getSize()}&data=${userInput}`
    qrcode.src = request;
    displayNote()
}       

function getSize(){
    const size = document.getElementById("size");
    const selectedSize = size.options[size.selectedIndex].value;
    return selectedSize;
}

function displayNote(){
    const note = document.getElementById("note");
    note.innerText = "Note: To save the QR code, right click on it and select \"Save Image\""
    console.log(note);
}