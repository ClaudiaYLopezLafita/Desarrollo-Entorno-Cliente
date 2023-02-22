// array que contendrá la lista de comunidades
lista_comunidades = [];

//PRIMERO: caputramos los eventos de los botones
window.onload = function () {
	document.getElementById("modificar_datos").addEventListener("click", modificar_datos);
	document.getElementById("cargar_resquest").addEventListener("click", cargar_xml);
	document.getElementById("cargar_fetch").addEventListener("click", cargar_fetch);
};

/**
 * Carga los datos mediante pericion XMLHttpR
 */
function cargar_xml() {
	console.log("cargar mediante xhr");

	// Primer paso, crear el XMLHttpRequest
	let xhr = new XMLHttpRequest();
	// Segundo paso, una función anónima que recoge y trata los datos
	xhr.onreadystatechange = () => {
		console.log("onreadystatechange - peticion a WEB covid19");
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.getElementById("info").innerHTML = "Datos Insertado XMLHR";
			let comunidades = JSON.parse(xhr.responseText);
			// Proceso las comunidades para obtener los campos de interes
			procesar_comunidades(comunidades);
			// genero el select dinamicamente
			generar_select();
			// Hago la petición mediante POST a insertar_comunidades.php para insertarlo en la BD
			enviar_insertar_comunidades(lista_comunidades);
		}
	};
	// Tercer paso, configurar la petición (método y url)
	xhr.open("GET", "latest.json");
	// Cuarto paso, realizar la petición mediante el send
	xhr.send();
}

/**
 * Carga los datos mediante peticion Fetch
 */
function cargar_fetch() {
	console.log("carga mediante fetch");
	//al ser peticion GET no tendo que indicar el metodo
	fetch("latest.json")
	.then((response) => {
		// si la respuesta es correcta, que devuelva un json
		if (response.ok) return response.json();
	})
	.then((comunidades) => {
		document.getElementById("info").innerHTML = "Datos Insertados método Fetch";
		//procesamos los datos para quedarnos con los campos de interes
		procesar_comunidades(comunidades);
		//generamos el select dinamicamente
		generar_select();
		// Hago la petición mediante POST a insertar_comunidades.php para insertarlo en la BD
		enviar_insertar_comunidades(lista_comunidades);
	})
	.catch((error) => {
		// que mueste la info del error
		console.log(error);
	});
}

/**
 * Procesa la lista de comunidades para quedarnos con el campo de interes.
 * @param {Array} comunidades 
 * @returns Array
 */
function procesar_comunidades(comunidades) {
	// Limpio la variable global, donde guardo...
	lista_comunidades = [];

	// recorremos la lista de las comunidades
	comunidades.forEach((comunidad) => {
		//si el nombre es distonto de totales
		if (comunidad.ccaa != "Totales") {
			//creamos un objeto con los campos de interes
			let item = {
				ccaa: comunidad.ccaa,
				dosisEntregadas: comunidad.dosisEntregadas,
				dosisAdministradas: comunidad.dosisAdministradas,
				dosisPautaCompletada: comunidad.dosisPautaCompletada,
				porcentajeEntregadas: comunidad.porcentajeEntregadas,
				porcentajePoblacionAdministradas:
					comunidad.porcentajePoblacionAdministradas,
				porcentajePoblacionCompletas: comunidad.porcentajePoblacionCompletas,
			};
			//insertamos el objeto en un array nuevo
			lista_comunidades.push(item);
		}
	});
	//devolvemos el array con las comunidades indicas y los campos de interes
	return lista_comunidades;
}

/**
 * generacion dinámica del select
 */
function generar_select() {
	//capturamos el select
	let select = document.getElementById("cc.aa");
	select.innerHTML = "";
	//recorremos el array con las comunidades procesadas
	lista_comunidades.forEach((comunidad) => {
		//por cada comunidad creamos un opcion y le damos valor y texto
		let option = document.createElement("option");
		option.value = comunidad.ccaa;
		option.text = comunidad.ccaa;
		select.appendChild(option);
	});
}

/**
 * Petición POST para enviar los datos a la base de datos
 * @param {Array} comunidades 
 */
