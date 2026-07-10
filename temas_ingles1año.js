document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos la tarjeta de 1° Año y el contenedor de sus temas
    const cardPrimerAnio = document.getElementById('card-primer-anio');
    const temasPrimerAnio = document.getElementById('temas-primer-anio');

    // Agregamos el evento de DOBLE CLIC
    cardPrimerAnio.addEventListener('dblclick', () => {
        // La clase 'oculto' tiene 'display: none'. 
        // toggle() la quita si la tiene, o la agrega si no la tiene.
        temasPrimerAnio.classList.toggle('oculto');
    });

    // Opcional: Como en algunos celulares el "doble toque" puede hacer zoom en lugar
    // de disparar el dblclick, agregamos una lógica manual para pantallas táctiles.
    let ultimoToque = 0;
    cardPrimerAnio.addEventListener('touchstart', (e) => {
        const tiempoActual = new Date().getTime();
        const diferencia = tiempoActual - ultimoToque;
        
        // Si hay menos de 300 milisegundos entre toques, lo consideramos doble toque
        if (diferencia < 300 && diferencia > 0) {
            temasPrimerAnio.classList.toggle('oculto');
            e.preventDefault(); // Evita el zoom accidental del navegador
        }
        ultimoToque = tiempoActual;
    });
});
