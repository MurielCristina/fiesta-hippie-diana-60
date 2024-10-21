// Función para cargar la lista de asistentes y sugerencias de canciones desde localStorage
function cargarAsistentes() {
  const asistentesLista = JSON.parse(localStorage.getItem("asistentes")) || [];
  const listaElement = document.getElementById("asistentes-lista");
  const cancionesLista = JSON.parse(localStorage.getItem("canciones")) || [];

  // Limpia la tabla actual y vuelve a llenarla
  listaElement.innerHTML = "";
  asistentesLista.forEach((asistente, index) => {
    const tr = document.createElement("tr");

    // Crea celdas para cada propiedad
    const tdNumero = document.createElement("td");
    tdNumero.textContent = index + 1; // Número de orden

    const tdNombre = document.createElement("td");
    tdNombre.textContent = asistente.nombre; // Nombre del asistente

    const tdTelefono = document.createElement("td");
    tdTelefono.textContent = asistente.telefono; // Teléfono del asistente

    // Crea la celda para el botón de eliminar
    const tdAcciones = document.createElement("td");
    const borrarBtn = document.createElement("button");
    borrarBtn.textContent = "Eliminar";
    borrarBtn.className = "button2"; // Asigna la clase button2
    borrarBtn.onclick = () => eliminarAsistente(asistente.nombre); // Llama a la función para eliminar el asistente

    // Añade el botón a la celda de acciones
    tdAcciones.appendChild(borrarBtn);

    // Añade las celdas a la fila
    tr.appendChild(tdNumero);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTelefono);
    tr.appendChild(tdAcciones); // Añade la celda de acciones

    // Añade la fila a la tabla
    listaElement.appendChild(tr);
  });

  // Mostrar la lista de sugerencias de canciones
  const cancionesElement = document.getElementById("canciones-lista");
  cancionesElement.innerHTML = ""; // Limpia la tabla de canciones
  cancionesLista.forEach((cancion, index) => {
    const tr = document.createElement("tr");

    const tdNumero = document.createElement("td");
    tdNumero.textContent = index + 1; // Número de orden

    const tdNombreCancion = document.createElement("td");
    tdNombreCancion.textContent = cancion.nombre; // Nombre de la canción

    const tdAutor = document.createElement("td");
    tdAutor.textContent = cancion.autor; // Autor de la canción

    const tdLink = document.createElement("td");
    const linkElement = document.createElement("a");
    linkElement.href = cancion.link; // Link de la canción
    linkElement.textContent = "Escuchar";
    linkElement.target = "_blank"; // Abrir en nueva pestaña
    tdLink.appendChild(linkElement);

    // Añade las celdas a la fila
    tr.appendChild(tdNumero);
    tr.appendChild(tdNombreCancion);
    tr.appendChild(tdAutor);
    tr.appendChild(tdLink);

    // Añade la fila a la tabla
    cancionesElement.appendChild(tr);
  });
}

// Función para eliminar un asistente de la lista
function eliminarAsistente(nombre) {
  let asistentesLista = JSON.parse(localStorage.getItem("asistentes")) || [];
  asistentesLista = asistentesLista.filter(
    (asistente) => asistente.nombre !== nombre
  );
  localStorage.setItem("asistentes", JSON.stringify(asistentesLista)); // Actualiza localStorage
  cargarAsistentes(); // Recarga la lista de asistentes
}

// Carga la lista de asistentes y canciones al cargar la página
window.onload = cargarAsistentes;
