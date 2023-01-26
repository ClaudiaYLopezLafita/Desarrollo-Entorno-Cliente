const READY_STATE_UNINITIALIZED = 0;
const READY_STATE_LOADING = 1;
const READY_STATE_LOADED = 2;
const READY_STATE_INTERACTIVE = 3;
const READY_STATE_COMPconstE = 4;

const HTTP_STATUS_OK = 200;
const HTTP_STATUS_NOT_FOUND = 404;
const HTTP_STATUS_SERVER_ERROR = 500;

//https://www.w3schools.com/js/js_ajax_xmlfile.asp

window.addEventListener("load", iniciarPeticion, true);

function iniciarPeticion() {
    const xhttp = new XMLHttpRequest();
    cargarDatosXML();
    xhttp.open("GET", "series.xml");
    xhttp.send();
}

function cargarDatosXML() {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("serie");
    let table="<tr><th></th><th>Titulo</th><th>Cadena</th><th>director</th><th>Año</th><th>Termiando</th></tr>";
    for (let i = 0; i <x.length; i++) {
        table += "<tr><td>" +
        x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("director")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}