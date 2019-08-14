//VARIABLES
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');

//FUNCIONES

// Lee los datos del curso
function leerDatosCurso(curso){
    console.log(curso);
}

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

// Detecta todos los lisners
function cargarEventsListers(){
    //Se dispara cuando se presiona "Agregar Curso"
    cursos.addEventListener('click', comprarCurso);
}

//LISTENERS
cargarEventsListers();
