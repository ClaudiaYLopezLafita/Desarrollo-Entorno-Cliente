//EJ1
/**
 * funcion contructor que realiza una operación patemarica
 */
function formulas() {
    console.log(('Entrando en al funcion formulas() sin parametros'))
    // metodo que calcula el radio
    this.areaCirculo = function (radio) {
       return Math.PI * Math.pow(radio,2);
    }
    console.log('Saliendo de la funcion formulas() devolviendo el radio calculaod')
 }
 //definicion de variable con valor de un objeto fomulas.
 var f = new formulas();
 //salida por consola del resulrado
 console.log ("El área de un círculo de radio 2 es " + f.areaCirculo(2));

 //EJ2
 let saludo = "hola mundo";
 let tiempos = 4;

 if(tiempos > 3){
    let saludo = "hola mundo";
    console.log(saludo);
 }

 let saludo = "hola mundo";
 console.log(saludo);

 //EJ3
let str = "3";
console.log(typeof str);
let num = Number(str);
console.log(typeof num);
let edad = Number('3 años');
console.log(edad);

//EJ4
const x =5;
let y = 6;
let z=10;
let logueado=true;
const nombreUsuario = "admin";
if((x===5 || y>3 || z<=10) && (logueado || nombreUsuario==='Steve')){
    console.log("Soy usuario logeado");
}else if(nombreUsuario==='admin'){
    console.log('Soy  usuario admin')
}else{
    console.log('NO se cumple con las condiciones');
}

//EJ5
let i = 0;

do{ i +=1;
console.log(i);
}while(i<5);

//EJ6
let numero = 0;
const constante1=34;
const constante2=43;
for (let i = 0; i < 5; i++) {
    debugger
    numero += Math.PI-i*constante1/constante2;    
}
console.log(numero);