window.onload = inicio;

const READY_STATE_UNINITIALIZED = 0;
const READY_STATE_LOADING = 1;
const READY_STATE_LOADED = 2;
const READY_STATE_INTERACTIVE = 3;
const READY_STATE_COMPLE = 4;

const HTTP_STATUS_OK = 200;
const HTTP_STATUS_NOT_FOUND = 404;
const HTTP_STATUS_SERVER_ERROR = 500;

let comunidades = [];
let respuesta_insercion;

// PRIMERO CAPTURAMOS LOS EVENTOS DE LOS BOTONES AL CARGAR LA PÁGINA
function inicio() {
    // document.getElementById("modificar_datos").addEventListener("click", modificar_datos);
    document.getElementById("cargar_resquest").addEventListener("click", carga_datos_request);
    document.getElementById("cargar_fetch").addEventListener("click", carga_datos_fetch);
}

// SEGUNDO SOLICITAMOS UNA PETICION PARA CAPTAR EL JSON
function carga_datos_request() {
    //creamo una nueva peticion
    let jsonhttpr =  new XMLHttpRequest();
    //vamos comprobando el estaod
	jsonhttpr.onreadystatechange = function () {
		if (jsonhttpr.readyState == READY_STATE_COMPLE 
            && jsonhttpr.status == HTTP_STATUS_OK) 
        {
            console.log("readyState: "+jsonhttpr.readyState);
            let obj = JSON.parse(this.responseText);
			procesa_json(obj);
		}
	};
    //solicitamos el archivo json
	jsonhttpr.open("GET", "latest.json", true);
	jsonhttpr.send(null);
}

function carga_datos_fetch(){

}

function procesa_json(obj){
    comunidades=[];
    //vamos añadiendo las comunidades en un array
    for( let comunidad of obj){
        if (comunidad.ccaa == "Totales" || 
            comunidad.ccaa == "Fuerzas Armadas" || 
            comunidad.ccaa == "Sanidad Exterior"){
            //interrumpe una iteración (en el bucle), 
            //si se produce una condición específica, 
            //y continúa con la siguiente iteración del bucle. 
            continue;
        }else{
            comunidades.push(comunidad);
        }
    }
    document.getElementById('resultados').innerHTML= ""
    let table  = genera_esqueleto_tabla();
    //aádimos la estrucutra a la html
    document.getElementById('resultados').appendChild(table);
    comunidades.forEach(comunidad =>{
        table.appendChild(genera_fila_datos(comunidad));
    })
    carga_select_ccaa();
}

function genera_esqueleto_tabla(){
    // generamos la tabla
    let table = document.createElement('table');
    table.className='table';
    // generamos la fila
    let tr_header = document.createElement('tr');
    // generamos las columnas con su contenido
    let th_ccaa = document.createElement('th');
    th_ccaa.appendChild(document.createTextNode('CC.AA'))
    let th_dEntregada = document.createElement('th');
    th_dEntregada.appendChild(document.createTextNode('Dosis Entregada'))
    let th_dAdministrada = document.createElement('th');
    th_dAdministrada.appendChild(document.createTextNode('Dosis Administrada'))
    let th_dCompletada = document.createElement('th');
    th_dCompletada.appendChild(document.createTextNode('Dosis Completa'))
    let th_pEntregada = document.createElement('th');
    th_pEntregada.appendChild(document.createTextNode('% Entregas'))
    let th_pAdministrada = document.createElement('th');
    th_pAdministrada.appendChild(document.createTextNode('% Administrada'))
    let th_pCompletas = document.createElement('th');
    th_pCompletas.appendChild(document.createTextNode('% Completas'))
    //unimos las columnas a la fila
    tr_header.appendChild(th_ccaa);
    tr_header.appendChild(th_dEntregada);
    tr_header.appendChild(th_dAdministrada)
    tr_header.appendChild(th_dCompletada);
    tr_header.appendChild(th_pEntregada);
    tr_header.appendChild(th_pAdministrada);
    tr_header.appendChild(th_pCompletas);
    //unimos la fila a la tabla
    table.appendChild(tr_header);

    return table;
}

function genera_fila_datos(comunidad){

    let fila = document.createElement('tr');
    debugger
    let td_ccaa = document.createElement('td')
    td_ccaa.appendChild(document.createTextNode(comunidad.ccaa))
    let td_dEntregasd = document.createElement('td')
    td_dEntregasd.appendChild(document.createTextNode(comunidad.dosisEntregadas))
    let td_dAdministrada = document.createElement('td')
    td_dAdministrada.appendChild(document.createTextNode(comunidad.dosisAdministradas))
    let td_dCompletada = document.createElement('td')
    td_dCompletada.appendChild(document.createTextNode(comunidad.dosisPautaCompletada))
    let td_pEntregada = document.createElement('td')
    td_pEntregada.appendChild(document.createTextNode(comunidad.porcentajeEntregadas))
    let td_pAdministrada = document.createElement('td')
    td_pAdministrada.appendChild(document.createTextNode(comunidad.porcentajePoblacionAdministradas))
    let td_pCompletas = document.createElement('td')
    td_pCompletas.appendChild(document.createTextNode(comunidad.porcentajePoblacionCompletas))

    fila.appendChild(td_ccaa);
    fila.appendChild(td_dEntregasd);
    fila.appendChild(td_dAdministrada);
    fila.appendChild(td_dCompletada);
    fila.appendChild(td_pEntregada);
    fila.appendChild(td_pAdministrada);
    fila.appendChild(td_pCompletas);

    return fila 
}

// CARGAMOS EL SELECT DINAMICAMENTE
function carga_select_ccaa(){
    // document.getElementById("ccaa").innerHTML = "";
    let select = document.getElementById("cc.aa");
    // creamos un <option> por cada ccaa
    for( let comunidad of comunidades){
        let option = document.createElement('option');
        option.value=comunidad.ccaa;
        option.text=comunidad.ccaa;
        //vamos añadiendo las opciones a selec
        select.appendChild(option);
    }
}