// ============================================================================
// CONFIGURACIÓN DE LECCIONES - INGLÉS 1° AÑO
// Adaptado a los Núcleos de Aprendizajes Prioritarios del Diseño Curricular.
// ============================================================================

const lecciones = [
    {
        id: "tema1",
        eje: "Sección 1: Identidad e Información Personal",
        titulo: "Pronombres Personales y Verbo 'To Be'",
        presentacion: "En esta lección comenzaremos con la base de la comunicación en inglés. Aprenderemos a utilizar los pronombres personales (I, you, he, she...) y a conjugarlos con el verbo fundamental: el verbo 'To Be' (ser o estar). Veremos cómo armar oraciones afirmativas, negativas e interrogativas para presentarnos, dar nuestra edad y describir a las personas de nuestro entorno.",
        videoUrl: "https://www.youtube.com/embed/EjemploVideo1", 
        pdfUrl: "apuntes_tobe.pdf",
        activo: true
    },
    {
        id: "tema2",
        eje: "Sección 2: La Familia y Relaciones",
        titulo: "Expresando posesión: Verbo 'Have got'",
        presentacion: "Para poder hablar de nuestra familia, mascotas o las cosas que nos pertenecen, necesitamos aprender a expresar posesión. En esta clase abordaremos el verbo 'have got' (tener) en todas sus formas. Además, lo combinaremos con vocabulario sobre la familia (family members) y los adjetivos posesivos (my, your, his, her).",
        videoUrl: "https://www.youtube.com/embed/EjemploVideo2",
        pdfUrl: "apuntes_havegot.pdf",
        activo: true
    },
    {
        id: "tema3",
        eje: "Sección 3: El Hogar y la Comunidad",
        titulo: "Describiendo lugares: 'There is / There are' y Preposiciones",
        presentacion: "¿Cómo describimos nuestra casa, habitación o barrio? En esta clase aprenderemos a usar la estructura existencial 'There is' (hay singular) y 'There are' (hay plural). También trabajaremos las preposiciones de lugar (in, on, at, next to, under) y el uso correcto de los artículos determinados e indeterminados (a, an, the).",
        videoUrl: "https://www.youtube.com/embed/EjemploVideo3",
        pdfUrl: "apuntes_lugares.pdf",
        activo: true
    },
    {
        id: "tema4",
        eje: "Sección 4: Cultura y Preferencias",
        titulo: "Habilidades y Gustos (Modal 'Can' y verbos de emoción)",
        presentacion: "Es hora de hablar de lo que sabemos hacer y lo que nos gusta. Estudiaremos el auxiliar modal 'Can' para expresar habilidades y posibilidades. Luego, sumaremos vocabulario sobre deportes, colores y actividades de tiempo libre usando los verbos que expresan emociones: like, enjoy, hate y love.",
        videoUrl: "", // Dejalo vacío ("") si una lección aún no tiene video
        pdfUrl: "apuntes_habilidades.pdf",
        activo: true
    },
    {
        id: "tema5",
        eje: "Sección 5: Reglas y Plurales",
        titulo: "Sustantivos, Números y Conectores Básicos",
        presentacion: "En esta unidad cerraremos el ciclo aprendiendo a organizar nuestra escritura y habla. Estudiaremos las reglas de formación de plurales regulares e irregulares de los sustantivos, repasaremos los números cardinales y ordinales, y aprenderemos a usar los conectores básicos (and, or, but) para enlazar nuestras ideas.",
        videoUrl: "", 
        pdfUrl: "",
        activo: true
    }
];

// ============================================================================
// LÓGICA DEL REPRODUCTOR (No es necesario modificar el código debajo de esta línea)
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    renderizarListaLecciones();
});

function renderizarListaLecciones() {
    const contenedor = document.getElementById('grid-temas');
    contenedor.innerHTML = ""; 

    lecciones.forEach(leccion => {
        if (!leccion.activo) return; 

        const card = document.createElement('article');
        card.className = 'card-tema';
        card.onclick = () => abrirLeccion(leccion.id);

        card.innerHTML = `
            <span class="eje-tag">${leccion.eje}</span>
            <h3>${leccion.titulo}</h3>
            <p>Acceder a la clase audiovisual, teoría y práctica.</p>
        `;
        contenedor.appendChild(card);
    });
}

function abrirLeccion(idLeccion) {
    const leccion = lecciones.find(l => l.id === idLeccion);
    if (!leccion) return;

    document.getElementById('lec-eje').innerText = leccion.eje;
    document.getElementById('lec-titulo').innerText = leccion.titulo;
    document.getElementById('lec-presentacion').innerText = leccion.presentacion;

    const contenedorVideo = document.getElementById('contenedor-video');
    const iframeVideo = document.getElementById('lec-video');
    if (leccion.videoUrl && leccion.videoUrl.trim() !== "") {
        iframeVideo.src = leccion.videoUrl;
        contenedorVideo.style.display = "block";
    } else {
        iframeVideo.src = "";
        contenedorVideo.style.display = "none";
    }

    const contenedorPdf = document.getElementById('contenedor-pdf');
    const botonPdf = document.getElementById('lec-pdf');
    if (leccion.pdfUrl && leccion.pdfUrl.trim() !== "") {
        botonPdf.href = leccion.pdfUrl;
        contenedorPdf.style.display = "block";
    } else {
        botonPdf.href = "#";
        contenedorPdf.style.display = "none"; 
    }

    document.getElementById('lista-lecciones').classList.add('oculto');
    document.getElementById('vista-leccion').classList.remove('oculto');
    window.scrollTo(0, 0); 
}

function cerrarLeccion() {
    document.getElementById('lec-video').src = ""; 
    document.getElementById('vista-leccion').classList.add('oculto');
    document.getElementById('lista-lecciones').classList.remove('oculto');
}
