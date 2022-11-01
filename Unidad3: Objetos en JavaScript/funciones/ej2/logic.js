
/**
 * Ejercicio 2: Funciones
 * 
 * @author Claudia Y Lopez Lafita
 * 
 * Crea una función flecha que sirva para devolver verdadero si un número es par y falso si no lo es.
 * Asigna esa función a una variable y prueba la función para ver que responde correctamente.
 */


let esParFlecha = () => {
  var numero = document.getElementById("numero").value;
  numero%2==0 ? alert(`El numero ${numero} es PAR`) : alert(`El numero ${numero} es IMPAR`);
}

