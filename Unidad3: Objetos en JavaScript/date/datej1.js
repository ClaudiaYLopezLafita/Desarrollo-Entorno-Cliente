/**
 *  Ejercicio 2 Date
 * @author Claudia Y. Lopez Lafita
Crea un programa que muestre el número de días que quedan desde hoy 
hasta el fin de curso (por ejemplo, el 24 de junio).
*/

//definicion de variables
let fechaActual = new Date();
let fechaFin = new Date("2023-06-24");


// calculo diferencia entre fechas
let diferencia = fechaFin-fechaActual;
// calulo de obtencion de dias totales.
let totalDias = Math.floor(diferencia/(1000 * 60 * 60 * 24));

//salida de datos
console.log(`Para fin de curso quedan ${totalDias} días.`);