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
}
