// hacer que la flechita funcione
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// seccion del navegador de hamburguesa

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
  ul.classList.remove("show");
})
);

// Ajustar el desplazamiento al hacer clic en los enlaces del menú
navLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado
    const targetId = link.getAttribute("href").substring(1); // Obtener el ID del destino
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = targetElement.offsetTop - 50; // Ajustar el desplazamiento (50px como ejemplo)
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  });
});

