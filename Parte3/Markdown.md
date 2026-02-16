# Documentación del Proyecto: MundialStats

**MundialStats** es una Landing Page interactiva diseñada para el seguimiento de estadísticas de un torneo de fútbol. El proyecto combina un diseño moderno y responsivo con funcionalidades dinámicas de validación de datos, manipulación del DOM y persistencia de preferencias del usuario.

---

## Tecnologías Utilizadas

* **HTML5:** Estructura semántica.
* **CSS3:** Estilos personalizados, variables CSS y animaciones.
* **Bootstrap 5.3:** Framework para la rejilla (grid), componentes (modales, carrusel, acordeones) y utilidad responsive.
* **JavaScript (ES6+):** Lógica del lado del cliente dividida en módulos funcionales.
* **Bootstrap Icons / FontAwesome:** Iconografía.

---

## Estructura del Proyecto

El proyecto está dividido en 5 archivos principales para mantener el código organizado:

1.  `index.html`: Estructura principal.
2.  `styles.css`: Estilos visuales y modo oscuro.
3.  `scriptparte1.js`: Gestión del formulario y configuración global.
4.  `scriptparte2.js`: Generación dinámica de tablas de datos.
5.  `scriptparte3.js`: Utilidades interactivas (Buscador, Reloj, Likes).

---

## Características Principales

### 1. Interfaz de Usuario (UI) y Diseño
El diseño se basa en una paleta de colores definida en variables CSS (Verde, Negro y Dorado).

* **Navbar "Glassmorphism":** La barra de navegación tiene un efecto de desenfoque y transparencia (`backdrop-filter: blur`).
* **Modo Oscuro:** Implementación completa que invierte los colores de fondo y texto. La preferencia se guarda en `localStorage` para que persista al recargar la página.
* **Diseño Responsivo:** Uso del sistema de columnas de Bootstrap para adaptarse a móviles, tablets y escritorio.

### 2. Gestión del Formulario (Sorteo)
El formulario cuenta con validaciones robustas antes de permitir el envío:

* **Validación de Nombre:** Uso de Expresiones Regulares (`RegEx`) para permitir solo letras.
* **Cálculo de Edad:** Verifica que el usuario tenga entre 18 y 100 años basándose en su fecha de nacimiento.
* **Almacenamiento:** Los datos válidos se guardan en un Array de objetos (`arrayUsuarios`) y se muestran en la consola mediante `console.table`.
* **Feedback Visual:** Uso de `Toasts` (notificaciones emergentes) para confirmar el envío o la limpieza del formulario.

### 3. Tabla de Clasificación Dinámica
La tabla no está escrita en HTML estático, sino que se genera mediante JavaScript:

* **Renderizado:** Se recorre un array de objetos (`datosClasificacion`) y se inyecta el HTML en el DOM.
* **Lógica Condicional:** Los equipos clasificados aparecen con una etiqueta verde, mientras que los eliminados aparecen en rojo.
* **Personalización:**
    * **Buscador:** Filtra las filas de la tabla en tiempo real mientras el usuario escribe.
    * **Selector de Color:** Permite cambiar el fondo de la tabla. Incluye un algoritmo que calcula la **luminosidad** para cambiar automáticamente el color del texto (blanco o negro) según el fondo elegido para mantener la legibilidad.

### 4. Interactividad y Extras

* **Cuenta Regresiva:** Un contador calcula en tiempo real los días, horas y minutos restantes para la final (fijada a 15 días desde la fecha actual).
* **Sistema de Votos (Likes):** Las tarjetas de jugadores permiten "votar" por el MVP. Al hacer clic, el icono del corazón cambia, se anima con un efecto de latido (`heart-beat`) y se actualiza el texto.
* **Reloj Digital:** Muestra la hora actual en la barra de navegación.

---

### 5. Screenshots

![alt text](<scrrenshots/Screenshot 2026-02-16 154214.png>) ![alt text](<scrrenshots/Screenshot 2026-02-16 154414.png>) ![alt text](<scrrenshots/Screenshot 2026-02-16 154430.png>) ![alt text](<scrrenshots/Screenshot 2026-02-16 154453.png>) ![alt text](<scrrenshots/Screenshot 2026-02-16 154516.png>)