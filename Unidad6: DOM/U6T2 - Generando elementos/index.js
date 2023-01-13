// Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra.

let listUl = document.createElement('ul');
let optionList = document.createElement('li');
let textPrub = document.createTextNode("Gato")

optionList.appendChild(textPrub);
listUl.appendChild(optionList);

document.body.appendChild(listUl);

// Introduce un botón en la página que, cuando lo pulses, te muestre un prompt para que el usuario introduzca un texto.

let btn = document.createElement('button');
let textBtn = document.createTextNode('Insertar');
btn.appendChild(textBtn);

document.body.appendChild(btn);


// Una vez cerrado el prompt el valor se añadirá como un nuevo<li> a la lista creada.

btn.addEventListener("click",addOptionList);

function addOptionList(){
    
    let newWord = prompt("Introduce una palabra:");
            
    let list = document.createElement("li");
    list.innerHTML = newWord;
    listUl.appendChild(list);
}


// Añade dos botones más con texto “Borrar primer li” y “Borrar último li” de modo que 
//cuando pulses el primer botón borre el primer elemento de la lista y cuando pulses el 
//último borre el último elemento de la lista.

let btn2 = document.createElement('button');
let textBtn2 = document.createTextNode('Borrar primero');
btn2.appendChild(textBtn2);

let btn3 = document.createElement('button');
let textBtn3 = document.createTextNode('Borrar ultimo');
btn3.appendChild(textBtn3);

document.body.appendChild(btn2);
document.body.appendChild(btn3);


btn2.addEventListener("click",removeFirstOption);
btn3.addEventListener("click",removeLastOption);

function removeFirstOption(){
    // list.removeChild(list.firstElementChild); lista generica
    let primero = document.getElementsByTagName('li')[0];
    primero.remove();    
}

function removeLastOption(){
    let list = document.getElementsByTagName('li');
    let ultimo = list[list.length-1];
    ultimo.remove(); 
}