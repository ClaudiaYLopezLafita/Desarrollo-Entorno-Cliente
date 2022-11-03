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
    // obtenemos el valor de nuestra cadena
    let cadena = document.getElementById('texto').value;
    //obtenemos el valor de cada cuantas posiciones queremos modificar
    let pos = parseInt(document.getElementById('posicion').value);

    //  vamos recoriendo la cadaneca cada x posiciones 
    for (let i=pos-1; i<cadena.length;i=i+pos) {
        // comprobamos si el caracter de la posicion es MAY o no 
        if (cadena.charAt(i)==cadena.charAt(i).toUpperCase()) {
            //si es mayuscula la cambiamos a MIN y concatendolo a las subcadenas anteriors y posteriores
            cadena=cadena.substr(0,i)+cadena.charAt(i).toLowerCase()+cadena.substr(i+1);
        } else {
            //si es mayuscula la cambiamos a MAY y concatendolo a las subcadenas anteriors y posteriores
            cadena=cadena.substr(0,i)+cadena.charAt(i).toUpperCase()+cadena.substr(i+1);
        }
    }
    document.getElementById('resultado').innerHTML=cadena;
}