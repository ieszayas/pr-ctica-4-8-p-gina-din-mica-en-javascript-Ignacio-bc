// ==========================================
// 1. LÓGICA DEL MODO OSCURO
// ==========================================
const botonModo = document.getElementById('darkModeBtn');
const body = document.body;

function activarModoOscuro() {
    body.classList.add('dark-mode');
    botonModo.innerHTML = '<i class="bi bi-sun-fill me-1"></i> Modo Claro';
    botonModo.classList.remove('btn-outline-light');
    botonModo.classList.add('btn-outline-warning');
    localStorage.setItem('modo', 'oscuro');
}

function desactivarModoOscuro() {
    body.classList.remove('dark-mode');
    botonModo.innerHTML = '<i class="bi bi-moon-stars-fill me-1"></i> Modo Oscuro';
    botonModo.classList.remove('btn-outline-warning');
    botonModo.classList.add('btn-outline-light');
    localStorage.setItem('modo', 'claro');
}

// Verificar preferencia guardada
if (localStorage.getItem('modo') === 'oscuro') {
    activarModoOscuro();
}

botonModo.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        desactivarModoOscuro();
    } else {
        activarModoOscuro();
    }
});

// ==========================================
// 2. LÓGICA BOTÓN LIMPIAR + TOAST
// ==========================================
const btnLimpiar = document.getElementById('btnLimpiar');
const toastElement = document.getElementById('toastLimpiar');
// Ojo: Asegúrate de que tu form tenga id="miFormulario" o usa querySelector
const formulario = document.querySelector('form'); 

const toastBootstrap = new bootstrap.Toast(toastElement);

btnLimpiar.addEventListener('click', () => {
    formulario.reset();
    // Limpiar también las clases de validación visual si las hubiera
    document.querySelectorAll('.form-control, .form-select').forEach(el => {
        el.classList.remove('is-valid', 'is-invalid');
    });
    toastBootstrap.show();
});

// ==========================================
// 3. VALIDACIONES AVANZADAS + TOAST ÉXITO
// ==========================================

const formValidacion = document.getElementById('miFormulario');

formValidacion.addEventListener('submit', function (event) {
    // 1. Detener el envío automático
    event.preventDefault();
    event.stopPropagation();

    let esValido = true; 

    // --- A) VALIDACIÓN 1: NOMBRE (Regex) ---
    const nombreInput = document.getElementById('nombreUser');
    const patronNombre = /^[a-zA-ZÁ-ÿ\s]+$/;

    if (!patronNombre.test(nombreInput.value.trim())) {
        nombreInput.classList.add('is-invalid');
        esValido = false;
    } else {
        nombreInput.classList.remove('is-invalid');
        nombreInput.classList.add('is-valid');
    }

    // --- B) VALIDACIÓN 2: FECHA (Edad) ---
    const fechaInput = document.getElementById('fechaNac');
    // Asegúrate de tener este div en tu HTML para mostrar el error específico
    const errorFechaMsg = document.getElementById('errorFecha'); 

    if (!fechaInput.value) {
        fechaInput.classList.add('is-invalid');
        if(errorFechaMsg) errorFechaMsg.textContent = "La fecha es obligatoria.";
        esValido = false;
    } else {
        const fechaNacimiento = new Date(fechaInput.value);
        const fechaActual = new Date();
        
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }

        if (edad < 18) {
            fechaInput.classList.add('is-invalid');
            if(errorFechaMsg) errorFechaMsg.textContent = "Debes tener al menos 18 años.";
            esValido = false;
        } else if (edad > 100) {
            fechaInput.classList.add('is-invalid');
            if(errorFechaMsg) errorFechaMsg.textContent = "Fecha no válida.";
            esValido = false;
        } else {
            fechaInput.classList.remove('is-invalid');
            fechaInput.classList.add('is-valid');
        }
    }

    // --- C) VALIDACIÓN 3: CHECKBOXES ---
    const interesesMarcados = document.querySelectorAll('.check-interes:checked');
    const mensajeErrorInteres = document.getElementById('errorIntereses');

    if (interesesMarcados.length === 0) {
        if(mensajeErrorInteres) mensajeErrorInteres.classList.remove('d-none');
        esValido = false;
    } else {
        if(mensajeErrorInteres) mensajeErrorInteres.classList.add('d-none');
    }

    // --- D) VALIDACIÓN STANDARD BOOTSTRAP ---
    if (!formValidacion.checkValidity()) {
        formValidacion.classList.add('was-validated');
        esValido = false;
    }

    // --- RESULTADO FINAL ---
    if (esValido) {
        // AQUÍ ESTABA TU ERROR: Antes tenías un alert, ahora usamos el Toast
        
        // 1. Mostrar el Toast de Éxito
        const toastExitoEl = document.getElementById('toastExito');
        const toastExito = new bootstrap.Toast(toastExitoEl);
        toastExito.show();

        // 2. Limpiar el formulario visualmente
        formValidacion.reset();
        formValidacion.classList.remove('was-validated');
        
        // Quitar clases visuales
        document.querySelectorAll('.form-control, .form-select').forEach(el => {
            el.classList.remove('is-valid', 'is-invalid');
        });
        
        // Ocultar error intereses si estaba visible
        if(mensajeErrorInteres) mensajeErrorInteres.classList.add('d-none');
    }
});