/**
 * @author Claudia Y Lopez Lafita
 * 
 * ENTREGABLE RA3 - DEWC
 */


/*EJERCICIO 1*/

/**
 * Captación de datos
 */
function inputSlug(){
    console.log('Entrando en la funcion inputSlug() sin parámetros');
    let slug = document.getElementById('slug').value;
    existSlug(slug);
    console.log('Salida de la funcion inputSlug()');
}
/**
 * comprobacion de la entrada con el la captada. 
 * @param {*String} slug 
 */
function existSlug(slug){
    console.log('Entrando en la funcion existSlug() con parámetros:String');

    let origin = window.location.pathname;

    showResultSlug(origin===slug);
    console.log('Saliendo en la funcion existSlug()');
}
/**
 * salida de alter dependien del valor de la entrada
 * @param {Boolean} result 
 */
function showResultSlug(result){
    console.log('Entrando en la funcion showResultSlug() con parámetro: String');
    
    (result==true) ? alert('VERDADERO'):alert('FALSO');
    console.log('Saliendo de la funcion showResultSlug(): Boolean');
}

/*EJERCICIO 2*/

/**
 * Captación del dato de entrada DNI o NIE
 */
function inputDniNie(){
    console.log('Entrando en la funcion inputDniNie()');
    let dni = document.getElementById('dni').value;
    isValidDni(dni)
    console.log('Saliendo de la funcion inputDniNie()');
}
/**
 * validación del DNI/NIE comprobando su formato y su legitimidad en
 * cuanto al numero y letra.
 */
function isValidDni(dni){
    console.log('Comienzo de funcion isValidDni() con parámetro: String');
    // expresiones regulares para DNI o NIE
    const validacion = /^\d{8}-[A-Z]$/;
    const validacion2 = /^[XYZ]\d{7}[A-Z]$/

    if(validacion.test(dni)){

        var letra = dni.substring(dni.length-1);
        var num = dni.replace('-','');
                
        (isValidLetter(num,letra)) ? alert('El DNI es válido') : alert('El DNI no es válido.')       
            
    } else if(validacion2.test(dni)){

        var firstLetter = dni.charAt(0);
        // comprobacion de la letra del NIE y sustitucion por su valor correspondiente
        switch(firstLetter){
            case 'X':
                dni=dni.replaceAt(0,"0");
                break;
            case 'Y':
                dni=dni.replaceAt(0,"1");
                break;
            case 'Z':
                dni=dni.replaceAt(0,"2");
                break;
        }

        var letra = dni.substring(dni.length-1);
        
        (isValidLetter(dni,letra)) ? alert('El NIE es válido') : alert('El NIE no es válido.') 

    } else{
        alert('Documentación invalida')
    }
    console.log('Saliendo de la funcion isValidDni()');
}
/**
 * sustituye el primer caracter (letra) por el valor numerico indicado
 * @param {*Number} index 
 * @param {*String} replacement 
 * @returns String
 */
