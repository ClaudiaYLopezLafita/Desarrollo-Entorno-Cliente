window.onload = function() {
    document.getElementById("cargaXmr").addEventListener("click", cargar_datos_xhr);
    document.getElementById("cargaFetch").addEventListener("click", cargar_datos_fecth);
    document.getElementById("insertarEp").addEventListener("click", obtener_episodio);
}
//variables que formaran nuestro rango
var min 
var max
//array vacio donde meteremos los personajes para usarlos posteriosmente
let personajes = []

function cargar_datos_xhr(){
    min = document.getElementById('minPersonaje').value;
    max = document.getElementById('maxPersonaje').value;
    //bucle para ir recorriendo el ranro
    for (let i = min; i <= max; i++) {
        // debemos de crear una nueva peticion para cada indice
        let xhr = new XMLHttpRequest();
        //comprobamos el estado
        xhr.onreadystatechange = function(){
            console.log(xhr.readyState)
            if (xhr.readyState === 4 && xhr.status === 200){
                datos = JSON.parse(xhr.responseText);
                // vamos indicando que personaje se va cargardo
                document.getElementById("resultados").innerHTML += `Personaje ${datos.name} cargado <br>`;
                //vamos insertando en el array de personajes aquellos que se cargan
                personajes.push(datos);
                //invocamos a la generacion del selecc con el nombre de los personajes
                generar_select(datos)
                //invocamos a la generacion de las fichas de los personales
                mostrar_personaje(datos)
            }
        }
        // Tercer paso, configurar la petición (método y url)
        xhr.open('GET', `https://rickandmortyapi.com/api/character/${i}`);
        // Cuarto paso, realizar la petición mediante el send
        xhr.send();
    }
}

function cargar_datos_fecth(){
    console.log('Cargando datos Fetch')

    min = document.getElementById('minPersonaje').value;
    max = document.getElementById('maxPersonaje').value;
    //recorremos el rango
    for (let i = min; i <= max; i++) {
        //realizamos una peticion GET para capturar a los personajes
        fetch(`https://rickandmortyapi.com/api/character/${i}`)
        .then((response) => {
			if (response.ok) return response.json();
		})
        .then((datos)=>{
            //indicamos los personjes que se van cargando
            document.getElementById("resultados").innerHTML += `Personaje ${datos.name} cargado <br>`;
            //vamos insertando los personajes en el array para usarlos mas tardes
            personajes.push(datos);
            //generamos el select dinamicamente
            generar_select(datos)
            //creamos las fichas de cada persinaje
            mostrar_personaje(datos)
        }).catch((error) => {
			console.log(error);
		});
    }
}

function generar_select(datos){
    console.log("generar_select")

    let select = document.getElementById("listPersonaje")

    let option = document.createElement("option")
    option.value = datos.id;
    option.text = datos.name;
    select.appendChild(option);
}

function mostrar_personaje(datos){
    console.log("Mostrar Personajes")

    let table = document.createElement("table")
    //generamos las filas de la ficha
    let tr_image = document.createElement('tr')
    let image = document.createElement('img')
    image.src = datos.image;
    tr_image.appendChild(image)

    let tr_name = document.createElement('tr')
    tr_name.appendChild(document.createTextNode(`Nombre: ${datos.name}`))
    let tr_species = document.createElement('tr')
    tr_species.appendChild(document.createTextNode(`Especie: ${datos.species}`))
    let tr_location = document.createElement('tr')
    tr_location.appendChild(document.createTextNode(`Localización: ${datos.location.name}`))
    let tr_created = document.createElement('tr')
    tr_created.appendChild(document.createTextNode(`Fecha Creacion: ${datos.created}`))
    let hr = document.createElement('hr')

    table.appendChild(tr_image)
    table.appendChild(tr_name)
    table.appendChild(tr_species)
    table.appendChild(tr_location)
    table.appendChild(tr_created)
    table.appendChild(hr)

    document.getElementById('fichas').appendChild(table)
}

function obtener_episodio(){
    console.log('Obtener episodios')
    //capturamos el id del personaje seleccionado (dentro del selecc)
    let id = document.getElementById('listPersonaje').value;
    //vamos recorriendo el array de persibajes cargados
    personajes.forEach((persona)=>{
        //vamos comparando el id de cada personaje cargado con el id 
        if(persona.id == id){
            //capturamos la url de los episodios del personaje
            let episodios = persona.episode;
            episodios.forEach((episodio)=>{
                //de cada episodio de la lista hacemos una peticion GET
                fetch(episodio)
                .then((response)=>{
                    if (response.ok) return response.json();
                })
                .then((datos)=>{
                    //Capturamos la informacion de cada episodio
                    console.log(datos)
                    document.getElementById("resultados").innerHTML += `Episodio ${datos.name} cargado <br>`;
                    // por cada episodio del personaje haremos un insert
                    insertar_en_bbdd(datos)
                })
            })
        }
    })
}
/**
 * Insert in DB
 * @param {Object Json} datos 
 */
function insertar_en_bbdd(datos) {
    //realizamos una peticion POST para insertar
    fetch("guardar_episodio_rm.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
    })
    .then((response) => {
            if (response.ok) {
                return response.json();
            }
    })
    .then((data) => {
        console.log(data);
        document.getElementById("resultados").innerHTML += `${data.resultado}<br>`;
    })
    .catch((err) => console.log(err));
}

