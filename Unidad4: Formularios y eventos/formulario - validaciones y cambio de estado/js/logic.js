let formulario = document.getElementById("formDisc");

window.onload = iniciar; //Sin paréntesis

function iniciar() {
    document.getElementById("send_button").addEventListener("click", validar, false);
}

function validar(e) {
    //llamamos a las funciones para que se muestren los errores
    validName();
    validAuthor();
    validAnyo();

    //comprobamos que los datos son correctos
    if (
        validName() &&
        validAuthor() &&
        validAnyo() &&
        confirm("¿Desea enviar el formulario?")
    ) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function validName(){
    //captamos a al input
    let name = document.getElementById('nameDisc');
    //regresa un boolean tras validar
    return validText(name);
}

function validAuthor(){
    //captamos a al input
    let author = document.getElementById('autorDisc');
    //regresa un boolean tras validar 
    return validText(author);
}

function validText(texto){
    //comprobacion de estar completa y tener menos de 20 caract
    if(!texto.value || texto.value.length >20){
        //invocamos la funcion errorClass
        errorClass(texto);
        //regresamos fasle
        return false
    }
    //regresamos true
    return true;
}

function validAnyo(){
    //captamos a al input
    let anyo = document.getElementById("anyoPublic");
    //comprobamos que esta completo y con un valor <= 1887
    if (!anyo.value || anyo.value < 1887) {
        //invocamos la funcion errorClass
        errorClass(anyo);
        //regresamos false
        return false;
    }
    //regresamos true
    return true;
}

function errorClass(elemento) {
    // en la etiqueta input ponemos una clase
    elemento.className = "error";
    //en la etiqueta label ponemos un clase
    elemento.previousElementSibling.className = "errorEtiqueta";
    elemento.focus() ;
}