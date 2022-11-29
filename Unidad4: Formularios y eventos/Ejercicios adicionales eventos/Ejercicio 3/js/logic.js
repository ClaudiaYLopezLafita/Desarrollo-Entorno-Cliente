let img = document.getElementById("imgToChange");

img.document.addEventListener("mousedown",chageImage,false);
img.document.addEventListener("mouseup",chageImageOriginal,false);

function chageImage(){
    // img.setAttribute("src","./images/imgB.png");
    img.src = "./images/imgB.png";
}

function chageImageOriginal(){
    img.setAttribute("src","./images/imgA.png");
}