//seleccion de los ids de los span
const height = document.querySelector("#height");
const width = document.querySelector("#width");
/**
 * nos estable en los span las medidas de la ventana
 */
function calcular() {
    // returns the interior height of the window in pixels
    height.textContent = window.innerHeight;
    // returns the interior width of the window in pixels
    width.textContent = window.innerWidth;
}
// llamamos al evento que tiene la funcion de calcular
window.onresize = calcular;