function enviar_insertar_comunidades(comunidades) {
	console.log('Inserción CC.AA en DB');
	fetch("insertar_comunidades.php", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(comunidades), //método estático convierte un valor de JavaScript en una cadena JSON,
	})
	.then((response) => {
		if (response.ok) return response.json();
	})
	.then((comunidades) => {
		console.log(comunidades);
		// metodo que no construirá la tabla
		construir_tabla(comunidades);
	});
}

/**
 * Generacion de DOM para la creación de una tabla con los datos necesarios
 * @param {Array} comunidades 
 */
function construir_tabla(comunidades) {
	// Primero limpio el div por si hubiese restos de anteriores tablas
	document.getElementById("resultados").innerHTML = "";
	let tabla = document.createElement("table");

	// Pongo en un array los títulos de la cabecera
	let headers = [
		"Comunidad",
		"D. Entregadas",
		"D. Admin",
		"D. Completa",
		"% Entregadas",
		"% Pobl. Admin",
		"% Pobl. Completa",
	];

	// creo una fila
	let tr = document.createElement("tr");
	//voy recorriendo el array de cabeceras para...
	headers.forEach((header) => {
		//... crear un columna para cada uno
		th = document.createElement("th");
		//añadir el valor 
		th.appendChild(document.createTextNode(header));
		//unirlo a la fila
		tr.appendChild(th);
	});
	tabla.appendChild(tr);

	// Ahora genero los datos de la tabla
	comunidades.forEach((comunidad) => {
		//creo una fila para cada comunidad
		let tr = document.createElement("tr");
		//para cada campo de la comunidad
		for (const campo in comunidad) {
			//creo una celda columna
			let td = document.createElement("td");
			//cuyo valor sera el contenido del campo de la comunidad
			td.appendChild(document.createTextNode(comunidad[campo]));
			tr.appendChild(td);
		}
		tabla.appendChild(tr);
	});

	div_tabla.appendChild(tabla);
}

/**
 * Peticion POST para modifcar datos
 */
function modificar_datos() {
	console.log("modificar datos");
	//capturamos el valor de los input para crear un objeto comunidad
	let comunidad = {
		ccaa: document.getElementById("cc.aa").value,
		dosisEntregadas: document.getElementById("dosis_entregada").value,
		dosisAdministradas: document.getElementById("dosis_administrada").value,
		dosisPautaCompletada: document.getElementById("dosis_completa").value,
		porcentajeEntregadas: document.getElementById("porcentaje_entregas").value,
		porcentajePoblacionAdministradas: document.getElementById("por_pobl_administradas").value,
		porcentajePoblacionCompletas: document.getElementById("por_pobl_completa").value,
	};
	// realizamos la petición
	fetch("actualizar_comunidad.php", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(comunidad),
	})
	.then((response) => {
		if (response.ok) return response.json();
	})
	.then((comunidad) => {
		document.getElementById("info").innerHTML = "Comunidad actualizada";
		//metodo que nos cambia la tabla
		actualizar_datos_nuestra_tabla(comunidad);
	});
}

/**
 * modificamos la base de datos
 * @param {Objeto} comunidad 
 */
function actualizar_datos_nuestra_tabla(comunidad) {
	// recoreemos el array con la lista de comunidad a mostrar
	lista_comunidades.forEach((ca) => {
		// buscamos la comunidad que hemos modificado y ponermos 
		if (ca.ccaa === comunidad.ccaa) {
			//campo comunidad = dato modificado
			ca.dosisEntregadas = comunidad.dosisEntregadas;
			ca.dosisAdministradas = comunidad.dosisAdministradas;
			ca.dosisPautaCompletada = comunidad.dosisPautaCompletada;
			ca.porcentajeEntregadas = comunidad.porcentajeEntregadas;
			ca.porcentajePoblacionAdministradas =
				comunidad.porcentajePoblacionAdministradas;
			ca.porcentajePoblacionCompletas = comunidad.porcentajePoblacionCompletas;
		}
	});
	//invocamos al metodo que nos contruye la tabla
	construir_tabla(lista_comunidades);
}