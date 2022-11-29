document.addEventListener('mousedown', showOptions, false);

function showOptions(e) {
    let message = '';

    if (e.button==2){
		message = "El botón del ratón pulsado fue el derecho";
	}else{
		message = "El botón del ratón pulsado fue el izquierdo";
    }
    
    document.getElementById('result').innerHTML = message;
}