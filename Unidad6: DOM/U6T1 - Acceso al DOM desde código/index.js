// El número de párrafos de la página.

let numParrafo = document.getElementsByTagName("p").length;
document.getElementById("p1").innerHTML = `El numero total de etiquetas es ${numParrafo}`;

// El texto del segundo párrafo.

let textSecondsP = document.getElementsByTagName("p")[1].textContent;
document.getElementById("p2").innerHTML = `El texto del segundo parrafo es:\n ${textSecondsP}`;

// El número de enlaces de la página.

let numEnlaces = document.getElementsByTagName("a").length;
document.getElementById("p3").innerHTML = `El número de enlaces es: ${numEnlaces}`;

// La dirección del primer enlace.

let directionFirstLink = document.getElementsByTagName("a")[0].getAttribute('href');
document.getElementById("p4").innerHTML = `El contenido de hrf del primer link es: ${directionFirstLink}`

// La dirección del penúltimo enlace.

let penultimoLink = document.getElementsByTagName("a")[numEnlaces-2].getAttribute("href");
let penultimoLinkOption = document.getElementsByTagName("a")[numEnlaces-2].href; //otra version
document.getElementById("p5").innerHTML = `El contenido de hrf del penultimo link es: ${penultimoLink}`

// El número de enlaces del primer párrafo.

let firsPLink = document.getElementsByTagName("p")[0].getElementsByTagName('a').length;
document.getElementById("p7").innerHTML = `El numero de enlaces del primer parrafo es: ${firsPLink}`

// El número de enlaces que apuntan a /wiki/Municipio: No se puede usar un forEach dado que trabajo
// con una lista no con Arrays

let numLink=0;

let listLink = document.getElementsByTagName("a");

for (const i of listLink) {
    // podemos sustituir includes por match
    if (i.href.includes('/wiki/Municipio')){
        numLink++;
    }
}


document.getElementById("p6").innerHTML = `El numero de enlaces que apuntan a /wiki/Municipio es: ${numLink}`


//query da una lista no dinámica, miestras que getElement si es dinámica 


