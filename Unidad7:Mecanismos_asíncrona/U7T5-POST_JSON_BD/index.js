const READY_STATE_COMPLETE = 4;
const HTTP_STATUS_OK = 200;

window.onload = inicio;

function inicio() {
    //captura el evento "click" del boton "Enviar"
    document.getElementById("send").addEventListener("click", sendData);
}

function sendData(){
    // captacion de datos de los input
    let etiqueta_title = document.getElementById("title");
    let etiqueta_director = document.getElementById("director");
    let etiqueta_cadena = document.getElementById("channe");
    let etiqueta_anyo = document.getElementById("year");
    let etiqueta_termina = document.getElementById("finish");

    let title = etiqueta_title.value;
    let director = etiqueta_director.value; 
    let cadena = etiqueta_cadena.value;
    let anyo = etiqueta_anyo.value;
    let termina = etiqueta_termina.value;
    debugger
    const body ={
        "titulo": title,
        "director": director,
        "cadena": cadena,
        "anyo": anyo,
        "terminada": termina,
    };
    console.log(body)
    xhr = new XMLHttpRequest();

    xhr.open("POST", "../docmumentos/create_serie.php")
    // indicamos que tipo de documento estamos enviando
    xhr.setRequestHeader("Content-type", "application/json");
    //pasos los datos a tipo string
    let dato_string=JSON.stringify(body);
    // te subcribes primero
    xhr.onreadystatechange = comprobarStatus;
    // enviamos el objeto json, despues de el no ejecuta nada más.
    xhr.send(dato_string); //LO ULTIMO QUE PONEMOS
}

function comprobarStatus(){
    console.log(xhr.readyState)
    if(xhr.readyState===READY_STATE_COMPLETE &&
        xhr.status == HTTP_STATUS_OK){
        console.log(xhr.responseText);
        //obtenemos la respuesta de archivo .php
        let respuesta =xhr.responseText; 
        // capturamos el div donde queramos que vaya la respuesta
        let resultado = document.getElementById("result");

        if(respuesta==='"ok"'){
            resultado.style.cssText ='color: green;'
        }else{
            resultado.style.cssText ='color: red;'
        }

        resultado.innerHTML = respuesta;
    }
}