// Agrega un event listener al formulario
document
  .getElementById("rsvp-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value; // Asegúrate de que el campo teléfono esté presente

    // Asegúrate de que todos los campos estén llenos
    if (nombre && telefono) {
      alert(`Gracias ${nombre}! Tu asistencia ha sido confirmada.`);
      this.reset(); // Limpia el formulario
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });

// Configurar la fecha y hora de la fiesta en la zona horaria de Panamá (UTC-5)
const countdownDate = new Date("2025-01-04T20:00:00-05:00").getTime(); // 20:00 en UTC-5

// Actualiza el conteo regresivo cada segundo
const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Cálculo del tiempo restante
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Muestra el conteo regresivo en la página
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Si el conteo regresivo ha terminado, muestra un mensaje
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown-timer").innerHTML =
      "¡La fiesta ha comenzado!";
  }
}, 1000);

// Funciones para manejar los popups
function openDressCodePopup() {
  document.getElementById("dress-code-popup").style.display = "block";
}

function closeDressCodePopup() {
  document.getElementById("dress-code-popup").style.display = "none";
}

function openTipsPopup() {
  document.getElementById("tips-popup").style.display = "block";
}

function closeTipsPopup() {
  document.getElementById("tips-popup").style.display = "none";
}

function showHashtagPopup() {
  document.getElementById("hashtag-popup").style.display = "block";
}

function closeHashtagPopup() {
  document.getElementById("hashtag-popup").style.display = "none";
}

// Mostrar el hashtag oficial
function showHashtag() {
  alert("#Fiesta60Diana");
}
