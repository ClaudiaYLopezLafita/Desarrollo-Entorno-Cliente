
/* 1. CLICK CAMBIA EL BACKGROUD-COLOR */

document.addEventListener("click", clickChangeDiv,false);
/**
 * le damos estilo a un elemento cuando se clickea
 */
function clickChangeDiv(){
    console.log('Entrando en la funcion myFunction sin parámetro');
    //al elemento con id container le damos unos atributos determinados
    document.getElementById('container').style.cssText = 'padding:20px;' +
                                                        'background-color:#FFFF00;'+ 
                                                        'color:#0c0800;'+ 
                                                        'border:1px solid #0c0800;'+ 
                                                        'font-size:22px;';
    console.log('Saliendo de la funcion myFunction sin parámetro');
}

/* 2. CUANDO PULSAMOS UNA TECLA */

document.addEventListener('keydown', keydownChangeBody,false);

function keydownChangeBody(){
    console.log('Entrando en la funcion keydownChangeBody')
    document.getElementById("body").style.backgroundColor = "#CCE6FF";
}

/** 3. MOVER EL RATON */

document.addEventListener('mousemove', mouseMoveChageBody,false);

function mouseMoveChageBody(){
    document.getElementById("body").style.backgroundColor = "#FDFEFE"
}

/** 4. CLICK EL RATON */

document.addEventListener('mousedown',clickMouseCoordenadas,false);

function clickMouseCoordenadas(e){
    var x = e.clientX;
	var y = e.clientY;
    document.getElementById('result').innerHTML = `Las coordenadas del raton [${x} - ${y}]`;
    // document.getElementById('result2').innerHTML =`\nLas coordenadas del ratón respento al navegador: ${coordX} - ${coordY}`;
}

/** 5. CUANDO PULSAMOS UNA TECLA MOSTRAR INFORMACION */

document.addEventListener('keydown', keyDonwMostrarInfo, false);

function keyDonwMostrarInfo(e){

    var mensaje = "Propiedad keyCode: " + e.keyCode + "<br>" +
    "Propiedad charCode: " + e.charCode + "<br>" +
    "Valor ascii: " + String.fromCharCode(e.charCode);

    document.getElementById('result3').innerHTML = mensaje
}