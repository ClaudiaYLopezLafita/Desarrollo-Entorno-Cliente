/**
 * Ejercicio 4: Funciones
 * 
 * @author Claudia Y Lopez Lafita
 * 
 * Cambiar de mayúscula y minúscula cada X caracteres.
 * 
 * Vuestro programa debe leer una cadena de teclado (puede contener número y otros caracteres).
 * Además debe leer por teclado la posición donde debe cambiarse el estado de mayúscula 
 *      a minúscula y viceversa. Si el valor es 3, significa que en la posición 2, 5, 8 
 *      se cambiarán los caracteres. Recordar que se empieza en la posición 0.
 * No se puede utilizar arrays.
 */


function transformarMayuscula() {
    let cadena = document.getElementById('texto').value;
    let pos = parseInt(document.getElementById('posicion').value);
    debugger
    for (let i=pos-1; i<cadena.length;i=i+pos) {
        if (cadena.charAt(i)==cadena.charAt(i).toUpperCase()) {
            cadena=cadena.substr(0,i)+cadena.charAt(i).toLowerCase()+cadena.substr(i+1);
        } else {
            cadena=cadena.substr(0,i)+cadena.charAt(i).toUpperCase()+cadena.substr(i+1);
        }
    }
    document.getElementById('resultado').innerHTML=cadena;
}