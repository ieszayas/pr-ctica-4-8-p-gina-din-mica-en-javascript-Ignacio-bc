function iniciarReloj() {
    const relojElemento = document.getElementById('relojDigital');

    // Actualizamos cada segundo (1000 ms)
    setInterval(() => {
        const ahora = new Date();
        // toLocaleTimeString formatea automáticamente a HH:MM:SS
        relojElemento.textContent = ahora.toLocaleTimeString();
    }, 1000);
}
// Iniciamos el reloj
iniciarReloj();

// --- B) SELECTOR DE COLOR PARA LA TABLA ---
const inputColor = document.getElementById('colorTabla');
const tabla = document.querySelector('.table');

if(inputColor && tabla) {
    inputColor.addEventListener('input', (evento) => {
        const color = evento.target.value;
        
        // 1. Aplicamos el color usando la variable de Bootstrap Y el estilo estándar
        // Esto fuerza a que el color se vea sí o sí.
        tabla.style.setProperty('--bs-table-bg', color);
        tabla.style.backgroundColor = color;

        // 2. Lógica de Contraste (Opcional pero muy profesional)
        // Convertimos el Hexadecimal a RGB para saber si es oscuro o claro
        const r = parseInt(color.substr(1, 2), 16);
        const g = parseInt(color.substr(3, 2), 16);
        const b = parseInt(color.substr(5, 2), 16);
        
        // Fórmula de luminosidad: si es oscuro (<128), texto blanco; si no, negro.
        const luminosidad = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        
        if (luminosidad < 128) {
            tabla.style.color = 'white';
            tabla.classList.remove('table-hover'); // Quitamos hover si es muy oscuro para que se lea
        } else {
            tabla.style.color = 'black';
            tabla.classList.add('table-hover');
        }
    });
}
// --- C) BÚSQUEDA DINÁMICA EN TABLA ---
const inputBuscador = document.getElementById('buscadorTabla');

if (inputBuscador) {
    inputBuscador.addEventListener('keyup', (evento) => {
        const textoBusqueda = evento.target.value.toLowerCase();
        // Seleccionamos todas las filas del cuerpo de la tabla
        const filas = document.querySelectorAll('#tabla-body tr');

        filas.forEach(fila => {
            // Obtenemos el texto de toda la fila
            const textoFila = fila.textContent.toLowerCase();

            // Si el texto de la fila incluye lo que buscamos...
            if (textoFila.includes(textoBusqueda)) {
                fila.style.display = ''; // Se muestra
            } else {
                fila.style.display = 'none'; // Se oculta
            }
        });
    });
}

// ==========================================
// 6. EXTRAS PROPIOS 

// --- cUENTA ATRÁS PARA LA FINAL ---
// Definimos una fecha objetivo
const fechaFinal = new Date();
fechaFinal.setDate(fechaFinal.getDate() + 15); // Sumamos 15 días simulados

function actualizarContador() {
    const contadorEl = document.getElementById('contadorFinal');

    if (contadorEl) {
        const ahora = new Date();
        const diferencia = fechaFinal - ahora;

        // Cálculos matemáticos para días, horas, minutos y segundos
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Actualizamos el HTML
        contadorEl.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }
}

// Actualizamos cada segundo, igual que el reloj
setInterval(actualizarContador, 1000);
actualizarContador(); // Ejecutar inmediatamente para no esperar 1 seg


// ---  SISTEMA DE "LIKES"  ---
// Esta función se llama desde el HTML con onclick="toggleLike(this)"
function toggleLike(elemento) {
    // Buscamos el icono dentro del elemento clickeado
    const icono = elemento.querySelector('i');
    const texto = elemento.querySelector('span');

    // Comprobamos si ya tiene la clase de corazón lleno
    if (icono.classList.contains('bi-heart')) {
        // CAMBIAR A LIKE 
        icono.classList.remove('bi-heart');       // Quita corazón vacío
        icono.classList.add('bi-heart-fill');     // Pone corazón lleno
        icono.classList.add('heart-beat');        // Añade efecto latido (CSS)
        texto.textContent = "¡Voto registrado!";
        texto.classList.add('fw-bold');
    } else {
        // QUITAR LIKE 
        icono.classList.remove('bi-heart-fill');  // Quita corazón lleno
        icono.classList.remove('heart-beat');     // Quita efecto
        icono.classList.add('bi-heart');          // Pone corazón vacío
        texto.textContent = "Votar MVP";
        texto.classList.remove('fw-bold');
    }
}