String.prototype.replaceAt = function(index, replacement) {
    console.log('Entrando en funcion anónima');
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
/**
 * boolean dependiendo de si la letra del DNI/NIE es el correcto
 * @param {*String} numero 
 * @param {*String} letra 
 * @returns boolean 
 */
function isValidLetter(numero,letra){
    console.log('Entrada en la funcion de validacion de letra, parámentros: String');
    var num = numero.substring(0, 8);
    var resto = num %23;
    var letras =['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']; 

    letras = letras.join(""); // unificacion de los items del array para formar un String
    var encontrado = letras.charAt(resto);

    if (letra == encontrado){
        return true;
    } else {return false;}
    console.log('Saliendo la funcion validacion de letra, parámentros: String')
}

/*EJERCICIO 3 */

/**
 * Funcion que capta las cadenas de los input indicados
 */
function inputCadenas(){
    console.log('Entrando en la funcion inputCadenas()');
    let cad1 = document.getElementById('cad1').value;
    let cad2 = document.getElementById('cad2').value;

    compararCadenas(cad1,cad2);
    console.log('Salida de la funcion inputCadenas()');
}
/**
 * Modificaciones de la cadena para la comparacion de las mismas
 * @param {String} cad1 
 * @param {String} cad2 
 */
function compararCadenas(cad1,cad2){
    console.log('Entrando en la funcion comparaCadenas() con parametros: String');
    // eliminamos; espacios, caraeres espaciales, tildes y pasamos a minisucla
    cad1 = cad1.replaceAll(' ','').replaceAll(/\W/g,'').toLowerCase();
    cad2 = cad2.replaceAll(' ','').replaceAll(/\W/g,'').toLowerCase();

    showResultComparateCadenas(cad1===cad2);
    console.log('Saliendo de la función comparaCadenas()');
}
function showResultComparateCadenas(result){
    console.log('Entrando en la funcion showResultComporaCadenas() con parámetros: Boolean');
    (result==true) ? alert('Las cadenas son iguales') : alert('Las cadenas NO son iguales');
    console.log('Salida de la funcion showResultComparateCadenas() con salida de alert');
}

/*EJERCICIO 4 */

/**
 * validacion de la insercion de datos en el formulario 
 * alert indicando  'login realizado' en caso de que todos
 * los campos cumplan con las requitos. 
 */
function isValidForm(){
    console.log('Entrando en la funcion isValidForm() sin parametros');
    isValidUser1();
    isValidPassw1();
    
    if(isValidUser1() && isValidPassw1()){ 
        //creacion de cookie
        setCookie('login',new Date());
            
        openSesion();

        alert('LOGIN REALIZADO');
    } else{
        alert('ERROR EN EL LOGIN');
    }
    console.log('Saliendo de la funcion isValidFomr()');
}
/**
 * crea una cookie con un valor dependiente de 
 * de la opcion de mantener la opcion abierta (true) o no (false)
 */
function openSesion(){
    console.log('Entrando en la funcion openSesion()');
    const $SESION = document.getElementById('openSesion');
    //coprobacion de seleccion de checkbox para asiganar valor true o false 
    // en una nueva cookie
    if ($SESION.checked) {        
        setCookie('keepsessionopen', true);
    } else{
        setCookie('keepsessionopen', false);
    }
    console.log('Salida de la funcion openSesion()');
}
/**
 * valida si el usuario esta relleno y si siguen el patron. 
 * @returns boolean
 */
function isValidUser1(){
    console.log('Entrando en la funcion isValidUser1() sin parámetros');
    const $USER1 = document.getElementById('user1');
    let user = $USER1.value;
    
    if(!user){
        return error($USER1,"userError", "*El Usuario no puede estar vacio");
    } else if(!isFormatUser(user)){
        return error($USER1,"userError", '*El usuario no sigue el patron: <br>-Sin espacios<br>-Minimo tres caracteres'+
                     '<br>-Caracter especial válido "-"');
    }

    return true;
}
/**
 * valida si el usuario sigue el patron que se le indica
 * @param {String} user 
 * @returns boolean
 */
function isFormatUser(user){
    console.log('Entrando en la funicon isFOrmatUse() con parámetro String');
    const validacion = /\S+[a-z1-9]{3,}$/;
    const fomart = /[!@#$ %^&*()_+\=\[\]{};’:”\\|,.\/?]$/;
    
    if(validacion.test(user) && !fomart.test(user)){
        return true;    
    } 
    return false
}
/**
 * valida si la contraseña esta rellena y si cumple con el formato
 * @returns boolean
 */
function isValidPassw1(){
    console.log('Entrando en la funcion isValidPassw1() sin parámetro');
    const $PASSW1 = document.getElementById('password1');
    let passw = $PASSW1.value;
    
    if(!passw){

        return error($PASSW1,"passwordError", "*La contraseña no puede estar vacia");

    } else if(!isFormatPassw(passw)){

        return error($PASSW1,"passwordError", '*La contraseña no sigue el patron:<br>-Un digito<br>-Minimo 6 caracteres'+
                 '<br>-Un caracter especial <br>-Una mayuscula');
    }
    return true;
}
/**
 * valida el formato de la contraseña
 * @param {String} password 
 * @returns boolean
 */
function isFormatPassw(password){
    console.log('Entrando en la funcion isFormatPassw() con parametro String');
    const validacion = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,}$/;
    
    return validacion.test(password);
}
/**
 * crea una cookie con el nombre y valor pasados por parametros
 * @param {String} cookieName 
 * @param {String} cookieValue 
 */
function setCookie(cookieName, cookieValue){
    console.log('Entrada en la funcion setCookie() con parámetros');
    // creacion de cookie y asigancion del valor
    document.cookie = cookieName + "=" + cookieValue + ";";
    console.log('Salida de la funcion setCookie()');
}
/**
 * comprueba si se ha mantenido la sesion abierta o no
 */
function checkExpiracion(){
    console.log('Entrada en la funicon checkExpiracion() sin parámetros');
    let value = getCookie("keepsessionopen");

    (value == true) ? alert('TODO ESTÁ CORRECTO') : timeExpiracion();
    console.log('Salida de la funcion checkExpiracion() con salida de alert');
}
/**
 * obtiene el valor de una cooki pasando el nombre de la misma por parametro
 * @param {String} cookieName 
 * @returns String
 */
function getCookie(cookieName){
    console.log('Entrada en la funcion getCookie() con parámetro String');
    let nameEQ = cookieName + "=";
    let ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1)
        }
        if (c.indexOf(nameEQ) == 0){ 
            return c.substring(nameEQ.length,c.length);
        }
    }
   return "";
}
/**
 * comprueba si la sesion a experido (indicando el tiempo) o no
 */
