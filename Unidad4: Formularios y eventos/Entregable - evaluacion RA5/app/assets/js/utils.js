/**
 * @author Claudia Y Lopez Lafita
 *
 * ENTREGABLE RA5 - DEWC
 */

/* EVENTLISTENER */

// Ejercicio 4
//obtenemos el elemento select que contiene las cc.aa
let select = document.getElementById('comAutonomas');
// uso del operador de encademiento opcional para acceder a la funcion
select?.addEventListener("change", function() {
    chargeProvincieToCCAA();
});


/* EJERCICIO 1 */

window.addEventListener('load', getElementMenu, false);
/**
 * le damos estilo a los li del menu comparando el
 * slug y su id.
 */
function getElementMenu(){
    console.log('Entrando a la funcion getElementMenu sin parametro');
    let elemento = document.querySelectorAll(".nav-link");
    //
    for(var i=0;i<elemento.length;i++){
        //
        let id = elemento[i].getAttribute('id');
        //
        if(existSlug(id)){
            elemento[i].classList.add("active");
        }
    }
    console.log('Salendo de la funcion getElementMenu dando estilo al li');
}
/**
 * comprobamos que el id pasado por parametro y el nombre del html
 * del slug de nuestra ruta 
 * @param {String} id 
 * @returns  Boolean
 */
function existSlug(id) {
    console.log('Entrando en la funcion getSlug con parametro String'); 
    //captamos el slug
    var slug = window.location.pathname;
    // obtenemos el nombre del .html de interes
    let nameSlug = cleanSlug(slug);
    console.log('Saliendo de la funcion existSlug devolviendo un boolean');
    // devolvemos un boolean dependiendo de la condicion
    if(nameSlug===id){
        // condicional necesario para ejecutar el ejercicio 4
        if(nameSlug == 'registro'){
            // llamamos a la funcion cargar comunidades autonomas
            chargeAutonomousCommunity();
        }
        return true;
    }
    return false;
}
/**
 * limpia la cadena de la ruta que se le pasa por parametro
 * para obtener el nombre del html
 * @param {String} path 
 * @returns String
 */
function cleanSlug(path){
    console.log('Entrando en la function cleanSlug con parametro tipo String');
    // eliminamos el direction app
    var slug = path.substring(5);
    // eliminamos la extension
    slug = slug.substring(0,slug.length-5);
    console.log('Saliendo de la funcion cleanSlug y devolviendo un String');
    return slug;
}

/* EJERCICIO 2 */

window.addEventListener('load',createEvent,false);
/**
 * creamos un evento pasando la informacion por par??metro y mostramos
 * su informacion en el HTML
 */
let myEvent;
function createEvent(){
    console.log('Entrando en la funcion createEvent sin parametro');
    // creamos un evento con los datos pasados como parametros
    myEvent = new eventRunning('XXXVIII Zurixh Marat??n de Sevilla', '2023-02-19','8:30','Sevilla');
    // salida en HTML de los datos del evento y la cuenta atr??s
    if(document.getElementById("nameEvent") || document.getElementById("countDown") != null ){
        document.getElementById('nameEvent').innerHTML = myEvent.showInfo();
        document.getElementById('countDown').innerHTML = countDown();
    }
    console.log('Salida de la funcion createEvent');
}
/**
 * constructor de un evento running con parametros tipo String
 * @param {String} name 
 * @param {*String} date 
 * @param {*String} hour 
 * @param {*String} place 
 */
function eventRunning(name, date, hour, place){
    console.log('Entrando en el constructor del objeto eventRunning');
    // declaraci??n de atributos del objeto
    this.name = name;
    this.date = date;
    this.hour = hour;
    this.place = place;
    // metodo para calcular la diferencia de d??a, hora, minutos, segundo entre dos fechas
    this.dateDifference = function dateDifference(){
        //datos a tipo date
        let fEvent = new Date(this.date);
        let now = new Date().getTime();
        // le establecemos la hora de comienzo del evento
        fEvent.setHours(this.hour.split(':')[0],this.hour.split(':')[1],0);
        // pasamos la fecha a milisegundo
        fEvent = fEvent.getTime();    
        //calculamos la diferencia entre las dos
        let diferencia = fEvent-now;
        let d, h, m, s;
        // hacemos la conversi??n 
        d = Math.floor(diferencia / 1000 / 60 / 60 / 24);
        h = Math.floor(diferencia / 1000 / 60 / 60 % 24);
        m = Math.floor(diferencia / 1000 / 60 % 60);
        s = Math.floor(diferencia / 1000 % 60);

        let result = `${d} dias : ${h} horas : ${m} minutos : ${s} segundos`

        return result
    }
    // metodo para poder mostrar la informacion del runner 
    this.showInfo = function showInfo(){       
        let myEvent =
            "Nombre: " +
            this.name +
            ", Fecha: " +
            this.date +
            ", \nHora: " +
            this.hour +
            ", \nLugar: " +
            this.place +
            '\n';
        return myEvent;
    }
    console.log('Saliendo del constructor eventRunning');
}
/**
 * cuenta regresiva de llamdo al metodo del evento;
 * @returns String
 */
