// Función para cargar la lista de asistentes desde localStorage
function cargarAsistentes() {
  const asistentesLista = JSON.parse(localStorage.getItem("asistentes")) || [];
  const listaElement = document.getElementById("asistentes-lista");

  // Limpia la lista actual y vuelve a llenarla
  listaElement.innerHTML = "";
  asistentesLista.forEach((asistente) => {
    const li = document.createElement("li");
    li.textContent = asistente;

    // Botón para quitarse de la lista
    const borrarBtn = document.createElement("button2");
    borrarBtn.textContent = "[ Quitar ]";
    borrarBtn.onclick = () => quitarAsistente(asistente); // Llama a la función para quitar el nombre

    li.appendChild(borrarBtn); // Añade el botón al elemento de lista
    listaElement.appendChild(li); // Añade el elemento de lista al UL
  });
}

// Función para quitar un asistente de la lista
function quitarAsistente(nombre) {
  let asistentesLista = JSON.parse(localStorage.getItem("asistentes")) || [];

  // Filtra la lista para eliminar el nombre especificado
  asistentesLista = asistentesLista.filter((asistente) => asistente !== nombre);

  localStorage.setItem("asistentes", JSON.stringify(asistentesLista)); // Actualiza localStorage
  cargarAsistentes(); // Recarga la lista de asistentes
}

// Agrega un event listener al formulario
document
  .getElementById("rsvp-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;

    // Agrega el nombre a localStorage
    const asistentesLista =
      JSON.parse(localStorage.getItem("asistentes")) || [];
    asistentesLista.push(nombre);
    localStorage.setItem("asistentes", JSON.stringify(asistentesLista));

    // Muestra una alerta de confirmación
    alert(`Gracias ${nombre}! Tu asistencia ha sido confirmada.`);
    this.reset(); // Limpia el formulario

    // Recarga la lista de asistentes
    cargarAsistentes();
  });

// Carga la lista de asistentes al cargar la página
window.onload = cargarAsistentes;
