/**
 * Ejercicio 1 Number
 * 
 * @author Claudia Y Lopez Lafita
 * 
 * Crea un programa que pida al usuario un número entero por pantalla y muestre:

    Su valor exponencial.
    El número con 4 decimales.
    El número en binario.
    El número en octal.
    El número en hexadecimal.

Utiliza para ello los métodos del objeto Number.
Como datos de muestra, si metes 50, deberías obtener:

5e1 / 50.0000 / 00110010 / 62 / 0x32
 */

// interaccion con usuria
let numero = new Number(parseInt(prompt('Introduce un numero: ')));

// declaracion y asignacion de variables
let exponencial = numero.toExponential(2);
let decimales = numero.toFixed(4);
let binario = numero.toString(2);
let octal = numero.toString(8);
let hexadecimal = numero.toString(16);

//salida de resultados
alert(`RESULTADOS: \n`+
    `El numero ${numero} \n`+
    `Su valor exponencial: ${exponencial} \n`+
    `Su valor con 4 decumales: ${decimales} \n`+
    `Su valor en binario: ${binario} \n`+
    `Su valor en octal: ${octal} \n`+
    `Su valor en hexadecimal: ${hexadecimal} \n`
)