function countDown(){
    console.log('Entrando en la funcion countDown sin par??metros');
    let salida = myEvent.dateDifference();
    let eventFinished = `0 dias : 0 horas : 0 minutos : 0 segundos`;
    if(salida !== eventFinished){
        if(document.getElementById("countDown") != null ){
            return document.getElementById("countDown").innerHTML = salida;
        }
    } else{
        clearInterval(stop);
        return document.getElementById("countDown").innerHTML = 'EVENTO FINALIZADO';
    }
}
let stop = setInterval(countDown,1000);


/* EJERCICIO 3 */

// Se puede ingresar mas de un runner borrando manualmente los input
//cuando se refresca la p??gina se borran - se puede recuperar con un localStorage

// evento que genera la tabla de runner ya guardados
window.addEventListener('load', initTableRunner, false);
//creamos una lista de runner
let lista = arrayRunner();
// declaraci??n de evento para la validaci??n del formularioRunner
const form = document.getElementById('formularioRunner');
form.addEventListener('submit',validationForm,false);

/**
 * constructor de u objeto runner
 * @param {String} name 
 * @param {String} surname 
 * @param {String} fecha 
 * @param {String} dorsal 
 * @param {String} hIni 
 * @param {String} hFin 
 */
function Runner(name,surname,fecha,dorsal,hIni,hFin,){
    console.log('Entrando en el constructor del objeto runner');
    //atributos
    this.name=name;
    this.surname=surname;
    this.fecha=new Date(fecha);
    this.dorsal=dorsal;
    this.hIni= (this.hIni=="Invalid Date") ? "00:00:00" : new Date("1970-01-01T" + hIni);
    this.hFin= (this.hFin=="Invalid Date") ? "00:00:00" : new Date("1970-01-01T" + hFin);
    // calculo de la marca: diferencia entre hora final e inicial
    this.calcularMarca = function calcularMarca(){
        let marca; 
        // debemos de ver como transformar el string en timpo hora.
        if(this.hIni=="Invalid Date" || this.hFin=="Invalid Date"){
            marca = "00:00:00";
        } else{
            let inicio = this.hIni;
            let final = this.hFin;

            let dHour = Math.abs(final.getHours()-inicio.getHours());
            let dMinut = Math.abs(final.getMinutes()-inicio.getMinutes());
            let dSecond = Math.abs(final.getSeconds()-inicio.getSeconds());
            
            marca = `${dHour}:${dMinut}:${dSecond}`;
            
        }
        return marca
    }
    // metodo para poder mostrar la informacion del runner 
    this.showInfo = function showInfo(){
        let init, fin;

        if(this.hIni=="Invalid Date"){
            fin = this.hFin.getHours()+':'+this.hFin.getMinutes()+':'+this.hFin.getSeconds();
            init="00:00:00";
        } else if(this.hFin=="Invalid Date"){
            init = this.hIni.getHours()+':'+this.hIni.getMinutes()+':'+this.hIni.getSeconds();
            fin = "00:00:00";
        }else{
            init = this.hIni.getHours()+':'+this.hIni.getMinutes()+':'+this.hIni.getSeconds();
            fin = this.hFin.getHours()+':'+this.hFin.getMinutes()+':'+this.hFin.getSeconds();
        }
        
        let runner =
            "Nombre: " +
            this.name +
            ", \nApellido: " +
            this.surname +
            ", \nFecha: " +
            this.fecha.toDateString() +
            ", \nDorsal: " +
            this.dorsal +
            ", \nHora inicio: " +
            init +
            ", \nHora finalizacion: " +
            fin +
            ", \nMarca: " +
            this.calcularMarca() +
            '\n';
        return runner;
    }
    console.log('Saliendo del constructor del objeto runner');
}
/**
 * inicializamos la tabla de runners al cargar la p??gina
 */
