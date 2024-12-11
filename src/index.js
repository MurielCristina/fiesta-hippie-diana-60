// Configurar la fecha y hora de la fiesta en la zona horaria de Panamá (UTC-5)
const countdownDate = new Date("2025-01-04T20:00:00-05:00").getTime(); // 20:00 en UTC-5
console.log(countdownDate); // Verifica la fecha de la fiesta
console.log(new Date().getTime()); // Verifica el tiempo actual

// Actualiza el conteo regresivo cada segundo
const countdownFunction = setInterval(() => {
  const now = new Date().getTime(); // Obtiene el tiempo actual
  const distance = countdownDate - now; // Calcula la diferencia de tiempo

  // Cálculo del tiempo restante
  const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Días
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ); // Horas
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Minutos
  const seconds = Math.floor((distance % (1000 * 60)) / 1000); // Segundos

  // Muestra el conteo regresivo en la página
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Si el conteo regresivo ha terminado, muestra un mensaje
  if (distance < 0) {
    clearInterval(countdownFunction); // Detiene la función cuando el conteo ha terminado
    document.getElementById("countdown-timer").innerHTML =
      "¡La fiesta ha comenzado!";
  }
}, 1000); // Ejecuta cada 1 segundo

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
