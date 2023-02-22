const READY_STATE_COMPLE = 4;
const HTTP_STATUS_OK = 200;

//contendrá los vehiculos de interes
array_vehiculos=[]
//capturamos los eventos de los botones
window.onload = function() {
    document.getElementById('carga_vehiculo').addEventListener("click", cargar_datos_vehiculos);
    document.getElementById('resgistro_envio').addEventListener("click", registrar_envio);
}

/**
 * Peticion GET mediante XMLHttpRequest
 */
function cargar_datos_vehiculos() {
    console.log("carga de datos XMLHttpRequest")
    // peticion
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        if (xhr.readyState == READY_STATE_COMPLE 
            && xhr.status == HTTP_STATUS_OK) 
        {
            console.log("readyState: "+xhr.readyState);
            console.log("onreadystatechange - peticion a Vehiculo Ghibli");
            let vehiculos = JSON.parse(xhr.responseText);
            //procesamos los vehiculos para que se queden con los campos indicados
			procesa_datos(vehiculos);
            //visualizar antes de insertar con los vehiculos ya procesados
            visualiza_tabla_vehiculos(array_vehiculos)
            document.getElementById("info").innerHTML="Vehiculos Cargados"
            //inseramos en la base de datos con los vehiculos ya procesados
            inserta_en_bbdd(array_vehiculos)
            document.getElementById("info").innerHTML="Vehiculos Insertados"
		}
    };
    //tercero: solicitamos y configutamos la peticion
    xhr.open("GET", "vehiculos.json");
    //cuarto: realizamos la peticion 
    xhr.send();
}

/**
 * Necesitamos obtener determinados campos de los vehiculo. 
 * @param {*} vehiculos 
 * @returns array
 */
function procesa_datos(vehiculos){
    array_vehiculos=[];
    //recorremos el array obtenido para obtener los campor de interes
    vehiculos.forEach((vehiculo) => {
        //cremos un item con los campos de interes
        let item ={
            id: vehiculo.id,
            name: vehiculo.name,
            description: vehiculo.description,
            vehicle_class: vehiculo.vehicle_class
        }
        // lo insertamos en el array que usaremos más adelante
        array_vehiculos.push(item)
    });
    return array_vehiculos;
}

/**
 * Contruccion de tabla con los vehiculos y campos procesados anteriormente
 * @param {Array} array_vehiculos 
 */
function visualiza_tabla_vehiculos(array_vehiculos){
    let container = document.getElementById('tabla');
    // limpiamos el div para que no se superpongan
    container.innerHTML =""

    let table = document.createElement('table');
    let tr = document.createElement('tr');
    // array con los rotulos de las cabecera
    let cabeceras=["ID","Nombre","Descripcion","Clase","Enviar?"];
    //cremos un th por cada cabecera del array
    cabeceras.forEach((cabecera)=>{
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(cabecera))
        tr.appendChild(th)
    })
    //union de fila de cabecera a la tabla
    table.appendChild(tr);
    //para cada vehiculo del array
    array_vehiculos.forEach((vehiculo)=>{
        //creamos una tabla
        let tr = document.createElement('tr');
        ///para cada campo del vehiculos
        for( const camp in vehiculo){
            //creanis una celda columna
            let td = document.createElement('td');
            //lo llenamos con el dato dle campo
            td.appendChild(document.createTextNode(vehiculo[camp]))
            tr.appendChild(td)
        }
        //cremos un columna para el check que acompañara a  cada behiculo
        let td = document.createElement('td');
        let check = document.createElement('input')
        check.type="checkbox"
        check.id = vehiculo.id
        td.appendChild(check)
        tr.appendChild(td)
        table.appendChild(tr)
    })
    //unimos la tabla al contenedor
    container.appendChild(table)
}

/**
 * INserccion en BD de los vehiculos mediante peticion Fetch
 * @param {Array} array_vehiculos 
 */
function inserta_en_bbdd(array_vehiculos){
    console.log("inserta_en_bbdd")
    let url = "insertar_vehiculos.php"
    //peticion POST
    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(array_vehiculos)
    }).then((response) =>{
        if (response.ok) return response.json() 
    }).then((array_vehiculos)=>{
        //mostramos el mesaje de error o confirmacion de insert correcto
        console.log(array_vehiculos)
    })
}

/**
 * Inseramos los envios en la BD
 */
function registrar_envio(){
    //cremo un objeto envio con los valores de los inputs capturados
    let envio = {
        nombre: document.getElementById('name').value,
        direccion: document.getElementById('direccion').value,
        telefono: document.getElementById('telefono').value,
        correo: document.getElementById('email').value,
        vehiculos: vehiculos_seleccionados() //meto para obtener el array con los vehiculos enviados
    }

    fetch("registrar_envio.php", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(envio),
	})
    .then((response) => {
        if (response.ok) return response.json();
    })
    .then((envio) => {
        console.log(envio);
        document.getElementById("info").innerHTML="Envio realizado"
    });
}

/**
 * 
 * @returns Array
 */
function vehiculos_seleccionados(){
    //caputramos todos los checkbox
    var textinputs = document.querySelectorAll('input[type=checkbox]'); 
    var ids=[]
    //recorremos el array
    textinputs.forEach((input)=>{
        //si han sido marcados lo metemos en un array
        if (input.checked == true){
            ids.push(input.id)
        }
    })
    //debvolvemos el Array
    return ids;
}