function initTableRunner(){
    console.log('Entrando en la funcion initTableRunner() sin parametros');  
    //definimos la cabecera de la tabla
    let d = '<tr class= "table-dark text-dark">'+
    '<th>Top</th>'+
    '<th>Name</th>'+
    '<th>Surname</th>'+
    '<th>Date</th>'+
    '<th>Dorsal</th>'+
    '<th>Start time</th>'+
    '<th>Ending time</th>'+
    '<th>Mark</th>'+
    ' </tr>';
    //a??adimes la cabecera de la tabla
    if( document.getElementById('listRunner')!=null ){
        document.getElementById('listRunner').innerHTML+=d;
        //ordenamos los ranuer
        ordenarRunner();
    }
    console.log('Saliendo de la funcion initTableRunner()');
}
/**
 * ordena por marca de menor a menor la lista de runners
 */
function ordenarRunner(){
    console.log('Entrando en la funcion ordenarRunner() sin parametro');
    let posicion;

    //ordenaci??n indicando que debe comparar
    let listaOrdenada = lista.sort(compare);
    //limpeza de la tabla runners
    cleanTable();
    let d = '';

    //recorrido de la lista para mostrar toda la informaci??n de los runners
    for (let x = 0; x < listaOrdenada.length; x++) {
        posicion = (x+1);
        d+='<tr>'+
        '<td>'+posicion+'</td>'+
        '<td>'+listaOrdenada[x].name+'</td>'+
        '<td>'+listaOrdenada[x].surname+'</td>'+
        '<td>'+listaOrdenada[x].fecha.toDateString()+'</td>'+
        '<td>'+listaOrdenada[x].dorsal+'</td>'+
        '<td>'+listaOrdenada[x].hIni.toLocaleTimeString('es-ES')+'</td>'+
        '<td>'+listaOrdenada[x].hFin.toLocaleTimeString('es-ES')+'</td>'+
        '<td>'+listaOrdenada[x].calcularMarca()+'</td>'+
        '</tr>';
    }
    //insertamos las filas de runners en la tabla
    document.getElementById('listRunner').innerHTML+=d;
    console.log('Saliendo de la funcion ordenarRunner() sin parametro');
}
/**
 *borrado de las filas de la tabla
 */
function cleanTable() {
    //obtenci??n de las filas de nuestro HTML
    let trs = document.getElementsByTagName("tr");
    //obtenci??n del numero filas 
    let myLength = trs.length;
    // eliminamos la primera fila (que no es cabecera) en bucle.
    for (let index = 1; index < myLength; index++) {
        trs[1].remove();
    }
}
/**
 * crea y a??ade una serie de runner en un array. 
 * @returns arrayList de runners
 */
function arrayRunner(){
    console.log('Entrando en la funcion arrayRUnner() sin parametros');
    let listaRunner = [];

    let r1 = new Runner("Claudia","L.","2023-02-20","1234","08:40:35","11:15:45");
    listaRunner.push(r1);

    let r2 = new Runner("Andrea","D.","2023-03-21","7896","09:25:50","12:35:45");
    listaRunner.push(r2);

    let r3 = new Runner("Manuel","A.","2023-02-20","3214","10:25:05","10:55:45");
    listaRunner.push(r3);

    let r4 = new Runner("Gema","E.","2023-02-21","9632","10:45:20","14:15:45");
    listaRunner.push(r4);

    return listaRunner;

}
/**
 * validaci??n del fomulario y salida de errrores
 * @returns elemento en HTML
 */
function validationForm() {
    console.log('Entrando en la funcion validationForm sin par??metros');
    // debugger
    //salida o no de errores al validad los campos fecha y dorsal. 
    isValidFecha();
    isValidDorsal();
    // condicion para poder insertar o no un nuevo registro en la tabla
    if(isValidFecha() && isValidDorsal()){
        // meter al nuevo runner y reorganizar tabla
        insertRunnerInTable();
        //devuelve que se registrado correctamente en el HTML
        return document.getElementById('confirmLogin').innerHTML = '*Se ha registrado correctamente';

    }else{
        //devuelve que NO se registrado correctamente en el HTML
        return document.getElementById('confirmLogin').innerHTML = '*No se ha podido registrar al corredor';
    }
}
/**
 * validacion de fecha. Menor a la actual.
 * @returns boolean / error message
 */
