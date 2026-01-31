// ==========================================
// 0. ALMACENAMIENTO DE DATOS (NUEVO)
// Declaramos el array fuera de las funciones para que no se borre al enviar
const arrayUsuarios = [];

// ==========================================
// 1. LÓGICA DEL MODO OSCURO
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

const btnLimpiar = document.getElementById('btnLimpiar');
const toastElement = document.getElementById('toastLimpiar');
const formulario = document.querySelector('form');

const toastBootstrap = new bootstrap.Toast(toastElement);

btnLimpiar.addEventListener('click', () => {
    formulario.reset();
    document.querySelectorAll('.form-control, .form-select').forEach(el => {
        el.classList.remove('is-valid', 'is-invalid');
    });
    toastBootstrap.show();
});

// ==========================================
// 3. VALIDACIONES + GUARDADO EN ARRAY

const formValidacion = document.getElementById('miFormulario');

formValidacion.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let esValido = true;

    // ---VALIDACIÓN NOMBRE ---
    const nombreInput = document.getElementById('nombreUser');
    const patronNombre = /^[a-zA-ZÁ-ÿ\s]+$/;

    if (!patronNombre.test(nombreInput.value.trim())) {
        nombreInput.classList.add('is-invalid');
        esValido = false;
    } else {
        nombreInput.classList.remove('is-invalid');
        nombreInput.classList.add('is-valid');
    }

    // ---VALIDACIÓN FECHA ---
    const fechaInput = document.getElementById('fechaNac');
    const errorFechaMsg = document.getElementById('errorFecha');

    if (!fechaInput.value) {
        fechaInput.classList.add('is-invalid');
        if (errorFechaMsg) errorFechaMsg.textContent = "La fecha es obligatoria.";
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
            if (errorFechaMsg) errorFechaMsg.textContent = "Debes tener al menos 18 años.";
            esValido = false;
        } else if (edad > 100) {
            fechaInput.classList.add('is-invalid');
            if (errorFechaMsg) errorFechaMsg.textContent = "Fecha no válida.";
            esValido = false;
        } else {
            fechaInput.classList.remove('is-invalid');
            fechaInput.classList.add('is-valid');
        }
    }

    // --- C) VALIDACIÓN CHECKBOXES ---
    // Obtenemos los checkboxes marcados
    const checkboxesMarcados = document.querySelectorAll('.check-interes:checked');
    const mensajeErrorInteres = document.getElementById('errorIntereses');

    if (checkboxesMarcados.length === 0) {
        if (mensajeErrorInteres) mensajeErrorInteres.classList.remove('d-none');
        esValido = false;
    } else {
        if (mensajeErrorInteres) mensajeErrorInteres.classList.add('d-none');
    }

    // --- VALIDACIÓN STANDARD BOOTSTRAP ---
    if (!formValidacion.checkValidity()) {
        formValidacion.classList.add('was-validated');
        esValido = false;
    }

    if (esValido) {
        // ===============================================
        // CREAR OBJETO Y GUARDAR EN ARRAY

        // Recopilar intereses en un array
        // Convertimos a Array y mapeamos sus valores
        const listaIntereses = Array.from(checkboxesMarcados).map(check => check.value);

        //Crear el objeto Usuario
        const nuevoUsuario = {
            nombre: nombreInput.value,
            email: document.getElementById('emailUser').value,
            fechaNacimiento: fechaInput.value,
            equipoFavorito: document.getElementById('equipoSelect').value, // Guarda el value (1, 2 o 3)
            intereses: listaIntereses,
            comentario: document.getElementById('mensajeArea').value
        };

        // Guardar en el Array Global
     
        arrayUsuarios.push(nuevoUsuario);
     
        // 4. Mostrar por Consola (Requisito)
        console.clear(); // Limpia la consola para ver mejor el último envío
        console.log("Usuario añadido correctamente:");
        console.table(arrayUsuarios); // ¡Aquí está la tabla mágica!

        // ===============================================
        // FIN LÓGICA DE GUARDADO
        // ===============================================

        // Mostrar Toast Exito
        const toastExitoEl = document.getElementById('toastExito');
        const toastExito = new bootstrap.Toast(toastExitoEl);
        toastExito.show();

        // Resetear formulario
        formValidacion.reset();
        formValidacion.classList.remove('was-validated');
        document.querySelectorAll('.form-control, .form-select').forEach(el => {
            el.classList.remove('is-valid', 'is-invalid');
        });
        if (mensajeErrorInteres) mensajeErrorInteres.classList.add('d-none');
    }
});