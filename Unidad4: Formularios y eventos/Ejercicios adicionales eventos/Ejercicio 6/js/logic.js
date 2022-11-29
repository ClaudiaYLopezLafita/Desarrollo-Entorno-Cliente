//Inicializamos los listeners al cargar la página
window.onload = initListeners;

/**
 * Inicializa el listener indicado
 */
function initListeners(){
    document.addEventListener('click', showMessage, true);
}

function showMessage() {
    let id = document.getElementById('primero');
    let id2 = document.getElementById('secundario');
    let id3 = document.getElementById('primero');
    
    let type = '';

    if(id==='d' || id2==='secundario' || id3==='terciario') {
        type = 'div';
    }else {
        type ='p';
    }
    
    alert(`Soy un nodo tipo ${type} y estoy burbujeando`);
}