function isValidFecha(){
    console.log('Entrando en la funcion isValidFomr() sin parametros');
    // obtencion de los datos del input para la validaci??n de fecha
    const $DATE = document.getElementById('date');
    const $HORA_INICIO = document.getElementById('startTime');
    let dateEvent = $DATE.value;
    let horaEvent = $HORA_INICIO.value;
    //objeto date del registro
    let fechaRegistro = new Date(dateEvent);
    fechaRegistro.setHours(horaEvent.split(':')[0],horaEvent.split(':')[1],horaEvent.split(':')[2]);
    //obtenci??n de la fecha de los datos del evento del ej1
    let eventoTexto = document.getElementById('nameEvent').innerText;
    let fecha = eventoTexto.split(',')[1].replace(' Fecha: ','');
    let hora = eventoTexto.split(',')[2].replace(' Hora: ','');
    let fechaEvento = new Date(fecha).setHours(hora.split(':')[0],hora.split(':')[1],hora.split(':')[2]);
    // condicion de fecha para salida de error o no
    if(fechaRegistro < fechaEvento){
        return error($DATE, 'errorDate', 'Fecha de registro invalida');
    }
    // boolean result
    return true;
} 
/**
 * validaci??n del existencia del dorsal
 * @returns boolean / error message
 */
function isValidDorsal(){
    console.log('Entrando en la funcion isValidDorsal() sin parametro');
    // obtencion de los datos del input para la validaci??n de dorsal
    const $DORSAL = document.getElementById('numDorsal');
    let numDorsal = $DORSAL.value;
    // debugger
    //obtenemos la lista de corredores de la tabla 
    let listaDorsales = dataColumDorsal();

    // recorremos los corredores
    for (let i = 0; i < listaDorsales.length; i++) {    
        // comprobamos que el dorsal a registrar esta ya registrado
        if(listaDorsales[i] === numDorsal) {
            // error en caso de que exista ya el dorsal
            return error($DORSAL, 'errorNumDorsal','El numero de dorsal ya esta registrado.');
        }        
    }
    console.log('Saliendo de la funcion isValidDorsal()');
    //boolean result
    return true;
}
/**
 * obtencion del contenido de la columna dorsal
 * @returns String array
 */
function dataColumDorsal(){
    console.log('Entrando en la funcion dataColumDorsal() sin parametro');
    // declaraci??n de parametros para el bucle
    let tabla = document.getElementById('listRunner');
    let filas = tabla.rows.length;
    let arrayDorsal = [];
    let columna = 4;
    // debugger
    // Empieza desde el ??ndice 1 para evitar el header
    for (let i = 1; i < filas; i++) {
        // Revisa si el n??mero de celda no est?? fuera de rango
        arrayDorsal.push(tabla.rows[i].cells[columna].innerText);
    }
    console.log('Saliendo de la funcion dataColumDorsal() devolviendo un array con los dorsales de la tabla');
    // devuelve un array con los dorsales de la tabla. 
    return arrayDorsal;
}
/**
 * Crea un nuevo runner y lo vuelva en la tabla de los runner ordenador por marca
 */
function insertRunnerInTable(){
    console.log('Entrando en la funcion insertRunnerInTable() sin parametro');
    // creamos un nuevo runner con los datos del formulario
    let r1 = new Runner(document.getElementById('name').value,
                        document.getElementById('surname').value,
                        document.getElementById('date').value,
                        document.getElementById('numDorsal').value,
                        document.getElementById('startTime').value,
                        document.getElementById('endTime').value);
    // insertamos el runner en la lista de runnes                    
    lista.push(r1);
    //ordena la nueva lista de runners y no la vuelca en el HTML
    ordenarRunner();
    console.log('Saliendo de la funcion insertRunnerInTable() sin parametro');
}
/**
 * comparacion de dos runner dependiendo de la marca
 * @param {*object Runner()} a 
 * @param {*object Runner()} b 
 * @returns 1/-1
 */
function compare(a, b) {
    console.log('Entrando en la funcion compare con parametros tipo runner');
    let marca1 = a.calcularMarca();
    let marca2 = b.calcularMarca()

    if ( marca1> marca2) {
        return 1;
    } else {
        return -1;
    }
}
/**
 * indica en que se ha equivocado y pone un focus en el input
 * @param {input} elemento 
 * @param {*String} etiqueta 
 * @param {*String} mensaje 
 * @returns un mensaje pasado por parametro
 */
