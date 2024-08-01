const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    // Verificar si 'elementos1' y 'carrito' existen antes de añadir los event listeners
    if (elementos1) {
        elementos1.addEventListener('click', comprarElemento);
    }
    if (carrito) {
        carrito.addEventListener('click', eliminarElemento);
    }
    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    }
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.closest('.item'); // Usa closest para obtener el elemento más cercano que coincida con el selector
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id') // Usa el selector adecuado
    }

    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width="100">
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X </a>
        </td>
    `;

    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        const elementoId = e.target.getAttribute('data-id');
        // Puedes usar elementoId si necesitas realizar alguna acción adicional
    }
}

function vaciarCarrito(){
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}
