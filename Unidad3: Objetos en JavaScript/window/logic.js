/**
 * Ejercicio Objeto Window
 * 
 * @author Claudia Y Lopez Lafita
 * 
 * Crea un programa que tenga botones para permitir modificar las siguientes propiedades de una  ventana:

        Abrir una ventana nueva: Debes preguntar al usuario si está de acuerdo o no, 
            y solo si acepta se abrirá la nueva ventana. ----
        La nueva ventana tendrá las siguientes propiedades: no tendrá barra de herramientas, 
            ni location, ni barra de  menú, ni será redimensionable. Tendrá 200x80 píxeles y
            se posicionará en 500x500 píxeles. ---
        La nueva ventana incluirá un pequeño texto y un botón que al hacer clic cerrará la ventana. ---
        Cerrar la ventana creada: si la ventana está cerrada mostrará un mensaje de error. ---- 
        Mover la ventana 10 píxeles a la derecha y abajo. ---
        Mover la ventana a la posición 100,100. --
        Aumentar el tamaño de la ventana 10 píxeles de ancho y largo.
        Aumentar el tamaño de la ventana a 400x200.
        Colocar el scroll de la ventana arriba del todo.
        Colocar el scroll de la ventana a 10 píxeles de la parte superior.

Todos los botones, exceptoel primero y el segundo, los puedes programar diréctamente mediante la  propiedad onClick,
por ejemplo: <input type=“button” value=“Imprimir” onClick=“print()”/>

Recuerda que no es necesario utilizar “window” delante de la propiedad.
 */


// declaracion de variable
let myVentana;

/**
 * Funcion que abren una ventana con propiedades determinadas previa confirmacion
 */
function nuevaVentana(){

    let opcion = confirm("¿Quieres abrir una ventana nueva?");

     if (opcion) {
        
        let propiedades = "width=80,height=200,top=500,left=500,menubar=no,resizable=no,toolbar=no,location=no";
        myVentana = open("", "", propiedades);
    
        myVentana.document.write('<p>Ventana nueva con Objeto Window</p>'+
        '</br></br>'+
        '<button type="button" onclick="window.close()">Cerrar</button>');
    } else{
        alert('NO has permitido el acceso a la nueva ventana')
    }
}

/**
 * funcion que invoca a otra funcion e indicar el estado de nuesta ventana:
 *      - si nunca se ha abierta
 *      - si está cerrada
 *      - si está abierta
 */
function cerrarVentana(){

    let mensaje = "";
    
    if (!myVentana) {
        // en caso de que nunca se haya abierto la ventana 
        mensaje = "¡Nunca se ha abierto la ventana!";
    } else {

        myVentana.closed ? mensaje = "La ventana está cerrada." : mensaje = "La ventana está abierta.";

    }

    document.getElementById("resultados").innerHTML = mensaje;
}

/**
 * desplaza la ventana 10px a la derecha y abajo
 */
function moverVentana10px(){
    myVentana.moveBy(10, 10);
}

/**
 * mueve la ventana X px horixontal (x) y verticalmente (y)
 */
function moverVentana100x100(){
    myVentana.moveTo(100,100);
}

/**
 * aumenta la venta 10px
 */
function aumentar10px(){
    myVentana.resizeBy(10,10);
}

/**
 * las medidas de la ventana pasan a ser 400x200
 */
function aumentar400x200(){
    myVentana.resizeTo(400,200);
}

/**
 * coloca la barra de scroll arriba del todo
 */
function scrollTop(){
    myVentana.scrollTo(0, 0);
}

/**
 * coloca la barra de scroll 10px arriba
 */
function scrollTop10px(){
    myVentana.scrollTo(0,10)
}

