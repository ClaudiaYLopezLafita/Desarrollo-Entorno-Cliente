window.addEventListener("load", iniciar);

function iniciar() {
	document.getElementById("enviar").addEventListener("click", validar);

    validar()
}

function validar(e){
    console.log('Entrando en la funcion validar con parámetro event')
    e.preventDefault();

    isValidText();
}

/**
 * captación de datos de input nameDisc:
 */
function inputName(){
    console.log('Entrando en la funcion inpuName() sin parametro');
    debugger
    const $NAME = document.getElementById('nameDisc');
    let name = $NAME.value;

    isValidText(name,$NAME,'errorName');

    console.log('Saliendo de la funcion inpuName()');
}

function isValidText(text,elemento,etiqueta){
    console.log('Entrando en la funcion isValidText con parametro de entrada String');
    debugger
    if(!text){
        return error(elemento,etiqueta,'El nombre debe de estar relleno');
    } else if(text.length<=20){
        return error(elemento,etiqueta,'El nombre debe tener máximo 20 caracteres');
    }

    console.log('Entrando en la funcion isValidText con parametro de entrada String');
}

function error(elemento, etiqueta, mensaje) {
    console.log('Entrando en la funcion error())');
    debugger
    document.getElementById(etiqueta).innerHTML = mensaje;
// método establece el foco en el elemento especificado, si se puede enfocar
    elemento.focus();

    return false;
}