function timeExpiracion(){
    console.log('Entrada en la funcion timeExpiracion() sin parámetros');
    let fActual = new Date;
    let fCookie = getCookie('login');
    //parseamos la cadena a date (milisegundos);
    fCookie = Date.parse(fCookie);

    let diff = Math.abs(fActual.getTime()-fCookie);
    // pasamos los milisigundos a minutos y segundo
    let dFecha = diff/(1000*60);

    (dFecha>5) ? alert(`El tiempo de la sesión ha expirado.\nTiempo de diferencia ${dFecha} minutos.`) : alert('Sesion sin expirar')
    console.log('Salida de la funcion timeExpiracion() con salida alert');
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
    document.getElementById(etiqueta).innerHTML = mensaje;
// método establece el foco en el elemento especificado, si se puede enfocar
    elemento.focus();

    return false;
}

/* EJERCICIO 5 */ 

/**
 * Validacion de los datos ingresados en el formulario para comprobar
 * que se ha logeado correctamente en usuario
 */
function isValidForm2(){
    console.log('Entrando en la funcion isValidForm2() sin parametros');
    let option = confirm('¿Enviar el formilario?')

    if(option){

        isValidName();
        isValidSurname();
        isValidFecha();
        isValidEmail();
        isValidUser();
        isvalidPassword();
        isValidWeb();
        
        if(isValidName()&& isValidSurname()&&
            isValidFecha()&& isValidEmail()&&
            isValidUser()&& isvalidPassword()&&
            isValidWeb()){
            
            alert('LOGIN REALIZADO')
        }
    }
    console.log('Saliendo de la funcion isValidForm2()')	 
}
/**
 * comprueba que el nombre es valido.
 * @returns boolean
 */
