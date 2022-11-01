/**
 * Ejerciocio: Objetos
 * 
 * @author Claudia Y Lopez Lafita
 * 
*/

// SEGUNDA PARTE

// carga de discos

let listaDiscos = [];

let d1 = new Disco();
d1.addPropiedades('Once','Nightwish','2004','rock',5);
listaDiscos.push(d1);

let d2 = new Disco();
d2.addPropiedades('Sangre latina','Chayanne','1986','pop',20);
listaDiscos.push(d2);

let d3 = new Disco();
d3.addPropiedades('Funeral','Arcade FIre','2004','indie',0);
listaDiscos.push(d3);

let d4 = new Disco();
d4.addPropiedades('Ramones','Ramones','1976','rock',89);
listaDiscos.push(d4);

let d5 = new Disco();
d5.addPropiedades('Hotel California','Eagles','1976','rock',27);
listaDiscos.push(d5);

let d6 = new Disco();
d6.addPropiedades("Bulería", "David Bisbal", "2004", "pop", 12);
listaDiscos.push(d6);

let opcion = prompt(
    "1.- Mostrar número de discos. \n" +
    "2.- Mostrar listado de discos \n" +
    "3.- Mostrar un intervalo de discos \n" +
    "4.- Añadir un disco \n" +
    "5.- Borrar un disco \n" +
    "6.- Consultar un disco \n\n Introduce una opción:"
);

switch (opcion) {
    case "1":
      mostrarNumeroDiscos(listaDiscos);
      break;
    case "2":
      listarDiscos(listaDiscos);
      break;
    case "3":
      intervaloDiscos(listaDiscos);
      break;
    case "4": 
      anadirDisco(listaDiscos);
      break;
    case "5": 
      borrarDisco(listaDiscos);
      break;
    case "6": 
      consultarDisco(listaDiscos);
      break;
    default:
      alert("No se ha seleccionado ninguna opción.");
}

/**
 * funcion que calcula la cantidad de discos que compone nuestro array
 * @param {array} lista 
 * @returns alert informativo
 */
function mostrarNumeroDiscos(lista){

    let numDiscos = lista.length;

    document.getElementById("h4").innerHTML = "Número de discos disponibles";
    document.getElementById("p").innerHTML = numDiscos;
}

/**
 * funcion que invoca determinadas funciones dependiendo
 * de la eleccion del usuario
 * @param {array} lista 
 */
