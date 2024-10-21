// Agrega un event listener al formulario
document
  .getElementById("rsvp-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value; // Asegúrate de que el campo teléfono esté presente

    // Asegúrate de que todos los campos están llenos
    if (nombre && telefono) {
      // Agrega el nombre y el teléfono a localStorage
      const asistentesLista =
        JSON.parse(localStorage.getItem("asistentes")) || [];
      asistentesLista.push({ nombre, telefono }); // Almacena nombre y teléfono
      localStorage.setItem("asistentes", JSON.stringify(asistentesLista));

      // Muestra una alerta de confirmación
      alert(`Gracias ${nombre}! Tu asistencia ha sido confirmada.`);
      this.reset(); // Limpia el formulario
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
