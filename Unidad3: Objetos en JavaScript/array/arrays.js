/**
 * Ejercicio Objetos: Arrays
 * 
 * @author Claudia Y Lopez Lafita

Mostrar número de países.
Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente).
Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin; luego deberás extraer el valor inicio y fin).
Añadir un país (y le preguntará si quiere añadir al principio o al final).
Borrar un país (y le preguntará si quiere borrar al principio o al final).
Consultar un país (y le preguntará si quiere consultar por posición -- indexOf o por nombre -- valueOf).
 */

var listaPaises = ["España","Zambia", "Corea del Sur", "Francia", "México","Japón"];

var opcion = prompt(
    "1.- Mostrar número de paises. \n" +
    "2.- Mostrar listado de paises \n" +
    "3.- Mostrar un intervalo de paises \n" +
    "4.- Añadir un país \n" +
    "5.- Borrar un país \n" +
    "6.- Consultar un país \n\n Introduce una opción:"
);

switch (opcion) {
    case "1":
      mostrarNumeroPaises(listaPaises);
      break;
    case "2":
      listarPaises(listaPaises);
      break;
    case "3":
      intervaloPaises(listaPaises);
      break;
    case "4": 
      anadirPais(listaPaises);
      break;
    case "5": 
      borrarPais(listaPaises);
      break;
    case "6": 
      consultarPais(listaPaises);
      break;
    default:
      alert("No se ha seleccionado ninguna opción.");
}

/**
 * funcion que calcula la cantidad de paises que compone nuestro array
 * @param {array} lista 
 * @returns alert informativo
 */
function mostrarNumeroPaises(lista){

  let numPaises = lista.length;

  return alert(`Tu lista tiene ${numPaises} paises.`)

}

/**
 * funcion que invoca determinadas funciones dependiendo
 * de la eleccion del usuario
 * @param {array} lista 
 */
function listarPaises(lista){

  var eleccion = prompt(
    "1.- Listar por defecto. \n" +
    "2.- Listar al revés \n" +
    "3.- Listar ordenados \n" +
    "\n\n Introduce una opción:"
  );

  switch(eleccion){
    case "1":
      listarPorDefecto(lista);
      break;
    case "2":
      listarAlReves(lista);
      break;
    case "3":
      listarPorOrden(lista);
      break;
    default:
        alert("No se ha seleccionado ninguna opción.");
  }
}

/**
 * devuelve una lista de los paises segun viene en el array (index indicado)
 * @param {array} lista 
 * @returns alert info
 */
function listarPorDefecto(lista){ 
  let paises = '';

  // recorremos el array y lo vamos concatenando. 
  for (let x = 0; x < lista.length; x++) {
    
    paises += x+'.- '+lista[x]+'\n';
    
  }

  return  alert(`La lista de paises por defecto es: \n\n ${paises}`);
}

/**
 * devuelve una lista de los paises segun viene en el array (index indicado) en sentido contrario
 * @param {array} lista 
 * @returns alert info
 */
function listarAlReves(lista){
  let paises = '';

  // recorremos el array desde index mayor o a menor y lo vamos concatenando. 
  for (let x = lista.length-1; x >= 0; x--) {
    
    paises += x+'.- '+lista[x]+'\n';
    
  }

  return  alert(`La lista de paises al revés es: \n\n ${paises}`);

}

/**
 * funcion que ordena un array y lo muestra por alert
 * @param {array} lista 
 * @returns alert info
 */
function listarPorOrden(lista){

  let paises='';
  let listaOrdenada = lista.sort();

  for (let x = 0; x < listaOrdenada.length; x++) {
    paises += x+'.- '+lista[x]+'\n';
  }

  return alert(`La lista de paises ordenados es: \n\n${paises}`);

}

/**
 * funcion que solicita un intervalo y devuelve los paises que estan en ese interval
 * ambos extremos incluidos
 * @param {array} lista 
 * @returns alert info
 */
function intervaloPaises(lista){
  debugger
  let intervalo = prompt('Indica el intervalo (ej. 2-3):');

  let paises='';
  let inicio=intervalo.charAt(0);
  let fin = intervalo.charAt(2);

  for (let x = inicio; x <=fin; x++){
    paises += x+'.- '+lista[x]+'\n';
  }

  return alert(`Los paises de tu intervalo (${intervalo}) son:\n\n${paises}`);

}

/**
 * solicita informacion para añadir paises al array
 * @param {array} lista 
 */
function anadirPais(lista){
  let eleccion = prompt(
    "1.- Añadir al comienzo. \n" +
    "2.- Añadir al final. \n\n Introduce una opción:"
  );
  switch(eleccion){
    case "1":
      anadirComienzo(lista);
      break;
    case "2":
      anadirFinal(lista);
      break;
    default:
      alert("No se ha seleccionado ninguna opción.");
  }          
}

/**
 * añade al comienzo del array el nuevo pais
 * @param {array} lista 
 */
function anadirComienzo(lista){
  
  let newPais = prompt('Introduce el nombre de tu nuevo país:');

  lista.unshift(newPais);

  alert(`Has añadido un pais al comienzo del array.`);
  listarPorDefecto(lista);
}

/**
 * añade al final del array el nuevo pais
 * @param {array} lista 
 */
function anadirFinal(lista){

  let newPais = prompt('Introduce el nombre de tu nuevo país:');

  lista.push(newPais);

  alert(`Has añadido un pais al final del array.`);
  listarPorDefecto(lista);
}

function borrarPais(lista){

  let eleccion = prompt(
    "1.- Borrar al comienzo. \n" +
    "2.- Borrar al final. \n\n Introduce una opción:"
  );

  switch(eleccion){
    case "1":
      borrarComienzo(lista);
      break;
    case "2":
      borrarFinal(lista);
      break;
    default:
      alert("No se ha seleccionado ninguna opción.");
  }          
}

/**
 * funcion que elimana el primer elemento del array
 * @param {array} lista 
 */
function borrarComienzo(lista){

  lista.shift();

  alert(`Has borrado el primer pais de la lista`)
  listarPorDefecto(lista);
}

/**
 *funcion que elimina el ultimo elemento del array
 * @param {array} lista 
 */
function borrarFinal(lista){

  lista.pop();

  alert(`Has borrado el ultimo pais de la lista`)
  listarPorDefecto(lista);
}

function consultarPais(lista){
  
  let eleccion = prompt(
    "1.- Consultar por indice. \n" +
    "2.- Consultar por nombre. \n\n Introduce una opción:"
  );

  switch(eleccion){
    case "1":
      consultaIndice(lista);
      break;
    case "2":
      consultaNombre(lista);
      break;
    default:
      alert("No se ha seleccionado ninguna opción.");
  }  
}


function consultaIndice(lista){
  let indice = prompt("Introduzca la posición");
  
  let pais = lista[indice];

  alert(`Tu país con indice ${indice} es: ${pais}`);
}

function consultaNombre(lista){
  var elemento = prompt("Indica el elemento cuya posición vamos a mostrar");
  let indice = lista.indexOf(elemento);
  
    alert(` ${lista[indice]} esta en la posición: ${indice}`);
  
}

