// Capturamos los eventos de los botones
window.onload = function () {
    document.getElementById('generar_usuario').addEventListener('click',generar_usuario)
    document.getElementById('guardar_usuario_xml').addEventListener('click',guardar_usuario_xml)
    document.getElementById('guardar_usuario_fetch').addEventListener('click',guardar_usuario_fetch)
}
//para trabajar con ellos despues
lista_usuarios = []

////// GENERACION DE CARD USER

/**
 * Peticion GET a la url para capturar usuario
 */
function generar_usuario(){
    // console.log("generar_usuario")
    fetch('https://randomuser.me/api/?nat=es')
    .then((response) => {
        if (response.ok) return response.json();
    })
    .then((datos)=>{
        procesa_datos(datos)
    })
    .catch((err)=>console.log(err))
}

/**
 * Procesamiento de datos de usuario para quedarnos con la informacion 
 * concreta: nombre completo, calle, telefono, email e imagen
 * @param {*} datos 
 */
function procesa_datos(datos) {
    // console.log('Procesando Datos Usuario')
    let info_user = datos.results
    let user = {
        name: info_user[0].name.first+' '+info_user[0].name.last,
        phone: info_user[0].phone,
        street: info_user[0].location.street.name,
        email: info_user[0].email,
        image: info_user[0].picture.large
    }
    document.getElementById('info').innerHTML = `Usuario ${user.name} generado`
    mostrar_ficha_usuario(user)
}

/**
 * Generacion de card para cada usuario 
 * captura del evento añadir usuario a tabla
 * @param {*} user 
 */
function mostrar_ficha_usuario(user) {
    // console.log('Mostrando ficha usuario')

    let container = document.getElementById('ficha_usuario')
    container.innerHTML = ""
    ///card
    let card = document.createElement('div')
    card.className = 'card'
    card.style = 'width:350px'
    //imagen de la card
    let img_card = document.createElement('img')
    img_card.className = 'card-img-top'
    img_card.classList.add('mt-2')
    img_card.src = user.image
    img_card.alt = 'imagen del usuario'

    card.appendChild(img_card)
    //cuerpo de la card
    let card_body = document.createElement('div')
    card_body.className = 'card-body'

    //datos del usuario1-
    //name:
    let h4_name = document.createElement('h4')
    h4_name.appendChild(document.createTextNode(user.name))
    //phone
    let p_phone = document.createElement('p')
    p_phone.appendChild(document.createTextNode(`Telefono: ${user.phone}`))
    //street
    let p_street = document.createElement('p')
    p_street.appendChild(document.createTextNode(`Calle: ${user.street}`))
    //email
    let p_email = document.createElement('p')
    p_email.appendChild(document.createTextNode(`Email: ${user.email}`))
    //button
    let btn = document.createElement('button')
    btn.className='btn'
    btn.textContent = 'Añadir a tabla'
    btn.classList.add('btn-primary')
    btn.classList.add('rounded-pill')
    btn.classList.add('my-2') // 
    btn.id = 'añadir_usuario'

    card_body.appendChild(h4_name)
    card_body.appendChild(p_phone)
    card_body.appendChild(p_street)
    card_body.appendChild(p_email)
    card_body.appendChild(btn)

    card.appendChild(card_body)

    container.appendChild(card)
    //capturamos el evento del boton de card
    document.getElementById('añadir_usuario').addEventListener('click', ()=>{
        lista_usuarios.push(user)
        generar_tabla_usuarios(lista_usuarios)
    })
}

////// GENERAR TABLA USER

/**
 * generacion de tabla de usuarios
 * @param {*} lista_usuarios 
 */
function generar_tabla_usuarios(lista_usuarios){
    // console.log('Generanco tabla user')
    
    document.getElementById('info').innerHTML +="<br> Usuario añadido a Tabla"
    //generacion de tabla
    let container_table = document.getElementById('tabla_usuarios')
    //limpieza de tabla
    container_table.innerHTML =""
    
    let table = document.createElement('table')

    let tr_header = document.createElement('tr')

    let cabeceras = [
        'Name',
        'Street',
        'Phone',
        'Email'
    ]

    cabeceras.forEach((cabecera)=>{
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(cabecera))
        tr_header.appendChild(th)
    })

    table.appendChild(tr_header);

    lista_usuarios.forEach((usuario)=>{
        //creamos una tabla
        let tr = document.createElement('tr');
        ///para cada campo del vehiculos
        for( const camp in usuario){
            if (camp != 'image'){
            //creanis una celda columna
            let td = document.createElement('td');
            //lo llenamos con el dato dle campo
            td.appendChild(document.createTextNode(usuario[camp]))
            tr.appendChild(td)
            }
        }
        table.appendChild(tr)
    })

    container_table.appendChild(table)
}

///////   INSERTION BD

/**
 * Peticion POST para insertar un array de usuarios 
 * mediante método XML
 */
function guardar_usuario_xml(){
    lista_usuarios
    let xhr = new XMLHttpRequest();
    //comprobamos el estado
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.readyState)
            //Mostramos datos en info en caso de la peticion
            document.getElementById("info").innerHTML += `<br> Usuarios cargado en BD metodo XML`;
        }
    }
    let dato_string=JSON.stringify(lista_usuarios);
    // configurar la petición (método y url)
    xhr.open('POST', 'save_users.php');
    // indicamos que tipo de documento estamos enviando
    xhr.setRequestHeader("Content-type", "application/json");
    // enviamos el objeto json
    xhr.send(dato_string);
}

/**
 * Peticion POST para enviar un array de usuarios a BD
 * mediante métomo Fecth
 */
function guardar_usuario_fetch(){
    lista_usuarios
    
    // configuramos el tipo de peticion 
    fetch('save_users.php',{
        method: 'POST',
        eaders: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(lista_usuarios)
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
        console.log(data);
        document.getElementById("info").innerHTML += `<br> Usuarios guardados en BD con metodo FETCH`;
    })
    .catch((err) => console.log(err));
}
