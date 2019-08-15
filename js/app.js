//VARIABLES
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//FUNCIONES

//Función que añade el curso al carrito
function comprarCurso(e){
    e.preventDefault();
    //console.log(e.target.classList);

    //Delegation para detectar que curso se pulso y poder agregarlo al carrito
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        // Enviamos curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }
}

// Lee los datos del curso
function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    console.log(curso);
    console.log(infoCurso);

    insertarCarrito(infoCurso);
}

//Muestra el curso seleccionado en el Carrito
function insertarCarrito(curso){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100 >
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
}

//Elimina el curso del carrito
function eliminarCurso(e){
    e.preventDefault();
    
    let curso;
    if (e.target.classList.contains('borrar-curso')){
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
    }
}

//Vaciar todo el Carrito de Compra
function vaciarCarrito(){
    //Forma lenta
    //listaCursos.innerHTML = '';

    //Forma rápida (recomendada)
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
    return false;
}

// Detecta todos los lisners
function cargarEventsListers(){
    //Se dispara cuando se presiona "Agregar Curso"
    cursos.addEventListener('click', comprarCurso);

    //Eliminar un curso del Carrito de Compra
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar Carrito de Compra
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

//LISTENERS
cargarEventsListers();