function isValidName(){
    console.log('Entrando en la funcion isValidName() sin parametros');
    const $NAME = document.getElementById('name');
    const name = $NAME.value;

    if(!name){
        return error($NAME, 'errorName','*El nombre es obligatorio.')
    } else if(!isText(name)){
        return error($NAME, 'errorName','*El nombre tiene que ser una palabra o dos.')
    }
    return true;
}
/**
 * comprueba que el nombre es valido.
 * @returns boolean
 */
 function isValidSurname(){
    console.log('Entrando en la funcion isValidSurname() sin parámetros');
    const $SURNAME = document.getElementById('surname');    
    const surname = $SURNAME.value;

    if(!surname){
        return error($SURNAME, 'errorSurname','*El apellido es obligatorio.')
    } else if(!isText(surname)){
        return error($SURNAME, 'errorSurname','*El apellido tiene que se una palabra o dos.')
    }

    return true;
}
/**
 * comprueba si una cadena (nomre y apellido) son palabas
 * @param {String} text 
 * @returns boolean
 */
 function isText(text){
    console.log('Entrando en la funcion isText() con parametro String');
    if (isNaN(text)){

        const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
        return validacion.test(text);

    }else{
        return false;
    }
}
/**
 * comprueba que la fecha no esta vacia y que cumple el formato
 * @returns boolean
 */
function isValidFecha(){
    console.log('Entrando en la fucion isValidFecha() sin párametro');
    const $FECHA = document.getElementById('fecha');
    const fecha = $FECHA.value;
    
    if(!fecha){
        return error($FECHA,'errorFecha','*La fecha es obligatoria');
    } else if(!isFecha(fecha)){
        return error($FECHA,'errorFecha','*La fecha tiene que tener formato dd/mm/yyyy');
    } else if(!esMayorEdad(fecha)){
        return error($FECHA,'errorFecha','*No eres mayor de edad');
    }
    return true;
}
/**
 * comprueba que la edad del usuario es mayor de edad
 * @param {String} fecha 
 * @returns boolean
 */
function esMayorEdad(fecha){
    console.log('Entrando en la funcion esMayorEdad() con parametro String');
    let fActual = new Date();

    let diff = fActual.getFullYear() - fecha.substring(0,4);

    if(diff>=18){
        return true;
    }

    return false;
}
/**
 * comprueba que es una fecha lo que se ha ingresado
 * @param {String} fecha 
 * @returns boolean
 */
function isFecha(fecha){
    console.log('Entrando en la funcion isFecha() con parametro String');
    const validacion = /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$$/;

    var salida = formato(fecha);

   return validacion.test(salida);
}
/**
 * Convierte un texto de la forma 2017-01-10 a la forma
 * 10/01/2017
 * @param {String} texto 
 * @returns String
 */
function formato(texto){
    console.log('Entrando en la funcion formato() con parametro String');
    return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
}
/**
 * valida si el email cumple con nuestras condiciones
 * @returns boolean
 */
function isValidEmail(){
    console.log('Entrando en la funcion isValidEmail() sin parametros');
    const $MAIL = document.getElementById('email');
    const mail = $MAIL.value;
    
    if(!mail){
        return error($MAIL,'errorMail','*El mail es obligatorio');
    } else if(!isFormatEmail(mail)){
        return error($MAIL,'errorMail','*El mail tiene que ser: ejemplo@dominio.xx');
    }
    return true;
}
/**
 * copmrubea que el email sigue el patron indicado
 * @param {String} email 
 * @returns boolen
 */
function isFormatEmail(email){
    console.log('Entrando en la funcion isFormarEmail()');
    const validacion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    return validacion.test(email);
}
/**
 * validacion de campo vacio o no para el usuario
 * @returns boolean
 */
function isValidUser(){
    console.log('Entrando en la funcion isValidUser() sin parametros');
    const $USER = document.getElementById('user');
    const user = $USER.value;

    if(!user){
        return error($USER,'errorUser','*El usuario es obligatorio');
    } else if(!isFormatUser(user)){
        return error($USER,"userError", '*El usuario no sigue el patron: <br>-Sin espacios<br>-Minimo tres caracteres'+
                     '<br>-Caracter especial válido "-"');
    }
    return true;
}
/**
 * valida si la contraseña/confirmacion estan rellenas y si coinciden
 * @returns boolean
 */
