window.onload = () => {
    document.getElementById('carga_criminales').addEventListener('click', carga_criminales);
    document.getElementById('limpiar_tabla').addEventListener('click', limpiar_tabla_criminales);
    document.getElementById('carga_bd_xml').addEventListener('click', carga_bd_xml);
    document.getElementById('carga_bd_fetch').addEventListener('click', carga_bd_fetch);
}

let lista_criminales = []

function carga_criminales(){
    console.log('carga_criminales');

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status ===200){
            ///importante parsear
            let datos = JSON.parse(xhr.responseText);
            console.log(datos.items)
            let array_criminales = datos.items
            array_criminales.forEach(criminal => {
                procesa_datos(criminal);
            });
            muestra_tabla_criminales(lista_criminales)
        }
    }

    xhr.open('GET', 'https://api.fbi.gov/@wanted')
    xhr.send()
}

function procesa_datos(datos) {
    console.log('procesa_datos')
    let criminal = {
        uid : datos.uid,
        title: datos.title, 
        description: datos.description,
        aliases: datos.aliases,
        images: datos.images[0].thumb,
    }

    lista_criminales.push(criminal)
}

function muestra_tabla_criminales(datos) {
    let container = document.getElementById('tabla')

    let table = document.createElement('table')
    let tr_header = document.createElement('tr')

    let cabeceras = ["UID","TITLE","DESCRIPTION","ALIASES","IMAGES",""]

    cabeceras.forEach((cabecera)=>{
        let th = document.createElement('th')
        th.appendChild(document.createTextNode(cabecera))

        tr_header.appendChild(th)
    })

    table.appendChild(tr_header)

    datos.forEach((dato)=>{
        let tr = document.createElement('tr')

        for( const campo in dato){
            let td = document.createElement('td')
            if(campo === "images"){
                let img = document.createElement('img')
                img.src = dato[campo]
                td.appendChild(img)
            }else{
                td.appendChild(document.createTextNode(dato[campo]))
            }
            tr.appendChild(td)
        }

        let td = document.createElement('td');
        let btn = document.createElement('button');
        btn.className="btn btn-secondary rounded-pill"
        btn.textContent="Guardar"
        btn.id = dato.uid
        btn.addEventListener('click',(cr_uid)=>{
            //buscamos el criminal dentro de la lista
            let criminal = lista_criminales.find(
				(cr_uid) => cr_uid.uid == btn.getAttribute("id")
			);
            //una vez lo calizado lo guardamos
            guardar_criminal(criminal)
        })

        td.appendChild(btn);
        tr.appendChild(td);
        table.appendChild(tr)
    })

    container.appendChild(table)

    document.getElementById('informacion').innerHTML = 'Lista criminales cargada'
}

function guardar_criminal(criminal){
    console.log('Guardar_crimianl')

    fetch('save_criminal.php',{
        method:'POST',
        headers:{
            "Content-Type": "application/json;charset=UTF-8"
        },
        body:JSON.stringify(criminal)
    }).then((response) => {
        if(response.ok) return response.json();
    }).then((dato) => {console.log(dato)})
    .catch((err)=>{console.log(err)})

    document.getElementById('informacion').innerHTML += `<br> Criminal ${criminal.title} guardado`;

}

function limpiar_tabla_criminales(){
    document.getElementById('tabla').innerHTML =""
    document.getElementById('informacion').innerHTML += "<br> Tabla criminales borrada"
}

function carga_bd_xml(){
    console.log("carga_bd_xml")
    let xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = () => {
        if ( xhr.readyState ===4 && xhr.status === 200){
            let datos = JSON.parse(xhr.responseText);
            muestra_tabla_criminales(datos)
            document.getElementById("informacion").innerHTML += "<br> Carga criminales desde BBDD XML"
        }else{
            document.getElementById("informacion").innerHTML += "Error al cargar los datos (XML)"
        }
    }

    xhr.open('GET',"get_criminals.php");
    xhr.send();
}

function carga_bd_fetch(){
    console.log("carga_bd_xml")
    fetch("get_criminals.php")
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    }).then((datos)=>{
        muestra_tabla_criminales(datos)
        document.getElementById("informacion").innerHTML += "<br> Carga criminales desde BBDD Fetch"
    }).catch((err) => {
        console.log(err)
        document.getElementById("informacion").innerHTML += `<br> ${err}`
    })
}