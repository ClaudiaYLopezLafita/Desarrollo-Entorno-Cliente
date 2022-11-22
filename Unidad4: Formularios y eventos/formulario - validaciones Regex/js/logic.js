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
    debugger
    if(!gr ||isNaN(gr) ||!inRange(gr) ){
        errorClass(gramos);
        return false;
    }
    return true;
}
function inRange(gr){
    debugger
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

    if(!compo.value || !regex.test(comp)){
        errorClass(compo);
        return false;
    }
    return true;
}

function validCuentaBancario(){

}
function isValidCuentaBac(){
    
}

function errorClass(elemento) {
    // en la etiqueta input ponemos una clase
    elemento.className = "error";
    //en la etiqueta label ponemos un clase
    elemento.previousElementSibling.className = "errorEtiqueta";
    // elemento.focus() ;
}