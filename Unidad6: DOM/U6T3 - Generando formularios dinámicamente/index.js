// Crea de manera dinámica (es decir, al cargarse la página) el formulario 
//que definimos en el tema anterior (tarea U4T1).
// Ten en cuenta que el formulario deberá tener los atributos necesarios para que, 
//al crearse, tenga la misma funcionalidad que el que creaste en html.
// No olvides añadir las etiquetas <label> a cada uno de los elementos.

window.addEventListener("load",createForm);

function createForm(){

// 1. creamos el contenedor 
    let container = document.createElement("div");
    let att = document.createAttribute("class");
    att.value = "container";
    container.setAttributeNode(att);

    // unimos el contenedor al body
    document.body.appendChild(container);

// 2. creamos el h1 para el titulo del formulario
    let h1 = document.createElement("h1");
    let t = document.createTextNode("Disco"); // Crea el nodo de texto
    h1.appendChild(t);

    // unimos el h1 al contenedor
    container.appendChild(h1);

//3. creamos la etiqueta formulario y sus atributos
    let form = document.createElement('form');

    form.setAttribute('action','#');
    form.setAttribute('method','post');
    form.setAttribute('id','formDisco');

    // unimos al form al container
    container.appendChild(form);

//4. creamos el div para NAME con sus hijos

    let divName = document.createElement('div');
    divName.className = 'name';

    form.appendChild(divName);

    // creamos los hijos del divNAME
    let labelName = document.createElement('label');
    labelName.setAttribute('for', 'name');
    let textLabelName = document.createTextNode('Nombre:');

    labelName.appendChild(textLabelName);
    divName.appendChild(labelName);

    let inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'nameDisc';

    divName.appendChild(inputName);

//5. creamos el div para Autor con sus hijos

    let divAuthor = document.createElement('div');
    divAuthor.className = 'autor';

    form.appendChild(divAuthor);

    // creamos los hijos del divNAME
    let labelAuthor = document.createElement('label');
    labelAuthor.setAttribute('for', 'autorDisc');
    let textLabelAuthor = document.createTextNode('Autor:');

    labelAuthor.appendChild(textLabelAuthor);
    divAuthor.appendChild(labelAuthor);

    let inputAuthot = document.createElement('input');
    inputAuthot.type = 'text';
    inputAuthot.id = 'autorDisc';

    divAuthor.appendChild(inputAuthot);

//6. Creamos el div para el anyo y sus hijos

    let divAnyo = document.createElement('div');
    divAnyo.className = 'anyo';

    form.appendChild(divAnyo);

    // creamos los hijos del divNAME
    let labelAnyo = document.createElement('label');
    labelAuthor.setAttribute('for', 'anyoPyblic');
    let textLabelAnyo = document.createTextNode('Año:');

    labelAnyo.appendChild(textLabelAnyo);
    divAnyo.appendChild(labelAnyo);

    let inputAnyo = document.createElement('input');
    inputAnyo.type = 'number';
    inputAnyo.id = 'anyoPublic';

    divAnyo.appendChild(inputAnyo);

//7. Creamo el dic de género y sus hijos

    let divGenero = document.createElement('div');
    divGenero.setAttribute('class', 'genero');

    form.appendChild(divGenero);

    let labelGenero = document.createElement('label');
    labelGenero.textContent = 'Genero:'
    labelGenero.setAttribute('for', 'generoDisc');

    divGenero.appendChild(labelGenero);

    let select = document.createElement('select')
    select.name = 'select';
    select.id='generoDisc';

    divGenero.appendChild(select);

    let option1 = document.createElement('option')
    option1.text = 'Rock';
    option1.value = 'RCK';
    let option2 = document.createElement('option')
    option2.text = 'Pop';
    option2.value = 'POP';
    let option3 = document.createElement('option')
    option3.text = 'Punk';
    option3.value = 'PUK';
    let option4 = document.createElement('option')
    option4.text = 'Indie';
    option4.value = 'IND';

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);

//8. Creamos el div de location

    let divLocation = document.createElement('div');
    divLocation.className = 'location';

    form.appendChild(divLocation);

    let labelLocation = document.createElement('label');
    labelLocation.for = 'locationDisc';
    labelLocation.textContent = 'Num estanteria:';

    divLocation.appendChild(labelLocation);

    let inputLocation = document.createElement('input');
    inputLocation.type = 'number';
    inputLocation.id = 'ocationDisc';

    divLocation.appendChild(inputLocation);

//9. Creamos un div para el estado de los prestamos

    let divEstado = document.createElement('div');
    divEstado.className = 'estado';

    form.appendChild(divEstado);

    let labelPrestado = document.createElement('label');
    labelPrestado.for = 'stateDisc'

    divEstado.appendChild(labelPrestado);

    let inputR1 = document.createElement('input');
    inputR1.type = 'radio';
    inputR1.name = 'state_Si_disc';
    inputR1.value = 'si';
    inputR1.id = 'si';

    divEstado.appendChild(inputR1);

    let labelSi = document.createElement('label');
    labelSi.for = 'si';
    labelSi.textContent= 'SI';

    divEstado.appendChild(labelSi);

    let inputR2 = document.createElement('input');
    inputR2.type = 'radio';
    inputR2.name = 'state_Si_disc';
    inputR2.value = 'no';
    inputR2.id = 'no';
    inputR2.checked = true;

    divEstado.appendChild(inputR2);

    let labelNo = document.createElement('label');
    labelNo.for = 'no';
    labelNo.textContent= 'NO';

    divEstado.appendChild(labelNo);

//10. Creamos le div para el boton

    let divBoton = document.createElement('div');
    divBoton.className = 'submit';

    form.appendChild(divBoton);

    let inputBoton = document.createElement('input');
    inputBoton.type = 'submit';
    inputBoton.value = 'Send Form';
    inputBoton.id = 'form_button';

    divBoton.appendChild(inputBoton);

}