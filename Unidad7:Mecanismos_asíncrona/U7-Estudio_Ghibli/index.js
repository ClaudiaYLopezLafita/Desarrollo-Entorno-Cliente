
const READY_STATE_COMPLE = 4;
const HTTP_STATUS_OK = 200;
array_vehiculos=[]

window.onload = function() {
    document.getElementById('carga_vehiculo').addEventListener("click", cargar_datos_vehiculos);
    document.getElementById('resgistro_envio').addEventListener("click", registrar_envio);
}

function cargar_datos_vehiculos() {
    console.log("carga de datos")
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        if (xhr.readyState == READY_STATE_COMPLE 
            && xhr.status == HTTP_STATUS_OK) 
        {
            console.log("readyState: "+xhr.readyState);
            console.log("onreadystatechange - peticion a Vehiculo Ghibli");
            let vehiculos = JSON.parse(xhr.responseText);
            console.log(vehiculos)
			procesa_datos(vehiculos);
            inserta_en_bbdd(array_vehiculos)
            document.getElementById("info").innerHTML="Vehiculos Cargados"
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
        let item ={
            id: vehiculo.id,
            name: vehiculo.name,
            description: vehiculo.description,
            vehicle_class:  vehiculo.vehicle_class
        }
        array_vehiculos.push(item)
    });
    return array_vehiculos;
}

function inserta_en_bbdd(array_vehiculos){
    console.log("inserta_en_bbdd")
    let url = "insertar_vehiculos.php"
    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(array_vehiculos)
    }).then((response) =>{
        if (response.ok) return response.json() 
    }).then((array_vehiculos)=>{
        console.log(array_vehiculos)
        visualiza_tabla_vehiculos(array_vehiculos)
    })
}

function visualiza_tabla_vehiculos(array_vehiculos){
    let container = document.getElementById('tabla');
    container.innerHTML =""
    let table = document.createElement('table');
    let tr = document.createElement('tr');

    let cabeceras=["ID","Nombre","Descripcion","Clase","Enviar?"];

    cabeceras.forEach((cabecera)=>{
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(cabecera))
        tr.appendChild(th)
    })
    table.appendChild(tr);
    console.log(array_vehiculos)
    array_vehiculos.forEach((vehiculo)=>{
        let tr = document.createElement('tr');
        for( const camp in vehiculo){
            let td = createElement('td');
            td.appendChild(document.createTextNode(vehiculo[camp]))
            tr.appendChild(td)
        }
        table.appendChild(tr)
    })

    container.appendChild(table)
}

function registrar_envio(){}