function error(elemento, etiqueta, mensaje) {
    console.log('Entrando en la funcion error())');
    //establecemos el mensaje de error
    document.getElementById(etiqueta).innerHTML = mensaje;
// m??todo establece el foco en el elemento especificado, si se puede enfocar
    elemento.focus();
    return false;
}


/* EJERCICIO 4 */


/**
 * carga las comunidades autonomas en un select 
 */
function chargeAutonomousCommunity(){
    console.log('Entrando en la funci??n chargeAutonomousCommunity sin parametro');
    // array de objetos comunidades compuestos por dos campos
    let arrayComunidades = [
        { codigo: '', nombre: ''},
        { codigo: '01', nombre: 'Andaluc??a'}, 
        { codigo: '02', nombre: 'Arag??n'}, 
        { codigo: '03', nombre: 'Asturias, Principado de'}, 
        { codigo: '04', nombre: 'Balears, Illes'}, 
        { codigo: '05', nombre: 'Canarias'}, 
        { codigo: '06', nombre: 'Cantabria'}, 
        { codigo: '07', nombre: 'Castilla y Le??n'}, 
        { codigo: '08', nombre: 'Castilla - La Mancha'}, 
        { codigo: '09', nombre: 'Catalu??a'}, 
        { codigo: '10', nombre: 'Comunitat Valenciana'}, 
        { codigo: '11', nombre: 'Extremadura'}, 
        { codigo: '12', nombre: 'Galicia'},
        { codigo: '13', nombre: 'Madrid, Comunidad de'}, 
        { codigo: '14', nombre: 'Murcia, Regi??n de'}, 
        { codigo: '15', nombre: 'Navarra, Comunidad Foral de'}, 
        { codigo: '16', nombre: 'Pa??s Vasco'}, 
        { codigo: '17', nombre: 'Rioja, La'}, 
        { codigo: '18', nombre: 'Ceuta'}, 
        { codigo: '19', nombre: 'Melilla'}
    ];
    // invocamos a la funcion que ir?? a??diendo las opciones
    addOptions("comAutonomas", arrayComunidades);
    console.log('Saliendo de la funci??n chargeAutonomousCommunity');
}
/**
 * carga una lista de privincias dependiendo de la cc.aa elegida
 * **El addEventListener('change') del select de cc.aa se encuenta 
 * alcomienzo del fichero
 */
