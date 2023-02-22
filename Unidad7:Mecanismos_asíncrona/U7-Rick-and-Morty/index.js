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

/**
 * Carga de dato mediante peticion GET mediante XMLHttpRequest
 */
function cargar_datos_xhr(){
    console.log("Cargar datos mediante metodo XMLHttpRequest")
    //capturamos los valores para elrango
    min = document.getElementById('minPersonaje').value;
    max = document.getElementById('maxPersonaje').value;
    //bucle para ir recorriendo el ranro
    for (let i = min; i <= max; i++) {
        // debemos de crear una nueva peticion para cada indice
        let xhr = new XMLHttpRequest();
        //comprobamos el estado
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200){
                //datos es un objeto personaje unico
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

/**
 * Carga de dato mediante peticion GET mediante Fetch
 */
function cargar_datos_fecth(){
    console.log('Cargando datos Fetch')
    //capturamos los valores para el rango
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
            // DATOS ES UN OBJETO
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

/**
 * Vamos creando un option por cada personaje que se la pasa por parametro
 * @param {Object} datos //personakje
 */
function generar_select(datos){
    console.log("generar_select")
    //capturamos el select
    let select = document.getElementById("listPersonaje")
    //cremos un option
    let option = document.createElement("option")
    //damos valor y texrto
    option.value = datos.id;
    option.text = datos.name;
    select.appendChild(option);
}

/**
 * Cremos un ficha para cada peticion de personaje 
 * @param {Object} datos // es un personaje
 */
function mostrar_personaje(datos){
    console.log("Mostrar Personajes")

    let table = document.createElement("table")
    //generamos la para la imagen
    let tr_image = document.createElement('tr')
    let image = document.createElement('img')
    image.src = datos.image;
    tr_image.appendChild(image)
    // fila para nombre
    let tr_name = document.createElement('tr')
    tr_name.appendChild(document.createTextNode(`Nombre: ${datos.name}`))
    // fila para especie
    let tr_species = document.createElement('tr')
    tr_species.appendChild(document.createTextNode(`Especie: ${datos.species}`))
    // fila para nombre de localizacion
    let tr_location = document.createElement('tr')
    tr_location.appendChild(document.createTextNode(`Localización: ${datos.location.name}`))
    // fila para fecha creacion
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

////// SEGUNDA PARTE TRABAJAMOS CON EL ARRAY PERSONAJES

/**
 * De cada personaje capta los episodios que son url 
 * que se usaran como peticiones
 */
function obtener_episodio(){
    console.log('Obtener episodios')
    //capturamos el id del personaje seleccionado (dentro del selecc)
    let id = document.getElementById('listPersonaje').value;
    //vamos recorriendo el array de persibajes cargados
    personajes.forEach((persona)=>{
        //vamos comparando el id de cada personaje cargado con el id 
        if(persona.id == id){
            //capturamos el array con la url de los episodios del personaje
            let episodios = persona.episode;
            //recorremos el array de los episodios
            episodios.forEach((episodio)=>{
                //de cada episodio de la lista hacemos una peticion GET
                fetch(episodio)
                .then((response)=>{
                    if (response.ok) return response.json();
                })
                .then((datos)=>{
                    //datos es un UNICO episodio
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
        // mostramos el mesaje de insercion
        document.getElementById("resultados").innerHTML += `${data.resultado}<br>`;
    })
    .catch((err) => console.log(err));
}

