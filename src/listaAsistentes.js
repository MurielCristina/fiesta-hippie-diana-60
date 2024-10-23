// Función para cargar la lista de asistentes y sugerencias de canciones desde Google Sheets
function cargarAsistentes() {
  const listaElement = document.getElementById("asistentes-lista");
  const cancionesElement = document.getElementById("canciones-lista");

  // Cargar asistentes
  fetch(
    "https://script.google.com/macros/s/AKfycbzuDFL6n9rMYBVzxzGYgowxvFNNEVp1-99HiiE8M5YhpQoTXMkbzKFZAd7cw8bQCC1cWg/exec?tipo=asistente"
  )
    .then((response) => response.json())
    .then((data) => {
      listaElement.innerHTML = ""; // Limpia la tabla actual
      data.forEach((asistente, index) => {
        const tr = document.createElement("tr");

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
    })
    .catch((error) => console.error("Error al cargar los asistentes:", error));

  // Cargar canciones
  fetch(
    "https://script.google.com/macros/s/AKfycbzuDFL6n9rMYBVzxzGYgowxvFNNEVp1-99HiiE8M5YhpQoTXMkbzKFZAd7cw8bQCC1cWg/exec?tipo=cancion"
  )
    .then((response) => response.json())
    .then((data) => {
      cancionesElement.innerHTML = ""; // Limpia la tabla de canciones
      data.forEach((cancion, index) => {
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
    })
    .catch((error) => console.error("Error al cargar las canciones:", error));
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
