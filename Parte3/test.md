# Tabla de Pruebas de Software - MundialStats

A continuación se detallan las pruebas realizadas para validar los requisitos funcionales y la experiencia de usuario (UX) del proyecto.

| ID | Requisito / Funcionalidad | Descripción de la Prueba | Pasos de Ejecución | Resultado Esperado | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P-01** | **Modo Oscuro (UI/UX)** | Validar cambio de interfaz a colores oscuros. | 1. Clic en el botón "Modo Oscuro" en la Navbar.<br>2. Verificar cambio de colores en el body y tarjetas. | El fondo debe volverse oscuro y los textos claros. El botón debe cambiar su icono a un Sol. | ✅ Pasó |
| **P-02** | **Persistencia (localStorage)** | Verificar que la preferencia de tema se guarda. | 1. Activar Modo Oscuro.<br>2. Recargar la página (F5) o cerrar el navegador. | La página debe cargar directamente en Modo Oscuro sin que el usuario deba pulsar el botón de nuevo. | ✅ Pasó |
| **P-03** | **Limpieza de Formulario** | Comprobar el reset de campos y estados visuales. | 1. Rellenar campos con errores y aciertos.<br>2. Hacer clic en el botón "Limpiar". | Todos los inputs deben quedar vacíos. Desaparecen los bordes verdes/rojos y mensajes de error. | ✅ Pasó |
| **P-04** | **Notificación Toast** | Validar feedback no intrusivo al usuario. | 1. Realizar un envío exitoso o limpiar el formulario. | Debe emerger un aviso visual (Toast) en la esquina inferior derecha con el mensaje correspondiente. | ✅ Pasó |
| **P-05** | **Validación: Nombre** | Restringir caracteres no alfabéticos. | 1. Escribir "Messi10" o "Neymar$" en el campo Nombre.<br>2. Intentar enviar. | El sistema debe marcar el campo en rojo y bloquear el envío. El mensaje indica que solo se permiten letras. | ✅ Pasó |
| **P-06** | **Validación: Edad** | Validar rango de edad permitido (18 - 100). | 1. Introducir una fecha de nacimiento que resulte en 15 años o en 110 años. | Se activa la clase `.is-invalid`. El script bloquea la creación del objeto usuario en el array global. | ✅ Pasó |
| **P-07** | **Envío Exitoso** | Confirmar flujo completo de datos. | 1. Completar todos los campos correctamente.<br>2. Clic en "Participar". | Se muestra el Toast de éxito. Se limpia el formulario. El objeto usuario aparece reflejado en la consola (`console.table`). | ✅ Pasó |

![alt text](<scrrenshots/Screenshot 2026-02-16 150127.png>) ![alt text](<scrrenshots/Screenshot 2026-02-16 151509.png>) ![alt text](<scrrenshots/Screenshot 2026-02-16 151611.png>) ![alt text](<scrrenshots/Screenshot 2026-02-16 151754.png>) ![alt text](<scrrenshots/Screenshot 2026-02-16 151904.png>) ![alt text](<scrrenshots/Screenshot 2026-02-16 151954.png>)
