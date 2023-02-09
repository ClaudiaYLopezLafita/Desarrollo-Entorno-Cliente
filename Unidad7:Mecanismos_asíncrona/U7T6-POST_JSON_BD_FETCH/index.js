const READY_STATE_COMPLETE = 4;
const HTTP_STATUS_OK = 200;

window.onload = inicio;

function inicio() {
    //captura el evento "click" del boton "Enviar"
    document.getElementById("send").addEventListener("click", insertar_serie);
    document.getElementById("view").addEventListener("click", visualizar_series);
}

function insertar_serie(){
    //PRIMERO:creamos una serie nueva captando los valores de inputs en el objeto directamente
    let serie = {
        "titulo" : document.getElementById("title").value,
        "director" : document.getElementById("director").value,
        "cadena" : document.getElementById("channe").value,
        "anyo" : document.getElementById("year").value,
        "terminada" : document.getElementById("finish").checked
    };
    debugger

    //SEGUNDO: convertimos el objeto capturado en una cadena JSON válida mediante stringify
        // serie_cadena_json = JSON.stringify(serie);
        // console.log(serie_json)

    //TERCERO: Realizamos la peition a create_serie.php mediante FECTH
    let url = '/Unidad7:Mecanismos_asíncrona/docmumentos/create_serie.php';
    //fetch para enviar archivo JSON
    fetch(url,{
        //metodo
        method: "POST",
        // le indicamos que le vamos que tipo de dato le estamos enviando
        headers: {
            "Content-Type": "application/json",
        },
        // pasao de conversion a cadena desde JSON
        body: JSON.stringify(serie),
    })
    .then((response) => {
        //es un objeto response, no podemos acceder directamente a el
        if (response.ok) {
            return response.text(); //devulve un texto plano
        }
    })
    .then((data) => {
        if (data === '"ok"') {
            visualizar_series();
        }
    })
    .catch((err) => console.log("Error: " + err));
}

function visualizar_series(){
    //PRIMERO: hacemos peticion GET a listar_serie.php con FETCH
    let url = "/Unidad7:Mecanismos_asíncrona/docmumentos/listar_series.php";
    fetch(url)
    .then((response) => {
        // console.log(response);
        if (response.ok) {
            return response.json(); // esto si es un json
        }
    })
    .then((data) => {
        console.log(data);
        let table = crear_tabla_series_vacia();
        document.getElementById("result").innerHTML = ""
        document.getElementById("result").appendChild(table)
        data.forEach(serie => {
            table.appendChild(create_fila_serie(serie))
        });
    })
    .catch((err) => console.log("Error: " + err));
}

function crear_tabla_series_vacia(){

    //vamos creando la tablas
    let table = document.createElement("table");
    //creamos la fila para la cabecera
    let tr_header = document.createElement("tr");
    //creamos las columnas   
    let th_titulo = document.createElement("th"); 
    th_titulo.appendChild(document.createTextNode("Titulo"))
    let th_director = document.createElement("th");
    th_director.appendChild(document.createTextNode("Director"))   
    let th_cadena = document.createElement("th");  
    th_cadena.appendChild(document.createTextNode("Cadena")) 
    let th_anyo = document.createElement("th");
    th_anyo.appendChild(document.createTextNode("Año"))   
    let th_terminado = document.createElement("th");
    th_terminado.appendChild(document.createTextNode("Terminado"))   
    //añadimos las columnas a la fila
    tr_header.appendChild(th_titulo);
    tr_header.appendChild(th_director);
    tr_header.appendChild(th_cadena);
    tr_header.appendChild(th_anyo);
    tr_header.appendChild(th_terminado);
    //añadimos la fila a la tabla
    table.appendChild(tr_header)
    return table
}

function create_fila_serie(serie){
    let tr = document.createElement("tr");
    let td_titulo = document.createElement("td"); 
    td_titulo.appendChild(document.createTextNode(serie.titulo))
    let td_director = document.createElement("td");
    td_director.appendChild(document.createTextNode(serie.director))   
    let td_cadena = document.createElement("td");  
    td_cadena.appendChild(document.createTextNode(serie.cadena))
    let td_anyo = document.createElement("td");
    // anyod
    debugger
    let num = parseInt(serie.anyo)
    if(num < 2000){
        td_anyo.className="rojo"
    } else if(2001 <= num && num<= 2010){
        td_anyo.className="amarillo"
    } else if(2011<num){
        td_anyo.className="verde"
    }
    td_anyo.appendChild(document.createTextNode(serie.anyo))   
    let td_terminado = document.createElement("td");
    debugger
    let status =serie.terminada;
    console.log(status)
    let icon = document.createElement("i");
    icon.className="bi" 
    if (status==1){
        icon.classList.add("bi-check2-circle")
    }else{
        icon.classList.add("bi-x-circle")
    }
    td_terminado.appendChild(icon)
    
    tr.appendChild(td_titulo);
    tr.appendChild(td_director);
    tr.appendChild(td_cadena);
    tr.appendChild(td_anyo);
    tr.appendChild(td_terminado);

    return tr;
}