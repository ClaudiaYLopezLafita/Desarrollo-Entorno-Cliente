/**
 * Ejercicio 3: Funciones
 * 
 * @author Claudia Y Lopez Lafita
 * 
 * Calcular cuál es tu signo Egipcio que corresponde la página Signo del horóscopo Egipcio:
    * Se deberá, así pues, preguntar por la fecha de nacimiento (año incluido).
    * Deberéis utilizar una página con la descripción del dios que corresponda a vuestro signo. 
    * Mostrar en iframe.
    * No se pueden utilizar arrays, debiendo encontrar otra solución que utilice switch
 */


/**
 * nos muestra por pantalla un texto indicando que dios es nuestro signo
 * y un iframe de wikipedia con dicha informacion. 
 */
 function diosEgipcio() {
   //obtencion de los datos de la fecha de nacimiento
   const birthday = (document.getElementById("fNacimiento").value);
   const day = parseInt(birthday.substring(birthday.length - 2, birthday.length));
   const month = parseInt(birthday.substring(birthday.length - 5, birthday.length - 3));

   //establecemos variables para la salida de datos
   const iframe = document.querySelector("iframe");
   let dios;

   //control de flujo para saber que dios nos representa
   switch (month) {
       case 1:
         dios = (day >= 1 && day <= 15) ? "Anubis" : "Bastet";
           break;
       case 2:
         dios = (day >= 1 && day <= 15) ? "Bastet" : "Serket";
           break;
       case 3:
         dios = (day >= 1 && day <= 15) ? "Serket" : "Apep";
           break;
       case 4:
         dios = (day >= 1 && day <= 15) ? "Apep" : "Ptah";
           break;
       case 5:
         dios = (day >= 1 && day <= 15) ? "Ptah" : "Atum";
           break;
       case 6:
         dios = (day >= 1 && day <= 15) ? "Atum" : "Isis";
           break;
       case 7:
         dios = (day >= 1 && day <= 15) ? "Isis" : "Ra";
           break;
       case 8:
         dios = (day >= 1 && day <= 15) ? "Ra" : "Horus";
           break;
       case 9:
         dios = (day >= 1 && day <= 15) ? "Horus" : "Maat";
           break;
       case 10:
         dios = (day >= 1 && day <= 15) ? "Maat" : "Osiris";
           break;
       case 11:
         dios = (day >= 1 && day <= 15) ? "Osiris" : "Hathor";
           break;
       case 12:
         dios = (day >= 1 && day <= 15) ? "Hathor" : "Anubis";
           break;
   }

   //control de flujo para establer el enlace en el atriburo src.  
   switch(dios){
       case "Anubis":
           iframe.setAttribute("src","https://es.wikipedia.org/wiki/Anubis")
           break;
       case "Bastet" :
           iframe.setAttribute("src","https://es.wikipedia.org/wiki/Bastet");
           break;
       case "Serket":
           iframe.setAttribute("src","https://es.wikipedia.org/wiki/Serket");
           break;
       case "Apep":
           iframe.setAttribute("src","https://es.wikipedia.org/wiki/Apofis_(mitolog%C3%ADa)");
           break;
       case "Ptah":
           iframe.setAttribute("src","https://es.wikipedia.org/wiki/Ptah");
           break;
       case "Atum":
           iframe.setAttribute("src","https://es.wikipedia.org/wiki/Atum");
           break;
       case "Isis":
           iframe.setAttribute("src","https://es.wikipedia.org/wiki/Isis");
           break;
       case "Ra":
           iframe.setAttribute("src","https://es.wikipedia.org/wiki/Ra_(mitolog%C3%ADa)");
           break;
       case "Horus":
           iframe.setAttribute("src","https://es.wikipedia.org/wiki/Horus");
           break;
       case "Maat":
           iframe.setAttribute("src","https://es.wikipedia.org/wiki/Maat");
           break;
       case "Osiris":
           iframe.setAttribute("src","https://es.wikipedia.org/wiki/Osiris");
           break;
       case "Hathor":
           iframe.setAttribute("src","https://es.wikipedia.org/wiki/Hathor");
           break;
   }

   // salida de datos en formato texto
   document.getElementById("resultado").innerHTML = "Tu signo es " + dios;
}