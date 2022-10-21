/**
 * Ejercicio 4 date
 * @author Claudia Y Lopez Lafita
 * 
 * Crea un programa que muestre la hora actual en diferentes formatos, 
 * según el valor que introduzca el usuario por parámetro:
 * 
 *      OPCION 1 --14:35:07 (hora detallada con minutos y segundos)
 *      OPCION 2 -- 02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día)
 */

// captura de parametros en una variable
const argumentos = process.argv.slice(2);
const eleccion = argumentos[0];

let date = new Date();

// Obtencion valores de interés: día, mes, año y día de la semana
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// Evaluación de la opción para la ejecución de las distintas estructuras
if(eleccion==1){
    console.log(hour+":"+minutes+":"+seconds);
}else if(eleccion==2){
    
    let format = hour >= 12 ? 'PM' : 'AM'; // Comprobación AM o PM
    
    hour = hour%12; // Cálculo a 12horas
    
    hour = hour ? hour : 12; // Cambio a 12horas
    minutes = minutes < 10 ? '0' + minutes : minutes;

    //salida resultado
    console.log(hour+":"+minutes+" "+format);

}else{
    // Control de error del dato introducido como parámetro
    console.error("Esta no es una eleccion");
}