// A) Array de Objetos 
const datosClasificacion = [
    { pos: 1, equipo: 'Argentina', puntos: 6, estado: 'Clasif.' },
    { pos: 2, equipo: 'Polonia', puntos: 4, estado: 'Clasif.' },
    { pos: 3, equipo: 'México', puntos: 4, estado: 'Elim.' },
    { pos: 4, equipo: 'Arabia S.', puntos: 3, estado: 'Elim.' },
    { pos: 5, equipo: 'Brasil', puntos: 6, estado: 'Clasif.' },
    { pos: 6, equipo: 'Suiza', puntos: 6, estado: 'Clasif.' },
    { pos: 7, equipo: 'Camerún', puntos: 4, estado: 'Elim.' },
    { pos: 8, equipo: 'Serbia', puntos: 1, estado: 'Elim.' },
    { pos: 9, equipo: 'Portugal', puntos: 6, estado: 'Clasif.' },
    { pos: 10, equipo: 'Corea del Sur', puntos: 4, estado: 'Clasif.' }
];

// B) Función para dibujar la tabla
function cargarTabla() {
    const cuerpoTabla = document.getElementById('tabla-body');

    // Limpiamos el contenido actual por seguridad
    cuerpoTabla.innerHTML = '';

    // Recorremos el array
    datosClasificacion.forEach(dato => {
        // Creamos una nueva fila <tr>
        const fila = document.createElement('tr');

        // Lógica para el color del badge (Verde si clasifica, Rojo si no)
        // Usamos un operador ternario: (condición) ? verdadero : falso
        const claseBadge = (dato.estado === 'Clasif.') ? 'bg-success' : 'bg-danger';

        // Insertamos el HTML dentro de la fila usando Template Strings (``)
        fila.innerHTML = `
            <td>${dato.pos}</td>
            <td class="fw-bold">${dato.equipo}</td>
            <td class="text-center">${dato.puntos}</td>
            <td class="text-end">
                <span class="badge ${claseBadge}">${dato.estado}</span>
            </td>
        `;

        // Añadimos la fila al cuerpo de la tabla
        cuerpoTabla.appendChild(fila);
    });
}

// C) Ejecutar la función cuando carga la página
// Esto asegura que la tabla se dibuje nada más entrar
document.addEventListener('DOMContentLoaded', cargarTabla);