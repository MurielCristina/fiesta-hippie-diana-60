// Función para cargar la lista de asistentes desde localStorage
function cargarAsistentes() {
  const asistentesLista = JSON.parse(localStorage.getItem("asistentes")) || [];
  const listaElement = document.getElementById("asistentes-lista");

  // Limpia la tabla actual y vuelve a llenarla
  listaElement.innerHTML = "";
  asistentesLista.forEach((asistente, index) => {
    const tr = document.createElement("tr"); // Crea una nueva fila para la tabla

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
}

// Función para eliminar un asistente de la lista
function eliminarAsistente(nombre) {
  let asistentesLista = JSON.parse(localStorage.getItem("asistentes")) || [];

  // Filtra la lista para eliminar el asistente
  asistentesLista = asistentesLista.filter(
    (asistente) => asistente.nombre !== nombre
  );
  localStorage.setItem("asistentes", JSON.stringify(asistentesLista)); // Actualiza localStorage
  cargarAsistentes(); // Recarga la lista de asistentes
}

// Carga la lista de asistentes al cargar la página
window.onload = cargarAsistentes;
