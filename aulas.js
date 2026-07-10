// Capturamos los elementos (tarjetas) por su ID definido en el HTML
const btnPrimerAnio = document.getElementById('btn-1-anio');
const btnSegundoAnio = document.getElementById('btn-2-anio');
const btnTercerAnio = document.getElementById('btn-3-anio');
const btnCuartoAnio = document.getElementById('btn-4-anio');
const btnQuintoAnio = document.getElementById('btn-5-anio');

// CORRECCIÓN: Acción para 1° Año (Redirige a la página de temas)
if (btnPrimerAnio) {
    btnPrimerAnio.addEventListener('click', () => {
        window.location.href = 'temas_ingles1año.html';
    });
}

// Acciones provisionales para los demás años (Muestran la alerta)
if (btnSegundoAnio) {
    btnSegundoAnio.addEventListener('click', () => {
        alert('Próximamente: Contenido de Inglés para 2° Año');
    });
}

if (btnTercerAnio) {
    btnTercerAnio.addEventListener('click', () => {
        alert('Próximamente: Contenido de Inglés para 3° Año');
    });
}

if (btnCuartoAnio) {
    btnCuartoAnio.addEventListener('click', () => {
        alert('Próximamente: Contenido de Inglés para 4° Año');
    });
}

if (btnQuintoAnio) {
    btnQuintoAnio.addEventListener('click', () => {
        alert('Próximamente: Contenido de Inglés para 5° Año');
    });
}
