document.addEventListeners('load',showMessage,false);

function showMessage() {
    var message = 'La página se ha cargado completamente BIENVENIDO!!!';

    document.getElementById('message').innerHTML = message;
}