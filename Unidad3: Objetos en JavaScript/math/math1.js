/**
 * Ejercicio 1  Math
 * 
 * @author Claudia Y Lopez Lafita
 * 
 * Crea un programa que pida al usuario que elija una opción del siguiente menú:

    Potencia.
    Raíz.
    Redondeo.
    Trigonometría.

Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará 
    el resultado en pantalla (La potencia de X elevado a Y es: )
Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el 
    resultado en pantalla (La raíz de X es: )
Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el 
    redondeo al entero más próximo, al alta y a la baja.
Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán 
    por pantalla los valores trigonométricos del seno, coseno y tangente.
 */


// solicitur de la eleccion
let eleccion = parseInt(prompt('Elige un opción: \n - 1. Potencia '+
                                                '\n - 2. Raiz'+
                                                '\n - 3. Redondeo'+
                                                '\n - 4. Trigonometría'));

// inicio control de flujo para determinar que accion realizar                                               
switch(eleccion){
    //calculo de potencia
    case 1: 
        
        var exponente = parseInt(prompt('Introduce un exponente: '));
        var base = parseInt(prompt('Introduce una base: '));

        var potencia = Math.pow(base,exponente);
        
        alert(`La potencia de ${base} elevado a ${exponente}es: ${potencia}`);
        break;

    //calculo de raiz
    case 2: 

        var numero = parseInt(prompt('Introduce un numero positivo: '));
        var raiz = Math.sqrt(numero);

        // validacion de numero positivo
        numero > 0 ? alert(`La raíz de ${numero} es: ${raiz}.`) : alert('El numero tiene que ser mayor a 0');
       
        break;

    //calculo de redondeo
    case 3:

        var decimal = parseFloat(prompt('Introduce un numero decimal: '));

        var enteroAlto = Math.ceil(decimal);
        var enteroBajo = Math.trunc(decimal);

        alert(`El numero ${decimal} redondeado a la alta es: ${enteroAlto} \n`+
            `El numero ${decimal} redondeado a la baja es: ${enteroBajo}`)
        break;

    // calculo de seno, coseno, tangente
    case 4:

        var angulo = parseFloat(prompt('Introduce un ángulo entre 0 y 360'));

        var seno = Math.sin(angulo);
        var coseno = Math.cos(angulo);
        var tangente = Math.tan(angulo);

        // validacion de angulo dentro del rango [0-360]
        (angulo>=0 && angulo<=360) ? alert(`El seno de ${angulo} es : ${seno} \n`+
                                            `El conseno de ${angulo} es : ${coseno}  \n`+
                                            `La tangente de ${angulo} es : ${tangente}`) 
                                            : alert('Este ángulo no es válido.')

        break;

    default: 
        alert('Esta no es un opción compatible');
}
// fin de control de flujo
