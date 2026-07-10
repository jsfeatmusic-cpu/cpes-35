// Base de datos de materias con sus respectivos archivos por año
const baseMaterias = {
    "ingles": {
        nombre: "Inglés",
        descripcion: "Lengua extranjera.",
        anios: [
            { nombreAnio: "1° Año", archivo: "ingles1.html" },
            { nombreAnio: "2° Año", archivo: "ingles2.html" },
            { nombreAnio: "3° Año", archivo: "ingles3.html" },
            { nombreAnio: "4° Año", archivo: "ingles4.html" },
            { nombreAnio: "5° Año", archivo: "ingles5.html" }
        ]
    },
    "matematicas": {
        nombre: "Matemáticas",
        descripcion: "Álgebra, geometría y análisis.",
        anios: [
            { nombreAnio: "1° Año", archivo: "matematica1.html" },
            { nombreAnio: "2° Año", archivo: "matematica2.html" },
            { nombreAnio: "3° Año", archivo: "matematica3.html" },
            { nombreAnio: "4° Año", archivo: "matematica4.html" },
            { nombreAnio: "5° Año", archivo: "matematica5.html" }
        ]
    },
    "economia": {
        nombre: "Economía",
        descripcion: "Conceptos económicos y financieros.",
        anios: [
            { nombreAnio: "3° Año", archivo: "economia3.html" }
        ]
    },
    "tecnologia": {
        nombre: "Ed. Tecnológica",
        descripcion: "Herramientas y procesos tecnológicos.",
        anios: [
            { nombreAnio: "1° Año", archivo: "tecnologia1.html" },
            { nombreAnio: "2° Año", archivo: "tecnologia2.html" },
            { nombreAnio: "3° Año", archivo: "tecnologia3.html" }
        ]
    },
    "etica": {
        nombre: "Formación Ética y Ciudadana",
        descripcion: "Derechos, valores y sociedad.",
        anios: [
            { nombreAnio: "1° Año", archivo: "etica1.html" },
            { nombreAnio: "2° Año", archivo: "etica2.html" },
            { nombreAnio: "3° Año", archivo: "etica3.html" },
            { nombreAnio: "4° Año", archivo: "etica4.html" },
            { nombreAnio: "5° Año", archivo: "etica5.html" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderizarMaterias();
});

// Muestra la lista de materias en la pantalla principal
function renderizarMaterias() {
    const contenedor = document.getElementById('grid-materias');
    contenedor.innerHTML = ""; 

    for (const [clave, datos] of Object.entries(baseMaterias)) {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => mostrarAnios(clave);

        card.innerHTML = `
            <h3>${datos.nombre}</h3>
            <p>${datos.descripcion}</p>
        `;
        contenedor.appendChild(card);
    }
}

// Cambia la vista y genera los botones para los años que redirigen a su HTML particular
function mostrarAnios(claveMateria) {
    const materiaElegida = baseMaterias[claveMateria];
    
    document.getElementById('titulo-materia-seleccionada').innerText = materiaElegida.nombre;
    
    const contenedorAnios = document.getElementById('grid-anios');
    contenedorAnios.innerHTML = "";

    materiaElegida.anios.forEach(anio => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Redirección directa al archivo HTML configurado
        card.onclick = () => {
            window.location.href = anio.archivo;
        };
        
        card.innerHTML = `
            <h3>${anio.nombreAnio}</h3>
            <p>Ver contenidos de práctica</p>
        `;
        contenedorAnios.appendChild(card);
    });

    // Cambiar visualización de secciones
    document.getElementById('seccion-materias').classList.add('oculto');
    document.getElementById('seccion-anios').classList.remove('oculto');
}

function volverAMaterias() {
    document.getElementById('seccion-anios').classList.add('oculto');
    document.getElementById('seccion-materias').classList.remove('oculto');
}
