/* EJERCICIO 5 Y 6*/

const inputs = document.querySelectorAll('input');
const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
const inputDate = document.querySelector('#fecha');
const inputCp = document.querySelector('#codPost');
const inputEmail = document.querySelector('#email');
const inputUser = document.querySelector('#user');
const inputPassword = document.querySelector('#passw');
const inputConfPassword = document.querySelector('#confPassw');
const inputWeb = document.querySelector('#web');

// definimos los addEventListener para que haga el evento indicado
inputName.addEventListener('focusout',isValidName, true);
inputSurname.addEventListener('focusout',isValidSurname, true);
inputDate.addEventListener('focusout',isValidFecha, true);
inputCp.addEventListener('focusout',isValidCodPost, true);
inputEmail.addEventListener('focusout',isValidEmail, true);
inputUser.addEventListener('focusout',isValidUser, true);
inputPassword.addEventListener('focusout',isvalidPassword, true);
inputConfPassword.addEventListener('focusout',isvalidConfPassword, true)
inputWeb.addEventListener('focusout',isValidWeb, true);


/**
 * comprueba que el nombre es valido.
 * @returns boolean or message error
 */
function isValidName(){
    console.log('Entrando en la funcion isValidName() sin parametros');
    // obtenemos el valor del input
    const name = inputName.value;
    // comprobamos que se cumplen los requerimientos para definir estilo
    if(!name){
        return errorClass(inputName, 'errorName', '*El nombre es obligatorio.');
    } else if(!isText(name)){
        return errorClass(inputName,'errorName','*El nombre tiene que ser una palabra o dos.');
    } else{
        successClass(inputName, 'errorName');
        return true;
    }
}
/**
 * comprueba que el apellido es valido.
 * @returns boolean
 */
function isValidSurname(){
    console.log('Entrando en la funcion isValidSurname() sin parámetros');
    const surname = inputSurname.value;
        // comprobamos que se cumplen los requerimientos para definir estilo
    debugger
    if(!surname){
        return errorClass(inputSurname, 'errorSurname','*El apellido es obligatorio.')
    } else if(!isText(surname)){
        return errorClass(inputSurname, 'errorSurname','*El apellido tiene que se una palabra o dos.')
    }else{
        successClass(inputSurname, 'errorSurname');
        return true;
    }
}
/**
 * comprueba si una cadena (nombre y apellido) son palabas
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
    const fecha = inputDate.value;
    
    if(!fecha){
        return errorClass(inputDate,'errorFecha','*La fecha es obligatoria');
    } else if(!isFecha(fecha)){
        return errorClass(inputDate,'errorFecha','*La fecha tiene que tener formato dd/mm/yyyy');
    } else if(!esMayorEdad(fecha)){
        return errorClass(inputDate,'errorFecha','*No eres mayor de edad');
    }else{
        successClass(inputDate, 'errorSurname');
        return true;
    }
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
    // comprueba que tenga mas de 18
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
 * funcion que validad la el codigo postal
 * @returns boolean or message error
 */
function isValidCodPost(){
    console.log('Entrando en la funcion isValidCodPost() sin parametro');
    let cp = inputCp.value;
    let validacion = /\d{5}/

    if(!validacion.test(cp)){
        return errorClass(inputCp, 'errorCodPost','*El codigo postal debe ser de territorio Español');
    }else{
        successClass(inputCp, 'errorSurname');
        return true;
    }
}
/**
 * valida si el email cumple con nuestras condiciones
 * @returns boolean
 */
function isValidEmail(){
    console.log('Entrando en la funcion isValidEmail() sin parametros');
    const mail = inputEmail.value;
    
    if(!mail){
        return errorClass(inputEmail,'errorMail','*El mail es obligatorio');
    } else if(!isFormatEmail(mail)){
        return errorClass(inputEmail,'errorMail','*El mail tiene que ser: ejemplo@dominio.xx');
    }else{
        successClass(inputEmail,'errorMail');
        return true;
    }
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
    const user = inputUser.value;

    if(!user){
        return errorClass(inputUser,'errorUser','*El usuario es obligatorio');
    } else if(!isFormatUser(user)){
        return errorClass(inputUser,"userError", '*El usuario no sigue el patron: <br>-Sin espacios<br>-Minimo tres caracteres'+
                    '<br>-Caracter especial válido "-"');
    }else{
        successClass(inputUser,'errorMail');
        return true;
    }
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
 * valida si la contraseña/confirmacion estan rellenas y si coinciden
 * @returns boolean
 */
function isvalidPassword(){
    console.log('Entrando en la funcion isValidPassword() sin paŕametro');
    //captamos el valor de los inputs
    const password = inputPassword.value;   
    if(!password){
        return errorClass(inputPassword,'errorPassw','*La contraseña es obligatoria');
    } else if(!isFormatPassw(password)){
        return errorClass(inputPassword,"errorPassw", '*La contraseña no sigue el patron:<br>-Un digito<br>-Minimo 6 caracteres'+
                '<br>-Un caracter especial <br>-Una mayuscula');
    } else {
        successClass(inputPassword,'errorPassw');
        return true;
    }
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
 * 
 * @returns boolean or erros stye
 */
function isvalidConfPassword(){
    const password = inputPassword.value;
    const confPassword = inputConfPassword.value;

    if(!confPassword){
        return errorClass(inputConfPassword,'errorPasswConf','*La confirmacion es obligatoria');
    } else if(password!==confPassword){
        return errorClass(inputConfPassword,'errorPasswConf','*No coincide con la contraseña');
    }else {
        successClass(inputConfPassword,'errorPassw');
        return true;
    }
}
/**
 * comprueba que que la url tiene el formato correcto
 * @returns boolean
 */
function isValidWeb(){
    console.log('Entrando en la funcion isValidWeb() sin parametros');
    const web = inputWeb.value;
    //regex con protocolo
    const validacion=/^http[s]?:\/\/[\w]+([\.]+[\w]+)+$/
    // regex sin protocolo
    const validacion2 = /^[\w]+([\.]+[\w]+)+$/
    //copmprobamos si sigue el regex o no para dar un estilo en concreto
    if (!validacion.test(web) && !validacion2.test(web)){
        return errorClass(inputWeb,'errorWeb','*La web Debe tener siguiente formato: www.xxxx.yyy o https://www.xxxx.yyy');
    }else{
        // comprobamos que tiene protocolo
        if(validacion2.test(web)){
            //añadimos el protocolo
            inputWeb.value= 'https://'+web;
        }
        successClass(inputWeb,'errorPassw');
        return true;
    }
}
/**
 * define el estilo y muestra el error
 * @param {element DOM} elemento 
 * @param {*String} idError 
 * @param {*String} mensaje 
 */
function errorClass(elemento, idError , mensaje) {
    // en la etiqueta input ponemos una clase
    elemento.classList.add('invalidInput');
    //en la etiqueta label ponemos un clase
    elemento.previousElementSibling.classList.add("errorEtiqueta");
    //añadimos una etiqueta span con el mensage de error
    document.getElementById(idError).innerHTML = `${mensaje}`;
}
/**
 * cambia el estilo de los input en caso de ser correcto
 * @param {Element} elemento 
 * @param {*String} idError 
 */
function successClass(elemento, idError){
        // en la etiqueta input ponemos una clase
        elemento.classList.add('validInput');
        //en la etiqueta label ponemos un clase
        elemento.previousElementSibling.classList.add("successEtiqueta");
        //añadimos una etiqueta span con el mensage de error
        document.getElementById(idError).innerHTML = '';
}