function isvalidPassword(){
    console.log('Entrando en la funcion isValidPassword() sin paŕametro');
    const $PASSW = document.getElementById('passw');
    const $CONFPASSW = document.getElementById('confPassw');
    const password = $PASSW.value;
    const confPassword = $CONFPASSW.value;
    
    if(!password){
        return error($PASSW,'errorPassw','*La contraseña es obligatoria');
    } else if(!confPassword){
        return error($PASSW,'errorPasswConf','*La confirmacion es obligatoria');
    } else if(!isFormatPassw(password)){
        return error($PASSW,"errorPassw", '*La contraseña no sigue el patron:<br>-Un digito<br>-Minimo 6 caracteres'+
                 '<br>-Un caracter especial <br>-Una mayuscula');
    }
    
    if(password!==confPassword){
        return error($PASSW,'errorPasswConf','*No coincide con la contraseña');
    }
    return true;
}
/**
 * comprueba que que la url tiene el formato correcto
 * @returns boolean
 */
function isValidWeb(){
    console.log('Entrando en la funcion isValidWeb() sin parametros');
    const $WEB = document.getElementById('web');
    const web = $WEB.value;

    const validacion=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    
    if (!validacion.test(web)){
        return error($WEB,'errorWeb','*La web Debe tener siguiente formato: http://www.xxxx.yyy');
    }
    return true;
}
/**
 * posibilida cerrar la ventana de formulario dependiendo de la opcino que indique el usuario
 */
function cerrarVentana(){
    console.log('Entrando en la funcion cerrarVentan()');
    let opcion = confirm('¿Quieres cerrar la ventana?')
    
    if(opcion){
        window.close();
    }else{
        alert('No se cerrará la ventana');
    }
    console.log('Saliendo de la funcion cerrarVentan()');
}

/*EJERCICIO  6*/
/**
 * Captacion de los datos de entrada
 */
function promptFechas(){
    console.log('Entrada en la funcion promptFechas() sin parametros');
    let fecha =prompt('Indica una fecha (yyyy-mm-dd):');
    diferenciaFechas(fecha)
    console.log('Salida de la funcion promptFechas() sin parametros');
}
/**
 * Devuelve la diferencia de las fechas en valor absoluto
 */
function diferenciaFechas(fecha){
    console.log('Entrando en la funcion diferenciaFechas() con parametros');
    // definicion de la fecha del usuario y la actual 
    let fUser = new Date(fecha);
    let fActual = new Date();
    
    // obtenemos la diferecia de cada uno de los elementos que nos interesa. 
    let dDays = Math.abs(fUser.getDate()-fActual.getDate());
    let dMonth = Math.abs((fUser.getMonth() + 1) - (fActual.getMonth() + 1));
    let dYear = Math.abs(fUser.getFullYear()-fActual.getFullYear());
    let dHour = Math.abs(fUser.getHours()-fActual.getHours());
    let dMinut = Math.abs(fUser.getMinutes()-fActual.getMinutes());
    let dSecond = Math.abs(fUser.getSeconds()-fActual.getSeconds());

    showResultDiffFechas(dDays,dMonth,dYear,dHour,dMinut,dSecond)
    console.log('Salida de la funcion diferenciaFechas() sin paramereos');
}
/**
 * Salida de datos con el formato establecido
 * @param {*} dDays 
 * @param {*} dMonth 
 * @param {*} dYear 
 * @param {*} dHour 
 * @param {*} dMinut 
 * @param {*} dSecond 
 */
function showResultDiffFechas(dDays,dMonth,dYear,dHour,dMinut,dSecond){
    console.log('Entrada en la funcion showResultDiffFechas() con parametros');
    alert(`La diferencia entre las fechas es es:`+
    `\nDias: ${dDays}, Meses: ${dMonth}, Años: ${dYear}`+
    `\nHoras: ${dHour}, Minutos: ${dMinut}, Segundos: ${dSecond}`);
    console.log('Salida de la funcion showResultDiffFechas() con alert');
}

/*EJERCICIO 7 */

/**
 * Cantacion de los datos de entrada
 */
