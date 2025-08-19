// Animación inicial con GSAP
window.onload = () => {
  gsap.from(".heart", { scale: 0, duration: 1.5, ease: "bounce" });
  gsap.from(".mensaje", { opacity: 0, y: 50, duration: 1.5, delay: 1 });
  gsap.from(".frases-extra p", { opacity: 0, x: -50, stagger: 0.3, duration: 1, delay: 1.5 });
};

// Mostrar mensaje al hacer clic en el corazón
function mostrarMensaje() {
  // Mostrar el mensaje
  gsap.to("#mensaje", {
    opacity: 1,
    y: -20,
    duration: 1,
    ease: "power2.out",
    display: "block"
  });

  // Mostrar el reproductor con fade-in
  gsap.to("iframe", {
    opacity: 1,
    duration: 1,
    ease: "power1.out"
  });

  // Partículas flotantes (opcional)
 
}

// Partículas flotantes (corazones)
const particulas = document.querySelector(".particulas");

function crearParticula() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerHTML = "❤️";
  corazon.style.left = Math.random() * window.innerWidth + "px";
  corazon.style.animationDuration = 4 + Math.random() * 4 + "s";
  particulas.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 8000);
}

setInterval(crearParticula, 500);

// Cuenta regresiva para fecha especial
const fechaEspecial = new Date("2025-09-14"); // Cambia a tu fecha
const hoy = new Date();
const diferencia = Math.ceil((fechaEspecial - hoy) / (1000 * 60 * 60 * 24));

// Puedes mostrarlo en algún elemento si lo agregas al HTML
console.log(`Faltan ${diferencia} días para nuestro día especial 💖`);
function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  mensaje.style.display = "block";
  gsap.to(mensaje, { opacity: 1, y: 0, duration: 1 });
}

