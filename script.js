document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada correctamente.");

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  function setActiveLink() {
    let index = sections.length;

    while (--index >= 0) {
      const sectionTop = sections[index].offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(`nav a[href="#${sections[index].id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
        break;
      }
    }
  }

  setActiveLink(); // Ejecutar una vez al cargar
  window.addEventListener("scroll", setActiveLink);
});