function promptFecha(){
    console.log('Entrada en la funcion promptFecha() sin parametros');
    let fecha = prompt('Introduce una fecha (ej:dd-mm-yyyy): ')
    fechaLetras(fecha);
    console.log('Salida de la funcion promptFecha() sin parametros');
}
/**
 * transforma el mes de la fecha en letras 
 * para sacar la fecha en formato nombre completo
 */
function fechaLetras(fecha){
    console.log('Entrada en la funcion fechaLetras() con parametros String');
    //definicion de variables
    let mesDescrip;
    
    // obtencion de las partes de interes de la fecha
    let dia = fecha.substring(0,2);
    let mes = fecha.substring(3,5);
    let anyo = fecha.substring(6,10);

    // control de flujo para obtener el mes en palabra
    switch(mes){
        case "01":
            mesDescrip = 'Enero';
            break;
        case "02":
            mesDescrip = 'Febrero';
            break;
        case "03":
            mesDescrip = 'Marzo';
            break;
        case "04":
            mesDescrip = 'Abril';
            break;
        case "05":
            mesDescrip = 'Mayo';
            break;
        case "06":
            mesDescrip = 'Junio';
            break;
        case "07":
            mesDescrip = 'Julio';
            break;
        case "08":
            mesDescrip = 'Agosto';
            break;
        case "09":
            mesDescrip = 'Septiembre';
            break;
        case "10":
            mesDescrip = 'Octubre';
            break;
        case "11":
            mesDescrip = 'Noviembre';
            break;
        case "12":
            mesDescrip = 'Diciembre';
            break;
        default:
            alert('Este mes no existe.')
    }
    showResultFechasLetras(dia,mesDescrip,anyo)
    console.log('salida la funcion fechaLetras() con parametros String');
}
/**
 * Salida de resultado con el formato establecido
 * @param {*} dia 
 * @param {*} mesDescrip 
 * @param {*} anyo 
 */
function showResultFechasLetras(dia,mesDescrip,anyo){
    console.log('Entrada de la funcion showResultFechasLetras() con parametros');
    alert(`Tu fecha descrita es:\n ${dia} de ${mesDescrip} del ${anyo}`)
    console.log('Salida de la funcion showResultFechasLetras() con un alert');
}

/*EJERCICIO 8 */

/**
 * abre una ventana nueva con las propiedades indicadas
 * escribre en la ventana la informacion que se le indica con el metodo
 * document.write
 */
function imprimirResguador(){
    console.log('Entrando en la funcion imprimirResguador() sin parámetros');
    let propiedades = "width=400,height=500,top=500,left=500,menubar=no,resizable=no,toolbar=no,location=no, url=no";
    let myVentana = open("", "", propiedades);

    myVentana.document.write('<h2>Resgurardo</h2>');
    myVentana.document.write('<img src="./assets/images/logoIesAlixar.png" alt="logoIesAlixar style="width=55px,height=55px">')
    myVentana.document.write('<p>Nombre: Claudia Y López Lafita</p>');
    myVentana.document.write('<p>Evento: Carrera Popular del IES Alixar</p>');
    myVentana.document.write('<p>Fecha: 6 de Octubre de 2022</p>');
    myVentana.document.write('<p>Dorsal: 4469</p>');
    myVentana.document.write('<p>Hora: 9:00 am</p>');

    console.log('Saliendo de la funcion imprimirResguador() sin parámetros');
}

/* EJERCICIO 9 */

/**
 * solicita los datos necesario para crear un Runner
 * y los muestra por un alert
 */
function crearRunner(){
    console.log('Entrando en la funcion crearRunner() sin parametros'); 

    // let runner = new Runner(nombre, apellido,evento,fecha,dorsal,hIni,hFin);
    let runner = new Runner("nombre", "apellido","evento","2000-12-12","dorsal","12:00:00","");
    let runne = new Runner("nombre", "apellido","evento","2000-12-12","dorsal","","12:00:00");
    let runn = new Runner("nombre", "apellido","evento","2000-12-12","dorsal","12:00:00","13:20:50");

    debugger
    document.getElementById('runner').innerHTML = runner.showInfo() +'<br>'+runne.showInfo()+'<br>'+runn.showInfo();
    console.log('Saliendo de la funicon crearRunner() con salinda en html y alert');
}
/**
 * constructor del objeto runner con sus atributos y métodos
 * @param {String} name 
 * @param {*String} surname 
 * @param {*String} event 
 * @param {*String} fecha 
 * @param {*String} dorsal 
 * @param {*String} hIni 
 * @param {*String} hFin 
 */
