// ============================================================================
// CONFIGURACIÓN DE LECCIONES
// Como desarrollador, solo tenés que agregar nuevos objetos a este Array.
// ============================================================================

const lecciones = [
    {
        id: "tema1",
        eje: "Números y Operaciones",
        titulo: "El surgimiento de los Números Enteros",
        presentacion: "En esta primera lección vamos a repasar el conjunto de los números Naturales que viste en la primaria. Veremos que la resta no siempre es posible en los Naturales, lo que nos obliga a introducir un nuevo campo numérico: Los Números Enteros (Z). Prestá atención a cómo usamos el signo negativo (-) en situaciones de la vida real (temperaturas, deudas, ascensores).",
        // Enlace de YouTube (Debe ser el enlace 'embed', no el link común del navegador)
        videoUrl: "<iframe width="560" height="315" src="https://www.youtube.com/embed/xOMxUAMeKtk?si=84T4tXwiCOBJCaBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>", 
        // Enlace directo al archivo PDF (Puede ser de Google Drive, o un archivo local ej: 'apuntes/enteros.pdf')
        pdfUrl: "apuntes_enteros.pdf",
        activo: true // Te permite "apagar" una lección si aún la estás preparando
    },
    {
        id: "tema2",
        eje: "Números y Operaciones",
        titulo: "Operaciones Básicas y Regla de los Signos",
        presentacion: "Ahora que conocemos los números enteros, vamos a aprender a sumarlos, restarlos, multiplicarlos y dividirlos. El secreto está en dominar la famosa 'Regla de los Signos'. En el video te explico la estrategia para no confundirte al operar.",
        videoUrl: "https://www.youtube.com/embed/EjX76P2MxyQ",
        pdfUrl: "https://ejemplo.com/guia_signos.pdf",
        activo: true
    },
    {
        id: "tema3",
        eje: "Álgebra y Funciones",
        titulo: "Introducción a las Ecuaciones",
        presentacion: "Pasamos del mundo aritmético al algebraico. Una ecuación es como una balanza en equilibrio donde tenemos que descubrir el valor de una incógnita (generalmente llamada X). Mirá la clase audiovisual y luego practicá con la guía.",
        videoUrl: "", // Si dejás esto vacío, el reproductor de video se ocultará automáticamente
        pdfUrl: "archivos/ecuaciones_1.pdf",
        activo: true
    }
];

// ============================================================================
// LÓGICA DE LA APLICACIÓN (No hace falta tocar esto)
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    renderizarListaLecciones();
});

// Genera el menú principal de temas basado en el array de arriba
function renderizarListaLecciones() {
    const contenedor = document.getElementById('grid-temas');
    contenedor.innerHTML = ""; 

    lecciones.forEach(leccion => {
        if (!leccion.activo) return; // Salta las lecciones marcadas como inhabilitadas

        const card = document.createElement('article');
        card.className = 'card-tema';
        card.onclick = () => abrirLeccion(leccion.id);

        card.innerHTML = `
            <span class="eje-tag">${leccion.eje}</span>
            <h3>${leccion.titulo}</h3>
            <p>Acceder a la clase, teoría y práctica.</p>
        `;
        contenedor.appendChild(card);
    });
}

// Carga los datos de la lección seleccionada y muestra el reproductor
function abrirLeccion(idLeccion) {
    // Buscar la lección en la "base de datos"
    const leccion = lecciones.find(l => l.id === idLeccion);
    if (!leccion) return;

    // Inyectar textos
    document.getElementById('lec-eje').innerText = leccion.eje;
    document.getElementById('lec-titulo').innerText = leccion.titulo;
    document.getElementById('lec-presentacion').innerText = leccion.presentacion;

    // Gestionar el Video
    const contenedorVideo = document.getElementById('contenedor-video');
    const iframeVideo = document.getElementById('lec-video');
    if (leccion.videoUrl && leccion.videoUrl.trim() !== "") {
        iframeVideo.src = leccion.videoUrl;
        contenedorVideo.style.display = "block";
    } else {
        iframeVideo.src = "";
        contenedorVideo.style.display = "none"; // Oculta la sección si no configuraste video
    }

    // Gestionar el PDF
    const contenedorPdf = document.getElementById('contenedor-pdf');
    const botonPdf = document.getElementById('lec-pdf');
    if (leccion.pdfUrl && leccion.pdfUrl.trim() !== "") {
        botonPdf.href = leccion.pdfUrl;
        contenedorPdf.style.display = "block";
    } else {
        botonPdf.href = "#";
        contenedorPdf.style.display = "none"; // Oculta la sección si no hay PDF
    }

    // Cambiar las vistas
    document.getElementById('lista-lecciones').classList.add('oculto');
    document.getElementById('vista-leccion').classList.remove('oculto');
    window.scrollTo(0, 0); // Sube al tope de la página
}

// Vuelve al listado de temas
function cerrarLeccion() {
    // Cortar el video al salir para que no siga sonando de fondo
    document.getElementById('lec-video').src = ""; 

    document.getElementById('vista-leccion').classList.add('oculto');
    document.getElementById('lista-lecciones').classList.remove('oculto');
}
