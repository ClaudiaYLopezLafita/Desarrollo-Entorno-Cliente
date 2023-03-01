window.onload = function() {
    document.getElementById('carga_datos_xml').addEventListener('click', carga_datos_xml)
    document.getElementById('carga_datos_fetch').addEventListener('click', carga_datos_fetch)
}

let apods = []


function carga_datos_xml(){
    let num_peticiones = document.getElementById('number').value 

    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState===4 && xhr.status===200){
            apods = JSON.parse(xhr.responseText)
            generar_select(apods)
            document.getElementById('info').innerHTML = 'Datos ADOP cargados'
            document.getElementById('info').innerHTML += '<br> Opciones select generados'
        }
    }

    xhr.open('GET',`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${num_peticiones}`)
    xhr.send();
}

function carga_datos_fetch(){
    console.log("carga_datos_fetch")
    let num_peticiones = document.getElementById('number').value 

    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${num_peticiones}`)
    .then((response) => {
        if (response.ok) return response.json();
    })
    .then((datos) => {
        document.getElementById('info').innerHTML += "Datos cargados Fetch"
        document.getElementById('info').innerHTML += '<br> Opciones select generados'
        apods = datos
        generar_select(apods);
    });  
}

function generar_select(apods){
    console.log("generar selec dinamico")
    let select = document.getElementById('descargas')

    for (let i = 0; i < apods.length; i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(apods[i].title));
        select.appendChild(option);
    }
    //evento para mostrar la informacion cuando se cambie el select
    select.addEventListener("change", mostrar_informacion_apod);
}

function mostrar_informacion_apod(){
    console.log('mostrar informacion apo seleccionado')
    let container = document.getElementById('resultados')
    container.innerHTML =""
    let select = document.getElementById('descargas')

    for (let i = 0; i < apods.length; i++) {
        if(apods[i].title === select.value){

            //establecemos la imagen
            let img = document.createElement("img");
            img.src=apods[i].url;
            img.style='width: 50%;'
            container.appendChild(img);
            //indicamos el titulo
            let titulo = document.createElement("h3");
            titulo.appendChild(document.createTextNode(apods[i].title));
            container.appendChild(titulo);
            //indicamos la fecha
            let fecha = document.createElement("p");
            fecha.appendChild(document.createTextNode(apods[i].date));
            container.appendChild(fecha);
            //indicamos la descripcion
            let descripcion = document.createElement("p");
            descripcion.appendChild(document.createTextNode(apods[i].explanation));
            container.appendChild(descripcion);

            //seclaramos le btoton para guardar
            let btn = document.createElement("button");
            btn.className=" btn btn-outline-primary"
            btn.id="guardar_bbdd"
            btn.appendChild(document.createTextNode('Guardar'));
            container.appendChild(btn);

            btn.addEventListener("click", guardar_info_bbdd);
            document.getElementById('info').innerHTML += `<br> Mostrando informacion de ${apods[i].title}`
        }
    }
}

function guardar_info_bbdd(){
    console.log('guardar en bbdd')
    let select = document.getElementById('descargas')

    for (let i = 0; i < apods.length; i++) {
        if (apods[i].title === select.value) {
            //creamos un objeto con la informacion que se quiere guardar
            let apod = {
                title: apods[i].title,
                url: apods[i].url,
                explanation: apods[i].explanation,
                date: apods[i].date
            }
            insert_apod(apod);
        }        
    }
}

function insert_apod(apod) {
    console.log("insercion_post_apod_bbdd");
    
    fetch("save_apod.php", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(apod),
	})
    .then((response) => {
        if (response.ok) return response.json();
    })
    .then((data) => {
        document.getElementById('info').innerHTML += "<br> APOD guardado en base de dato";
    }).catch((err)=>{console.log(err)})
}