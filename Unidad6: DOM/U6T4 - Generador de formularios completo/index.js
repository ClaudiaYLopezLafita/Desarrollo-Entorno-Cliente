let btnLits = document.getElementsByTagName("input");
let resultados = document.getElementById('resultados');

// Crear un input de tipo texto. Le preguntará al usuario mediante un prompt 
//qué nombre (atributo name) tiene el input.

btnLits[0].addEventListener('click', createInputText, false);

function createInputText(){
    let nombre = prompt('Valor del atributo "name": ');

    let input = document.createElement('input');
    input.type = 'text';
    input.name = nombre;
    resultados.appendChild(input);
}

// Crear un input de tipo password. Le preguntará al usuario mediante un prompt 
//qué nombre (atributo name) tiene el  input.

btnLits[1].addEventListener('click', createInputPassword, false);

function createInputPassword(){
    let nombre = prompt('Valor del atributo "name": ');

    let input = document.createElement('input');
    input.type = 'password';
    input.name = nombre;
    resultados.appendChild(input);
}

// Crear un textarea. Le preguntará al usuario el nombre y generará automáticamente 
//un textarea de 40 columnas y 5  filas.

btnLits[2].addEventListener('click', createTextArea, false);

function createTextArea(){
    let nombre = prompt('Valor del atributo "name": ');

    let textarea = document.createElement('textarea');
    textarea.cols = 40;
    textarea.rows = 5;
    textarea.name = nombre;
    resultados.appendChild(textarea);
}

// Crear un label. Preguntará al usuario a qué input va referido (atributo for) y 
//el texto que aparecerá.

btnLits[3].addEventListener('click', createLabel, false);

function createLabel(){
    let forValue = prompt('Valor del input de referencia "for"');
    let texto = prompt('Indicar el texto del label');

    let label = document.createElement('label');
    label.textContent = texto;
    label.setAttribute('for', forValue);
    resultados.appendChild(label);
}

// Crear una imagen. Preguntará al usuario qué ruta tiene la imagen (atributo src).

btnLits[4].addEventListener("click", createImage, false);

function createImage(){
    let srcValue = prompt('Valor de la ruta src: ')

    let img = document.createElement('img');
    img.src = srcValue;
    resultados.appendChild(img);
}

// Crear un checkbox. Preguntará al usuario el nombre y el valor (atributos name y value). 
//Preguntará también por el texto que lo acompaña.

btnLits[5].addEventListener("click", createCheckbox, false);

function createCheckbox() {
    let nombre = prompt('Valor de "name"');
    let valor = prompt('Valor de "value"');
    let texto = prompt('Texto que veras');

    let check = document.createElement('input');
    check.type = 'checkbox';
    check.checked =true;
    check.name = nombre;
    check.value = valor;

    let label = document.createElement('label');
    label.textContent = texto;

    resultados.appendChild(label)
    resultados.appendChild(check);

}

// Crear un radio. Preguntará al usuario el nombre y el valor (atributos name y value). 
//Preguntará también por el texto que lo acompaña.

btnLits[6].addEventListener("click", createRadio,false);

function createRadio(){
    let nombre = prompt('Valor de "name"');
    let valor = prompt('Valor de "value"');
    let texto = prompt('Texto que veras');

    let radio = document.createElement('input');
    radio.type = 'checkbox';
    radio.checked =true;
    radio.name = nombre;
    radio.value = valor;

    let label = document.createElement('label');
    label.textContent = texto;

    resultados.appendChild(label)
    resultados.appendChild(radio); 
}

// Crear un botón (submit). Preguntará al usuario el nombre y el valor (atributos name y value).

btnLits[7].addEventListener("click", createBtn, false);

function createBtn(){
    let nombre = prompt('Valor de "name"');
    let valor = prompt('Valor de "value"');

    let btn = document.createElement("button");
    btn.type="submit"
    btn.name=nombre;
    btn.value=valor;

    resultados.appendChild(btn)
}
