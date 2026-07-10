// Reemplazá esta función en tu aulas.js
function mostrarAnios(claveMateria) {
    const materiaElegida = baseMaterias[claveMateria];
    
    document.getElementById('titulo-materia-seleccionada').innerText = materiaElegida.nombre;
    
    const contenedorAnios = document.getElementById('grid-anios');
    contenedorAnios.innerHTML = "";

    materiaElegida.anios.forEach(anio => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.onclick = () => {
            // Verificamos si es Inglés de 1° Año para redirigir a temas.html
            if (claveMateria === "ingles" && anio === "1° Año") {
                window.location.href = 'temas.html';
            } else {
                alert(`Próximamente: Contenido de ${materiaElegida.nombre} para ${anio}`);
            }
        };
        
        card.innerHTML = `
            <h3>${anio}</h3>
            <p>Acceder a los contenidos</p>
        `;
        contenedorAnios.appendChild(card);
    });

    document.getElementById('seccion-materias').classList.add('oculto');
    document.getElementById('seccion-anios').classList.remove('oculto');
document.addEventListener('DOMContentLoaded', () => {
    const cardPrimerAnio = document.getElementById('card-primer-anio');
    const temasPrimerAnio = document.getElementById('temas-primer-anio');

    // Evento para computadoras (Mouse)
    cardPrimerAnio.addEventListener('dblclick', () => {
        temasPrimerAnio.classList.toggle('oculto');
    });

    // Evento adaptado para Celulares (Pantallas Táctiles)
    let ultimoToque = 0;
    cardPrimerAnio.addEventListener('touchstart', (e) => {
        const tiempoActual = new Date().getTime();
        const diferencia = tiempoActual - ultimoToque;
        
        // Si el usuario toca la pantalla dos veces en menos de 300ms, cuenta como doble clic
        if (diferencia < 300 && diferencia > 0) {
            temasPrimerAnio.classList.toggle('oculto');
            e.preventDefault(); // Previene el zoom automático del navegador en celulares
        }
        ultimoToque = tiempoActual;
    });
});}