function chargeProvincieToCCAA(){
    console.log('Entrando en la funci??n chargeProvincieToCCAA sin parametro');
    // borramos las opciones de provincias 
    document.getElementById('listaProvincias').options.length = 0;
    // lista que contendr?? los objetos de nuestro enteres
    let litsProv = [];
    let provincias = [
        { codigo: '', nombre: '', codComunidad:''},
        { codigo: '04', nombre: 'Almer??a', codComunidad:'01'},
        { codigo: '11', nombre: 'C??diz', codComunidad:'01'},
        { codigo: '14', nombre: 'C??rdoba', codComunidad:'01'},
        { codigo: '18', nombre: 'Granada', codComunidad:'01'},
        { codigo: '21', nombre: 'Huelva', codComunidad:'01'},
        { codigo: '23', nombre: 'Ja??n', codComunidad:'01'},
        { codigo: '29', nombre: 'M??laga', codComunidad:'01'},
        { codigo: '41', nombre: 'Sevilla', codComunidad:'01'},
        { codigo: '22', nombre: 'Huesca', codComunidad:'02'},
        { codigo: '44', nombre: 'Teruel', codComunidad:'02'},
        { codigo: '50', nombre: 'Zaragoza', codComunidad:'02'},
        { codigo: '33', nombre: 'Asturias', codComunidad:'03'},
        { codigo: '07', nombre: 'Balears, Illes', codComunidad:'04'},
        { codigo: '35', nombre: 'Palmas, Las', codComunidad:'05'}, 
        { codigo: '38', nombre: 'Santa Cruz de Tenerife', codComunidad:'05'},
        { codigo: '39', nombre: 'Cantabria', codComunidad:'06'},
        { codigo: '05', nombre: '??vila', codComunidad:'07'},
        { codigo: '09', nombre: 'Burgos', codComunidad:'07'},
        { codigo: '24', nombre: 'Le??n', codComunidad:'07'},
        { codigo: '34', nombre: 'Palencia', codComunidad:'07'},
        { codigo: '37', nombre: 'Salamanca', codComunidad:'07'},
        { codigo: '40', nombre: 'Segovia', codComunidad:'07'},
        { codigo: '42', nombre: 'Soria', codComunidad:'07'},
        { codigo: '47', nombre: 'Valladolid', codComunidad:'07'},
        { codigo: '49', nombre: 'Zamora', codComunidad:'07'},
        { codigo: '02', nombre: 'Albacete', codComunidad:'08'},
        { codigo: '13', nombre: 'Ciudad Real', codComunidad:'08'},
        { codigo: '16', nombre: 'Cuenca', codComunidad:'08'}, 
        { codigo: '19', nombre: 'Guadalajara', codComunidad:'08'},
        { codigo: '45', nombre: 'Toledo', codComunidad:'08'},
        { codigo: '08', nombre: 'Barcelona', codComunidad:'09'},
        { codigo: '17', nombre: 'Girona', codComunidad:'09'},
        { codigo: '25', nombre: 'Lleida', codComunidad:'09'},
        { codigo: '43', nombre: 'Tarragona', codComunidad:'09'},
        { codigo: '03', nombre: 'Alicante/Alacant', codComunidad:'10'},
        { codigo: '03', nombre: 'Castell??n/Castell??', codComunidad:'10'},
        { codigo: '03', nombre: 'Valencia/Val??ncia', codComunidad:'10'},
        { codigo: '06', nombre: 'Badajoz', codComunidad:'11'},
        { codigo: '10', nombre: 'C??ceres', codComunidad:'11'},
        { codigo: '15', nombre: 'Coru??a, A', codComunidad:'12'},
        { codigo: '27', nombre: 'Lugo', codComunidad:'12'}, 
        { codigo: '32', nombre: 'Ourense', codComunidad:'12'},
        { codigo: '36', nombre: 'Pontevedra', codComunidad:'12'},
        { codigo: '28', nombre: 'Madrid', codComunidad:'13'},
        { codigo: '30', nombre: 'Murcia', codComunidad:'14'},
        { codigo: '31', nombre: 'Navarra', codComunidad:'15'},
        { codigo: '01', nombre: 'Araba/??lava', codComunidad:'16'},
        { codigo: '48', nombre: 'Bizkaia', codComunidad:'16'},
        { codigo: '20', nombre: 'Gipuzkoa', codComunidad:'16'},
        { codigo: '26', nombre: 'Rioja, La', codComunidad:'17'},
        { codigo: '51', nombre: 'Ceuta', codComunidad:'18'},
        { codigo: '52', nombre: 'Melilla', codComunidad:'19'}
    ];
    // a??adimos la opcion en blanco
    litsProv.push(provincias[0]);
    // recorremos el array de provincias
    for (let i = 1; i < provincias.length; i++) {
        //si el codigo de la comunidad coincide con el value del select de cc.aa
        if(provincias[i].codComunidad == select.value){
            //a??adimos el objeto al array de provincias de esa cc.aa
            litsProv.push(provincias[i]);
        }
    }
    //a??adimos las opciones de provincias
    addOptions("listaProvincias",litsProv);
    // comprobamos que la lista de pronvicias tiene al menos un objeto
    if(litsProv.length > 1){
        // removemos el atributo que deshabilita el select
        document.getElementById("listaProvincias").removeAttribute("disabled");
    }
    console.log('Saliendo de la funci??n chargeProvincieToCCAA sin parametro');
}
/**
 * va a??adiendo al elemento select cada opcion del array pasado por parametro 
 * @param {String} domElement 
 * @param {*Array object} array 
 */
function addOptions(domElement, array){
    console.log('Entrando en la funci??n addOptions con parametros: String y Array');
    //seleccion del element seletct de interes;
    let select = document.getElementById(domElement);
    // recorremos el array 
    for (let i = 0; i < array.length; i++) {
        // vamos creando un element <option> </option> para cada objeto del array
        let option = document.createElement("option");
        //insertamos en cada elemento los campos de interes de los objetos
        option.innerHTML = `${array[i].codigo} - ${array[i].nombre}`;
        // a??adimos el value a cada elemento
        option.setAttribute("value", array[i].codigo);
        // a??adimos cada elemento creado al DOM
        select.add(option);
    }
    console.log('Saliendo de la funcion addOptions')
}

