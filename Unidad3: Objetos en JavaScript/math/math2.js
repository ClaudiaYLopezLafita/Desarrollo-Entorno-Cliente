/**
 * Ejercicio 2 Math
 * 
 * @author Claudia Y Lopez Lafita
 * 
 * Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

    El valor del radio.
    El valor del diámetro.
    El valor del perímetro de la circunferencia.
    El valor del área del círculo.
    El valor del área de la esfera.
    El valor del volumen de la esfera.
    El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente. 

Debes escribir al lado si son cm, o cm2, o cm3. 

Como datos de muestra, si metes 5, deberías obtener aproximadamente:
5 / 10 / 31,41 /78,54 / 314,15 / 523,59.
 */

// solicitud de rario
let radio = parseFloat(prompt('Introduce un valor para el radio: '));

// declaracion de variables a calcular
let pi = Math.PI;
let diametro = 2*radio;
let perimetro = 2*pi*radio;
let areaCirculo = pi* Math.pow(radio,2);
let areaEsfera = 4*pi*Math.pow(radio,2);
let volumen = 3/4*pi*Math.pow(radio,3);

alert('RESULTADOS: \n'+
    `El valor del radio: ${radio}cm. \n`+
    `El valor del diámetro: ${diametro}cm. \n`+
    `El valor del perímetro: ${perimetro}cm. \n`+
    `El valor del area del circulo: ${areaCirculo}cm2. \n`+
    `El valor del area de la esfera: ${areaEsfera}cm2. \n`+
    `El valor del volumen de una esfera: ${volumen}cm3. \n`+
    `El valor del numerp Pi: ${pi}cm.`
)
