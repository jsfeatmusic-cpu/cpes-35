// Simulamos una base de datos de profesores.
// La clave (ej: "11111111") simula el DNI del docente.
// Cuando el profe ingresa ese DNI como usuario y contraseña, el sistema detecta quién es.
const baseDocentes = {
    "11111111": { nombre: "Micaela Disaro", id_celda: "Disaro" },
    "22222222": { nombre: "Myria Camacho", id_celda: "Camacho" },
    "33333333": { nombre: "Valeria Urquia", id_celda: "Urquia" },
    "44444444": { nombre: "Nicolasa Leiva", id_celda: "Leiva" },
    "55555555": { nombre: "Gabriela Perea", id_celda: "Perea" },
    "66666666": { nombre: "Héctor González", id_celda: "González" },
    "77777777": { nombre: "Edgar Chaile", id_celda: "Chaile" },
    "88888888": { nombre: "Prof. Almada", id_celda: "Almada" },
    "99999999": { nombre: "Prof. Decima", id_celda: "Decima" },
    "10101010": { nombre: "Prof. Olas", id_celda: "Olas" },
    "12121212": { nombre: "Prof. Castañeda", id_celda: "Castañeda" },
    "13131313": { nombre: "Prof. Anadon", id_celda: "Anadon" },
    "14141414": { nombre: "Prof. Argañaraz", id_celda: "Argañaraz" },
    "15151515": { nombre: "Prof. Gerónimo", id_celda: "Geronimo" }
};

let docenteActual = null;

function iniciarSesion() {
    const dni = document.getElementById('dni-input').value.trim();
    const pass = document.getElementById('pass-input').value.trim();
    const errorMsg = document.getElementById('login-error');

    // Validación solicitada: Usuario == Contraseña (DNI)
    if (dni === pass && baseDocentes[dni]) {
        docenteActual = baseDocentes[dni];
        
        // Ocultar login y mostrar panel de control
        document.getElementById('login-section').classList.add('oculto');
        document.getElementById('control-section').classList.remove('oculto');
        document.getElementById('nombre-docente').innerText = docenteActual.nombre;
        errorMsg.innerText = "";
    } else {
        errorMsg.innerText = "DNI o contraseña incorrectos. Recuerde que la contraseña es su mismo DNI.";
    }
}

function cerrarSesion() {
    docenteActual = null;
    document.getElementById('dni-input').value = "";
    document.getElementById('pass-input').value = "";
    document.getElementById('login-section').classList.remove('oculto');
    document.getElementById('control-section').classList.add('oculto');
}

function cambiarEstado(estado) {
    if (!docenteActual) return;

    // Buscar todas las celdas de la tabla
    const celdas = document.querySelectorAll('td[data-docente]');
    
    celdas.forEach(celda => {
        // Obtenemos los apellidos asignados a esa celda (puede haber más de uno separados por coma)
        const profesoresCelda = celda.getAttribute('data-docente').split(',');
        
        // Si el profesor actual da clases en ese horario
        if (profesoresCelda.includes(docenteActual.id_celda)) {
            // Limpiamos los colores anteriores
            celda.classList.remove('estado-gris', 'estado-verde', 'estado-rojo');
            
            // Aplicamos el nuevo color
            if (estado === 'confirmado') {
                celda.classList.add('estado-verde');
            } else if (estado === 'ausente') {
                celda.classList.add('estado-rojo');
            }
        }
    });

    alert("¡Estado actualizado! Los alumnos ahora pueden ver tu asistencia.");
}
