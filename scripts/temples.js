// Footer dates
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#modified").textContent = document.lastModified;

// Hamburger menu
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  const expanded = navMenu.classList.contains("show");
  menuBtn.textContent = expanded ? "✖" : "☰";
  menuBtn.setAttribute("aria-expanded", expanded);
});
