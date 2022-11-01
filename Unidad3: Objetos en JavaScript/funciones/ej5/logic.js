/**
 * Ejercicio 5: Funciones
 * 
 * @author Claudia Y Lopez Lafita
 * 
 * Reloj digital. Visualizar en una página html un reloj digital que se va actualizando cada segundo.
 * Vuestro programa debe generar dicho reloj a partir del objeto Date
 * Utilizar la función setInterval para programar que se actualice el campo de texto cada segundo.
 * 
 */


function relojDigital(){
    // recopilamos la hora actual y lo que nos interesa (hh-mm-ss)
    momentoActual = new Date()

    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    //combinamos los resultados para construir la hora con el formato
    let horaSalida = hora + " : " + minuto + " : " + segundo

    //  colocamos en el campo del formulario el valor de la hora
    document.form_reloj.reloj.value = horaSalida

    // hacemo
    setTimeout("relojDigital()",1000);
}