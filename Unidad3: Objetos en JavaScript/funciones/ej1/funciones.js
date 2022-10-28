/**
 * Ejercicio 1: Funciones
 * 
 * @author Claudia Y Lopez Lafita
 * 
 * Crea un archivo funciones.js en el que implementes las funciones  
 * siguientes (busca la fórmula en Internet):
 * 
 *      IMC (Índice de masa corporal) -- (IMC = peso (kg)/ [estatura (m)]2
 *      FCM (Frecuencia cardíaca máxima) -- (FCM = 220 – (tu edad))
 * 
 * Crea un html donde incluyas el archivo anterior y dos enlaces. 
 * Cada uno  (mediante el método onClick) ejecutará una función.
 * Deberás tener 3 inputs donde introducir los datos necesarios para las funciones.
 *
 */

function calculoImc(){
    let imc,peso,altura,resultado;
    
    altura = parseFloat(document.getElementById("altura").value);
    peso = parseFloat(document.getElementById("peso").value);

    imc = peso/(Math.pow(altura, 2));
    resultado = imc.toFixed(2);

    document.getElementById('resultado').innerHTML=`Con una altura de ${altura}m`+
                                                    ` y un peso de ${peso}kg.`+
                                                     `\n Tiene un IMC de ${resultado}`
}

function calculoFmc(){
    let fmc, edad;

    edad = parseInt(document.getElementById('edad').value);

    fmc =  220 - edad;
    
    document.getElementById('resultado').innerHTML=`Con una edad de ${edad}`+
                                                     `\n Tiene un FMC de ${fmc}.`
}