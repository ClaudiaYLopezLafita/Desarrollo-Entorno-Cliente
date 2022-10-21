/**
 * Ejercicio 2 Date
 * @author Claudia Y. Lopez Lafita
 * 
Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y 
saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100.

*/

// Permite capturar un parámetro introducido de un array de elementos
const arguments = process.argv.slice(2);

// De la currentDate (que es el primer elemento del array anterior) que se pasa con este formato: dd/mm/aaaa, se transforma en un array de 3 elementos
let separatedDate = arguments[0].split("/");

// Instancia de un objeto Date
let birthday = new Date();

// Se cambia el día y el mes del array anterior en la primera y segunda posicion (incremento)
birthday.setDate(separatedDate[0]+1);
birthday.setMonth(separatedDate[1]-1);

// Se captura el día y mes. El año lo ponemos por defecto
const day = birthday.getDate();
const month = birthday.getMonth();
let year = 2022;

let counter = 0;

// se ejecutrá hasta que llegue a la fecha límite (2100)
while (birthday.getFullYear() != 2100) { 
  // cuando coincida que el día sea 0 = domingo, el primer día de la semana y se incrementa contador
  if (birthday.getDay() === 0) {
    counter++;
  }
  year++;
  // se actualiza el valor del año en la fecha del cumpleaños
  birthday.setFullYear(year);
}

// Impresión por consola del valor
console.log(`Desde ahora, su cumpleaños caerá en domingo ${counter} veces`);



