:root {
    --primary-color: #2c3e50;
    --secondary-color: #34495e;
    --accent-color: #3498db;
    --background-color: #f4f7f6;
    --text-color: #333333;
    --card-bg: #ffffff;
    --danger-color: #e74c3c;
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }

body { background-color: var(--background-color); color: var(--text-color); min-height: 100vh; }

/* Cabecera */
.header {
    background-color: var(--primary-color);
    color: white;
    padding: 1.5rem;
    text-align: center;
    position: relative;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.btn-volver, .btn-volver-leccion {
    background-color: rgba(255,255,255,0.2);
    border: none;
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s;
}

.btn-volver { position: absolute; top: 1.5rem; left: 1.5rem; }
.btn-volver-leccion { background-color: var(--secondary-color); color: white; margin-bottom: 1.5rem; display: inline-block; }
.btn-volver:hover, .btn-volver-leccion:hover { background-color: var(--accent-color); }

.container { max-width: 900px; margin: 2rem auto; padding: 0 1rem; }
.section-title { text-align: center; color: var(--primary-color); margin-bottom: 1.5rem; }
.text-center { text-align: center; }
.instruccion { color: #7f8c8d; margin-bottom: 2rem; font-size: 0.95rem; }

/* Grilla de Temas */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
}

.card-tema {
    background-color: var(--card-bg);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    cursor: pointer;
    border-top: 4px solid var(--accent-color);
    transition: transform 0.2s, box-shadow 0.2s;
}

.card-tema:hover { transform: translateY(-5px); box-shadow: 0 6px 15px rgba(0,0,0,0.1); }
.card-tema .eje-tag { font-size: 0.8rem; color: var(--accent-color); font-weight: bold; text-transform: uppercase; margin-bottom: 0.5rem; display: block; }
.card-tema h3 { color: var(--secondary-color); font-size: 1.2rem; margin-bottom: 0.5rem; }
.card-tema p { color: #666; font-size: 0.9rem; }

/* Reproductor de Lección */
.leccion-container {
    background-color: var(--card-bg);
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    overflow: hidden;
}

.leccion-header { background-color: var(--primary-color); padding: 1.5rem; color: white; }
.leccion-eje { font-size: 0.85rem; color: #bdc3c7; text-transform: uppercase; letter-spacing: 1px; }
.leccion-header h2 { font-size: 1.8rem; margin-top: 0.5rem; }

.seccion-contenido { padding: 1.5rem; border-bottom: 1px solid #eee; }
.seccion-contenido:last-child { border-bottom: none; }
.seccion-contenido h3 { color: var(--secondary-color); margin-bottom: 1rem; display: flex; align-items: center; gap: 8px; }
.seccion-contenido p { line-height: 1.6; color: #444; }

/* Contenedor de Video Responsivo (Mantiene 16:9) */
.video-responsive {
    position: relative;
    padding-bottom: 56.25%; /* Ratio 16:9 */
    height: 0;
    overflow: hidden;
    border-radius: 8px;
    background-color: #000;
}
.video-responsive iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Botón Descarga PDF */
.btn-descarga {
    display: inline-block;
    background-color: var(--danger-color);
    color: white;
    text-decoration: none;
    padding: 12px 25px;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 1rem;
    transition: background-color 0.3s;
}
.btn-descarga:hover { background-color: #c0392b; }

.oculto { display: none !important; }

/* Responsive Móvil */
@media (max-width: 600px) {
    .btn-volver { position: static; display: block; margin: 0 auto 1rem auto; width: fit-content; }
    .header { padding: 1rem; }
    .leccion-header h2 { font-size: 1.4rem; }
}
