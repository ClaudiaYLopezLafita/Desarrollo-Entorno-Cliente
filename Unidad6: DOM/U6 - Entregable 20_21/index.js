
document.getElementById("createTable").addEventListener("click", generateTable,true);

let checkbox = document.querySelector("input[type=checkbox]")
checkbox.addEventListener('change', function(){
    if(this.checked){
        let position = document.getElementById("check")
    
        let cols = parseInt(document.getElementById("numCol").value);

        for (let j = 0; j < cols; j++){
            let div = document.createElement("div");

            let label = document.createElement("label")
            let text = document.createTextNode(`Texto header col${j}`)
            label.appendChild(text)

            div.appendChild(label)

            let input = document.createElement("input")
            input.type="text"
            input.id = `header${j}`

            div.appendChild(input)

            position.appendChild(div);
        }
    }
})
// document.getElementById("header?").addEventListener("change", generateHeader,true);
// debugger
// function generateHeader(){
//     if(this.checked){
       
//     }
// }

function generateTable() {

    // obtenemos el elemento donde se pegará la tabla
    let body = document.getElementsByTagName("body")[0];
    
    // Crea un elemento <table> y un elemento <tbody> y añadimos 
    let tabla   = document.createElement("table");
    let tblBody = document.createElement("tbody");

    body.appendChild(tabla);
    tabla.appendChild(tblBody)

    // Capturamos el numero de filas, columnas Y texto por defecto y las añadimos

    let rows = parseInt(document.getElementById("numRow").value)
    let cols = parseInt(document.getElementById("numCol").value)
    let texto = document.getElementById("defaultext").value
    let grosor = document.getElementById("widthBorder").value
    let c = document.getElementById("borderColor")
    let color = c.options[c.selectedIndex].text

    // añadimos estilo a la tabla y tbody
    tabla.style.cssText += `border: solid ${grosor}px ${color}; border-collapse: collapse;`
    tblBody.style.cssText += `border: solid ${grosor}px ${color}; border-collapse: collapse;`

    // segun las n filas inidicadas vamos creados la tabla
    for (let i = 0; i < rows; i++) {
        // creamos las filas
        let fila =  document.createElement("tr");
        fila.style.cssText += `border: solid ${grosor}px ${color}; border-collapse: collapse;`
        // en cada fila en bucle
        for (let j = 0; j < cols; j++) {
            // creamos columa
            let columna = document.createElement("td")
            columna.style.cssText += `border: solid ${grosor}px ${color}; border-collapse: collapse;`
            // cremos un texto
            let textCelda = document.createTextNode(texto);
            // añadimos el texto a la celda
            columna.appendChild(textCelda)
            // añadimos la celda a la fila
            fila.appendChild(columna)
        }
        //añadimos la fila a tbody
        tblBody.appendChild(fila)
    }

}



