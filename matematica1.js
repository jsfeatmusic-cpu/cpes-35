/**
 * Función para desplegar u ocultar los contenidos de un eje curricular.
 * @param {string} id - El ID del contenedor que se quiere mostrar/ocultar.
 */
function toggleSeccion(id) {
    const contenido = document.getElementById(id);
    const header = contenido.previousElementSibling;

    // Alternar la clase 'oculto' en el contenido
    contenido.classList.toggle('oculto');
    
    // Alternar la clase 'activo' en el encabezado para rotar la flecha
    header.classList.toggle('activo');
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    console.log("Módulo de Matemática 1° Año cargado exitosamente.");
});
