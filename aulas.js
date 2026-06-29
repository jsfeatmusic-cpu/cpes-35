// Base de datos local de materias y sus años correspondientes
const baseMaterias = {
    "economia": {
        nombre: "Economía",
        descripcion: "Conceptos económicos y financieros.",
        anios: ["3° Año"]
    },
    "matematicas": {
        nombre: "Matemáticas",
        descripcion: "Álgebra, geometría y análisis.",
        anios: ["1° Año", "2° Año", "3° Año", "4° Año", "5° Año"]
    },
    "tecnologia": {
        nombre: "Ed. Tecnológica",
        descripcion: "Herramientas y procesos tecnológicos.",
        anios: ["1° Año", "2° Año", "3° Año"]
    },
    "etica": {
        nombre: "Formación Ética y Ciudadana",
        descripcion: "Derechos, valores y sociedad.",
        anios: ["1° Año", "2° Año", "3° Año", "4° Año", "5° Año"]
    },
    "biologia": {
        nombre: "Biología / Agroturismo",
        descripcion: "Ciencias naturales y entorno.",
        anios: ["1° Año", "2° Año", "4° Año"]
    },
    "ingles": {
        nombre: "Inglés",
        descripcion: "Lengua extranjera.",
        anios: ["1° Año", "2° Año", "3° Año", "4° Año", "5° Año"]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderizarMaterias();
});

// Dibuja las tarjetas de todas las materias en la pantalla principal
function renderizarMaterias() {
    const contenedor = document.getElementById('grid-materias');
    contenedor.innerHTML = ""; // Limpiamos por las dudas

    // Recorremos nuestro diccionario de materias
    for (const [clave, datos] of Object.entries(baseMaterias)) {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => mostrarAnios(clave); // Al hacer clic, ejecuta la función

        card.innerHTML = `
            <h3>${datos.nombre}</h3>
            <p>${datos.descripcion}</p>
        `;
        
        contenedor.appendChild(card);
    }
}

// Oculta las materias y muestra los años de la materia elegida
function mostrarAnios(claveMateria) {
    const materiaElegida = baseMaterias[claveMateria];
    
    // Cambiamos los títulos
    document.getElementById('titulo-materia-seleccionada').innerText = materiaElegida.nombre;
    
    // Renderizamos los años
    const contenedorAnios = document.getElementById('grid-anios');
    contenedorAnios.innerHTML = "";

    materiaElegida.anios.forEach(anio => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Acá programaríamos a dónde lleva cada año en el futuro
        card.onclick = () => alert(`Próximamente: Contenido de ${materiaElegida.nombre} para ${anio}`);
        
        card.innerHTML = `
            <h3>${anio}</h3>
            <p>Acceder a los contenidos</p>
        `;
        contenedorAnios.appendChild(card);
    });

    // Alternamos las vistas
    document.getElementById('seccion-materias').classList.add('oculto');
    document.getElementById('seccion-anios').classList.remove('oculto');
}

// Vuelve a la lista principal de materias
function volverAMaterias() {
    document.getElementById('seccion-anios').classList.add('oculto');
    document.getElementById('seccion-materias').classList.remove('oculto');
}
