/** 
 * Ejercicio 1 string 
* @author Claudia Y. Lopez Lafita

Crea un programa que pida al usuario su nombre y apellidos y muestre:
El tamaño del nombre más los apellidos (sin contar espacios).
La cadena en minúsculas y en mayúsculas.
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2:
Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y 
    la inicial del segundo apellido: ej. Para José María García Durán sería jgarciad.
Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.
*/

let nombre = prompt('Indica tu nombre completo: ');

let nameSinSpace = nombre.replaceAll(' ','');

let fullName = nameSinSpace.length;

// cambio de mayuscular y minusculas
let upperName = nombre.toUpperCase();
let lowerName = nombre.toLowerCase();

// nombre propuesto 1
let arrayName = nombre.split(' ');
let propusesta1, iniNombre, iniApellido;

iniNombre = arrayName[0].charAt(0);
iniApellido = arrayName[2].charAt(2);

propusesta1 = iniNombre+arrayName[1]+iniApellido;

// nombre propuesto dos
let propusesta2, iniName, iniApellido1, iniApellido2;

iniName = arrayName[0].substring(0,3);
iniApellido1 = arrayName[1].substring(0,3);
iniApellido2 = arrayName[2].substring(0,3);

propusesta2 = iniName+iniApellido1+iniApellido2;

// salida de datos
alert(`${nombre}: \n`+
        `Longitud del nombre: ${fullName} \n`+
        `Nmbre en mayuscula: ${upperName} \n`+
        `Nombre en minuscula: ${lowerName} \n`+
        `Propuesta 1 de nombre: ${propusesta1} \n`+
        `Propuesta 2 de nombre: ${propusesta2} \n`)