function listarDiscos(lista){

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
 * devuelve una lista de los discos segun viene en el array (index indicado)
 * @param {array} lista 
 * @returns alert info
 */
function listarPorDefecto(lista){ 
    let discos = '';
    // recorremos el array y lo vamos concatenando. 
    for (let x = 0; x < lista.length; x++) {
        
        discos += '<br>'+x+'.- '+lista[x].showInfo();
        
    }

    document.getElementById("h4").innerHTML = "Lista de discos por defecto:";
    document.getElementById("p").innerHTML = discos;  
}

/**
 * devuelve una lista de los discos segun viene en el array (index indicado) en sentido contrario
 * @param {array} lista 
 * @returns alert info
 */
function listarAlReves(lista){
    let discos = '';

    // recorremos el array desde index mayor o a menor y lo vamos concatenando. 
    for (let x = lista.length-1; x >= 0; x--) {
        
        discos += '<br>'+x+'.- '+lista[x].showInfo();
        
    }

    document.getElementById("h4").innerHTML = "Lista de discos orden inverso";
    document.getElementById("p").innerHTML = discos;  

}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function compare(a, b) {
    if (a.singer > b.singer) {
      return 1;
    }
    if (a.singer < b.singer) {
      return -1;
    }
  
    return 0;
  }

/**
 * funcion que ordena alfabeticamente por cantantes un array 
 * @param {array} lista 
 * @returns alert info
 */
function listarPorOrden(lista){

    let discos='';
    let listaOrdenada = lista.sort(compare);

    for (let x = 0; x < listaOrdenada.length; x++) {
        discos += '<br>'+x+'.- '+listaOrdenada[x].showInfo();
    }

    document.getElementById("h4").innerHTML = "Lista de discos ordenada por cantates";
    document.getElementById("p").innerHTML = discos;  

}

/**
 * funcion que solicita un intervalo y devuelve los discos que estan en ese interval
 * ambos extremos incluidos
 * @param {array} lista 
 * @returns alert info
 */
function intervaloDiscos(lista){
  debugger
  let intervalo = prompt('Indica el intervalo (ej. 2-3):');

  let discos='';
  let inicio=intervalo.charAt(0);
  let fin = intervalo.charAt(2);

  for (let x = inicio; x <=fin; x++){
    discos += '<br>'+x+'.- '+lista[x].showInfo();
  }
  document.getElementById("h4").innerHTML = `Los paises de tu intervalo (${intervalo}) son:`;
  document.getElementById("p").innerHTML = discos;  
  
}

/**
 * solicita informacion para añadir discos al array
 * @param {array} lista 
 */
function anadirDisco(lista){
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
 * añade al comienzo del array el nuevo disco
 * @param {array} lista 
 */
function anadirComienzo(lista){
  
    let newDisco = new Disco();
    let discos='';
    
    let nombre = prompt("Introduzca el nombre del disco:");
    let cantante = prompt("Introduzca el nombre del cantante o del grupo:");
    let ano = prompt("Introduzca el año del disco:");
    let tipo = prompt("Introduzca el tipo (rock, pop, punk o indie):");
    let loc = prompt("Introduzca la localización en la estantería:");
   
    newDisco.addPropiedades(nombre, cantante, ano, tipo, loc);

    lista.unshift(newDisco);

    for (let x = 0; x < lista.length; x++) {
         discos += '<br>'+x+'.- '+lista[x].showInfo();
    }

    document.getElementById("h4").innerHTML = `Has añadido un disco en la primera posición`;
    document.getElementById("p").innerHTML = discos;  
}

/**
 * añade al final del array el nuevo disco
 * @param {array} lista 
 */
function anadirFinal(lista){

  let newDisco = new Disco();
  let discos='';
  
  let nombre = prompt("Introduzca el nombre del disco:");
  let cantante = prompt("Introduzca el nombre del cantante o del grupo:");
  let ano = prompt("Introduzca el año del disco:");
  let tipo = prompt("Introduzca el tipo (rock, pop, punk o indie):");
  let loc = prompt("Introduzca la localización en la estantería:");
 
  newDisco.addPropiedades(nombre, cantante, ano, tipo, loc);

  lista.push(newDisco);

  for (let x = 0; x < lista.length; x++) {
       discos += '<br>'+x+'.- '+lista[x].showInfo();
  }

  document.getElementById("h4").innerHTML = `Has añadido un disco en la última posición`;
  document.getElementById("p").innerHTML = discos;
}

function borrarDisco(lista){

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

    let discos='';

    lista.shift();

    for (let x = 0; x < lista.length; x++) {
        discos += '<br>'+x+'.- '+lista[x].showInfo();
    }

    document.getElementById("h4").innerHTML = `Has borrado un disco en la primera posición`;
    document.getElementById("p").innerHTML = discos;

}

/**
 *funcion que elimina el ultimo elemento del array
 * @param {array} lista 
 */
function borrarFinal(lista){

    let discos='';

    lista.pop();

    for (let x = 0; x < lista.length; x++) {
        discos += '<br>'+x+'.- '+lista[x].showInfo();
    }

    document.getElementById("h4").innerHTML = `Has borrado un disco en la última posición`;
    document.getElementById("p").innerHTML = discos;
}

function consultarDisco(lista){
  
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
  
    let disco = lista[indice].showInfo();

    document.getElementById("h4").innerHTML = `El disco con el indice ${indice} es:`;
    document.getElementById("p").innerHTML = disco;
}

function consultaNombre(lista){

    let nombre = prompt(
        "Indique el nombre del disco del que desea consultar la posición (Ej: Más):"
    );
    let indice;

    for (let x = 0; x < lista.length; x++) {
        if(lista[x].name == nombre){
            indice = x;
            break;
        }
    }

    document.getElementById("h4").innerHTML = `El disco ${nombre} está en la posición:`;
    document.getElementById("p").innerHTML = indice;
  
}