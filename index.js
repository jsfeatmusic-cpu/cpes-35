/**
 * Función para redirigir a las distintas páginas de los módulos.
 * @param {string} url - La ruta del archivo HTML de destino (ej. 'asistencia.html')
 */
function redirigir(url) {
    window.location.href = url;
}

// Inicialización de eventos al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portal CES 35 cargado correctamente.");
    
    // Aquí podés agregar futuras lógicas de inicialización, 
    // como verificar si el usuario tiene una sesión activa,
    // o cargar datos dinámicos desde una API o Google Sheets.
});
