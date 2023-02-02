const READY_STATE_UNINITIALIZED = 0;
const READY_STATE_LOADING = 1;
const READY_STATE_LOADED = 2;
const READY_STATE_INTERACTIVE = 3;
const READY_STATE_COMPLE = 4;

const HTTP_STATUS_OK = 200;
const HTTP_STATUS_NOT_FOUND = 404;
const HTTP_STATUS_SERVER_ERROR = 500;


window.addEventListener("load", iniciarPeticion, true);

function iniciarPeticion() {
    document.getElementById("cargaJson").onclick = cargaCatalogo;
}

function cargaCatalogo() {
    let jsonhttpr =  new XMLHttpRequest();
	jsonhttpr.onreadystatechange = function () {
		if (jsonhttpr.readyState == READY_STATE_COMPLE 
            && jsonhttpr.status == HTTP_STATUS_OK) {
                console.log("readyState: "+jsonhttpr.readyState);
            let obj = JSON.parse(this.responseText);
			capturarInfo(obj);
		}
	};
	jsonhttpr.open("GET", "../docmumentos/tvshow.json", true);
	jsonhttpr.send(null);
}

function capturarInfo(docJSON){
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    //cramos las filas
	let tr_header = document.createElement("tr");
//empezamos a crear los th de las columnas
    //1. Titulo de la serie
	let th_header_title = document.createElement("th");
	th_header_title.appendChild(document.createTextNode("Título"));
	//2. Cadena
    let th_header_cadena = document.createElement("th");
	th_header_cadena.appendChild(document.createTextNode("Cadena"));
    //3. Director
    let th_header_director = document.createElement("th");
    th_header_director.appendChild(document.createTextNode("Director"))
    //4.Anyo
    let th_header_anyo = document.createElement("th");
    th_header_anyo.appendChild(document.createTextNode("Año"))
    //5. Terminado
    let th_header_estado = document.createElement("th");
    th_header_estado.appendChild(document.createTextNode("Terminado"))
    
	tr_header.appendChild(th_header_title);
	tr_header.appendChild(th_header_cadena);
    tr_header.appendChild(th_header_director);
    tr_header.appendChild(th_header_anyo);
    tr_header.appendChild(th_header_estado);
	tbody.appendChild(tr_header);
	table.appendChild(tbody);

    let series = docJSON.Series[0].Serie;
    
    for (let i = 0; i < series.length; i++) {

        let tr = document.createElement("tr");
		let td_title = document.createElement("td");
		let td_cadena = document.createElement("td");
        let td_director = document.createElement("td");
		let td_anyo = document.createElement("td");
        let td_estado = document.createElement("td");
        // vamos añadiendo contenido a cada celda captando el valor de los nodos hijos
        td_title.appendChild(
			document.createTextNode(
				series[i].Titulo
			)
		);
        console.log(td_title.value)
        td_cadena.appendChild(
			document.createTextNode(
				series[i].Cadena
			)
		);
        td_director.appendChild(
			document.createTextNode(
				series[i].Director
			)
		);
        debugger

        // anyo
        let num = parseInt(series[i].Anyo)
        let anyo = document.createTextNode(
            series[i].Anyo
        )
        if(num < 2000){
            td_anyo.className="rojo"
        } else if(2001 <= num && num<= 2010){
            td_anyo.className="amarillo"
        } else if(2011<num){
            td_anyo.className="verde"
        }
        td_anyo.appendChild(anyo);

        // estado
        td_estado.appendChild(
			document.createTextNode(
				series[i].Terminada
			)
		);

        tr.appendChild(td_title);
		tr.appendChild(td_cadena);
        tr.appendChild(td_director);
		tr.appendChild(td_anyo);
        tr.appendChild(td_estado);
		tbody.appendChild(tr);
    }
    document.getElementById("resultado").appendChild(table);
}
