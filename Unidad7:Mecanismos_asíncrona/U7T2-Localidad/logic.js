let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADING = 1;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;

let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

/**
 * que cargue el addEventListener y capture el elemento 
 * indicado
 */
window.addEventListener('load',  () => {
    btn = document.getElementById("btn");
    btn.addEventListener("click", hacerPeticion, true);
    debugger
})

/**
 * Creo mi peticion y hacemos llamada 
 */
function hacerPeticion(){
    my_petition = new XMLHttpRequest();
    comprobarLocalidad();
}

/**
 * lazamos la preticion para capturar el .php y lea su contenido
 */
function comprobarLocalidad(){
    // capturamos la localidad que queremos comprobar
    var localidad = document.getElementById("localidad").value;
    // indicamos la url del archivo .php
    var url = "http://localhost:8090/Unidad7:Mecanismos_asíncrona/docmumentos/localidad.php";
    // establecemos el parametro de busqueda
    var params = "localidad=" + localidad;
    // Establece los parámetros de la petición al servidor
    my_petition.open("GET", url + "?" + params, true);
    //Realiza la petición HTTP al servidor
    my_petition.send(null);
    // En cada cambio de estado llama a estadoPetición
    my_petition.onreadystatechange = estadoPeticion;
    }

/**
 * comprobamos el estado de la petición
 */
function estadoPeticion() {
    console.log(`ReadyState: ${my_petition.readyState}`);
    //comprobamos si el estado de la peticion son los adecuados
    if (my_petition.readyState === READY_STATE_COMPLETE && 
        my_petition.status === HTTP_STATUS_OK) {
        // camputaramos el nodo donde vamos a insertar el resultado
        let div =  document.getElementById("resultado")
        // para dar estilo al texto que nos envie el servidor
        inserTextoDiv( div, my_petition.responseText)
    }
}

/**
 * Determina el style e inserta el resultado en el div. 
 * @param {*} div 
 * @param {*} texto 
 */
function inserTextoDiv(div, texto) {
    let color 
    // vemos el valor de texto y dependiendo de escogemos el color
    (texto == "SI") ? color = "green": color = "red";

    // eliminamos los hijos en caso de tener ya una respuesta y no se vayan acumulando
    if (div.hasChildNodes()){
        div.removeChild(div.firstChild)
    }
    // creamos un element h1 y su texto
    let h1 = document.createElement("h1");
    h1.style.cssText += `color: ${color};`
    let result = document.createTextNode(texto);
    //insertamos los nuevo hijos
    h1.appendChild(result)
    div.appendChild(h1);
}