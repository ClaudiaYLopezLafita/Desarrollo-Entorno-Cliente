/**
 * Ejercicio 3 date
 * @author Claudia Y. Lopez Lafita
 * 
 * Crea un programa que muestre la fecha actual en diferentes formatos, 
 * según el valor que introduzca el usuario por parámetro:
    15/10/2020
    Jueves, 15 de octubre de 2020.
    Thursday, October 15, 2020.
 */

//capturar un parámetro introducido de un array de elementos introducirla en variable
const arguments = process.argv.slice(2);
const eleccion = arguments[0];

let date = new Date();

// obtienen los valores de interés: día, mes, año y día de la semana
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
let weekDay = date.getDay();

// Inicio de flujo segun elecciones
if(eleccion==1){

    console.log(day+"/"+month+"/"+year);

}else if(eleccion==2){
    
    // flujo para dia semana
    switch(weekDay){
        case 0: weekDay = "Domingo"; break;
        case 1: weekDay = "Lunes"; break;
        case 2: weekDay = "Martes"; break;
        case 3: weekDay = "Miércoles"; break;
        case 4: weekDay = "Jueves"; break;
        case 5: weekDay = "Viernes"; break;
        case 6: weekDay = "Sábado"; break;
    }

    //flujo para meses
    switch(month){
        case 1: month = "enero"; break;
        case 2: month = "febrero"; break;
        case 3: month = "marzo"; break;
        case 4: month = "abril"; break;
        case 5: month = "mayo"; break;
        case 6: month = "junio"; break;
        case 7: month = "julio"; break;
        case 8: month = "agosto"; break;
        case 9: month = "septiembre"; break;
        case 10: month = "octubre"; break;
        case 11: month = "noviembre"; break;
        case 12: month = "diciembre"; break;
    }
    //salida dato
    console.log(weekDay+", "+day+" de "+month+" de "+year+".");

}else if(eleccion==3){
    
    //salida datos
    console.log(date.toDateString());

}else{
    console.error("Esto no es una eleccion");
}