function Runner(name,surname,event,fecha,dorsal,hIni,hFin,){
    console.log('Entrando en el constructor del objeto runner');
    //atributos
    this.name=name;
    this.surname=surname;
    this.event=event;
    this.fecha=new Date(fecha);
    this.dorsal=dorsal;
    this.hIni= (this.hIni=="Invalid Date") ? "00:00:00" : new Date("1970-01-01T" + hIni);
    this.hFin= (this.hFin=="Invalid Date") ? "00:00:00" : new Date("1970-01-01T" + hFin);
    debugger
    // calculo de la marca: diferencia entre hora final e inicial
    this.calcularMarca = function calcularMarca(){
        let marca; 
        debugger
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
            ", \nEvento: " +
            this.event +
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

/* EJERCICIO 10 */

function nameRunner(){
    console.log('Entrando en la funcion nameRUnner() sin salida');
    let nombre = prompt('Indica el nombre del corredor \nnombres:[Claudia,Manuel,Andrea,Gema,Stefano,Carlos]:');
    ordenarRunner(nombre);
    console.log('Saliendo en la funcion nameRUnner() sin salida');
}
/**
 * ordena por marca de menor a menor la lista de runners
 */
function ordenarRunner(nombre){
    console.log('Entrando en la funcion ordenarRunner() sin parametro');
    let posicion;

    let lista = arrayRunner();
    let runners='';
    //ordenación indicando que debe comparar
    let listaOrdenada = lista.sort(compare);

    //recorrido de la lista para mostrar toda la información de los runners
    for (let x = 0; x < listaOrdenada.length; x++) {

        runners += '<br>'+(x+1)+'.- '+listaOrdenada[x].showInfo();
        // vamos comprobando el atributo nombre de cada elemento de la lista y comparamos
        // el valor con el que ha indicado el usuario
        if(listaOrdenada[x].name===nombre){
            posicion = (x+1);
        }
    }
    showListRunnerSort(nombre,posicion,runners);
    console.log('Saliendo de la funcion ordenarRunner() sin parametro');
}
function showListRunnerSort(nombre,posicion,runners){
    console.log('Entrando en la funcion showListRunnerSort() con salida en html');
    document.getElementById('posicion').innerHTML = `Posicion de ${nombre}: ${posicion}º`
    document.getElementById("result").innerHTML = runners; 
    console.log('Saliendo de la funcion showListRunnerSort() con salida en html');
}
/**
 * crea y añade una serie de runner en un array. 
 * @returns arrayList de runners
 */
function arrayRunner(){
    console.log('Entrando en la funcion arrayRUnner() sin parametros');
    let listaRunner = [];

    let r1 = new Runner("Claudia","L.","Gato","2002-12-03","1234","10:25:00","11:15:45");
    listaRunner.push(r1);

    let r2 = new Runner("Andrea","D.","Perro","2002-12-03","7896","10:25:00","12:35:45");
    listaRunner.push(r2);

    let r3 = new Runner("Manuel","A.","Gato","2002-12-03","3214","10:25:00","10:55:45");
    listaRunner.push(r3);

    let r4 = new Runner("Gema","E.","Pollo","2002-12-03","9632","10:25:00","14:15:45");
    listaRunner.push(r4);

    let r5 = new Runner("Carlos","C.","ALixar","2002-12-03","1456","10:25:00","10:59:45");
    listaRunner.push(r5);

    let r6 = new Runner("Stefano","M.","Gato","2002-12-03","7852","10:25:00","13:15:45");
    listaRunner.push(r6);

    return listaRunner;

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