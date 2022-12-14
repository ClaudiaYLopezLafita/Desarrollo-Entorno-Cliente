let formulario = document.getElementById("formDisc");

window.onload = iniciar; //Sin paréntesis

function iniciar() {
    document.getElementById("send_button").addEventListener("click", validar, false);
}

function validar(e){
    // llamada de las funciones para cambio de estadas de una vez. 

        validFecha();
        validCocinero();
        validDestinatario();
        validGramos();       
        validComposicion();
        validCuentaBancario();

    // comprobacion para envio de formulario
    if (
        confirm('¿Desea enviar el formulario?') &&
        validFecha() &&
        validCocinero() &&
        validDestinatario()&&
        validGramos()&&
        validComposicion()&&
        validCuentaBancario()
    ) {
        alert('LOGIN CORRECTO')
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function validFecha(){
    let fecha = document.getElementById('fecha');

    return isvalidDate(fecha);
}
function isvalidDate(fecha){
    const validacion = /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$$/;
    var salida = isFormant(fecha.value);

    if(!fecha.value || !validacion.test(salida)){
        errorClass(fecha);
        return false;
    }

    return true;
}
function isFormant(texto){
    return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
}

function validCocinero(){
    let cocinero = document.getElementById('cocinero');

    return isValidCocinero(cocinero);
}
function isValidCocinero(cocinero){
    let regex = /^([A-Z]{2}.[0-9]{4})$/;

    if(!cocinero.value || !regex.test(cocinero.value)){
        errorClass(cocinero);
        return false;
    }
    return true;
}

function validDestinatario(){
    let destinatario = document.getElementById('destinatario');
    return isValidDest(destinatario);
}
function isValidDest(destinatario){
    let regex = /^([A-Z]{2,3}_([\wáéíóúÁÉÍÓÚ]+):\d{4})$/;

    if(!destinatario.value || !regex.test(destinatario.value)){
        errorClass(destinatario);
        return false;
    }
    return true;
}

function validGramos(){
    let gramos = document.getElementById('gramos');
    return isValidGramos(gramos);
}
function isValidGramos(gramos){
    let gr = parseFloat(gramos.value)
    
    if(!gr ||isNaN(gr) ||!inRange(gr) ){
        errorClass(gramos);
        return false;
    }
    return true;
}
function inRange(gr){
    
    if(gr >=100 && gr <=500){
        return true;
    }
    return false;
}

function validComposicion(){
    let composicion = document.getElementById('composicion');
    return isValidComposicion(composicion);
}
function isValidComposicion(compo){

    let regex = /^(\d{3,4}g[A-Z]{1,2}\d{0,1}[A-Z]{1,2}\d{0,1})$/;
    if(!compo.value || !regex.test(compo)){
        errorClass(compo);
        return false;
    }
    return true;
}

function validCuentaBancario(){
    let cuenta = document.getElementById('numBancario');
    return isValidCuentaBac(cuenta);
}
function isValidCuentaBac(cuenta){
    let regex = /^([A-Z]{2}\d{2}-\d{12}-\d{2})$/;
    let numBac = cuenta.value;
    debugger
    if(regex.test(numBac)){
        
        if(!isValidFirstSegmento(numBac.subString(0,4)) || 
        !isValidSecondSegmento(numBac.substring(5,20))){
            errorClass(cuenta);
            return false
        }
    }
    return true;
}
function isValidFirstSegmento(num){
    debugger
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // obtenemos las dos primeras letras
    let firstLetra=num[0];
    let secondLetra=num[1];
    //comprobamos que
    if((firstLetra==="L" && secondLetra==="L")||(firstLetra==="Ñ" || secondLetra==="Ñ")){
        return false;
    }else{
        //obtenmos los dos digitos
        let digitos = num.subString(0,4);
        // obtenemos el valor numerico de las letras
        let firstValue = letras.indexOf(firstLetra)+1;
        let secondValue = letras.indexOf(secondLetra)+1;
        // obtenemos la suma de las letras
        let sumValueLetras = firstValue+secondValue;
        //comprobamos que la suma del valor de las letras coincide con los digitos
        if(sumValueLetras===parseInt(digitos)){
            //comprovamos que la suma de las letras sea mayor o menor a 10
            if((sumValueLetras<10 && parseInt(digitos[0])===0)){
                return true
            }
        }
    }
}
function isValidSecondSegmento(num){
    debugger
    //declaracion de varibles
    let sumaFirstParte =0, sumaSecondParte=0, firstCondicion=0, secondCondicion=0;
    // obtnemos los 12 digitos de la expresion
    let doceDigitos = num.substring(0,12);
    // obtenemos los dos ultimos digitos de la cadena
    let ultimoDigito = parseInt(num[num.length-1]);
    let penultimoDigito = num[num.length-2];
    // subdividimos los 12 digitos en dos grupos de 6
    let seisFirstDigitos = doceDigitos.substring(0,6);
    let seisSecondDigitios = doceDigitos.subString(6,12);
    // vamos sumnando los digitos de cada grupo de 6
    for(let i = 0; i<seisFirstDigitos.length; i++){
        sumaFirstParte += parseInt(seisFirstDigitos[i]);
        sumaSecondParte += parseInt(seisSecondDigitios[i]);
    }
    // suma de los digitos de cada parte y dividido entre 6
    firstCondicion = parseInt(sumaFirstParte/6);
    secondCondicion = parseInt(sumaSecondParte/6);
    debugger
    // comprobamos que la condicion coincida con los digitos. 
    if( penultimoDigito!==firstCondicion || ultimoDigito!==secondCondicion ){
        return false;
    }
    return true;
}

function errorClass(elemento) {
    // en la etiqueta input ponemos una clase
    elemento.className = "error";
    //en la etiqueta label ponemos un clase
    elemento.previousElementSibling.className = "errorEtiqueta";
    // elemento.focus() ;
}