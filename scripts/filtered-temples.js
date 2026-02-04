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

// Temple data
const temples = [
  { name: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005-08-07", area: 11500, image: "images/temple.jpeg" },
  { name: "Manti Utah", location: "Manti, Utah, USA", dedicated: "1888-05-21", area: 74792, image: "images/temple.jpeg" },
  { name: "Payson Utah", location: "Payson, Utah, USA", dedicated: "2015-06-07", area: 96630, image: "images/temple.jpeg" },
  { name: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020-05-02", area: 6861, image: "images/temple.jpeg" },
  { name: "Washington D.C.", location: "Maryland, USA", dedicated: "1974-11-19", area: 156558, image: "images/temple.jpeg" },
  { name: "Lima Perú", location: "Lima, Perú", dedicated: "1986-01-10", area: 9600, image: "images/temple.jpeg" },
  { name: "Mexico City", location: "Mexico City, Mexico", dedicated: "1983-12-02", area: 116642, image: "images/temple.jpeg" },
  { name: "Accra Ghana", location: "Accra, Ghana", dedicated: "2004-01-11", area: 20000, image: "images/accra.jpg" },
  { name: "Rome Italy", location: "Rome, Italy", dedicated: "2019-03-10", area: 12000, image: "images/rome.jpg" },
  { name: "Tokyo Japan", location: "Tokyo, Japan", dedicated: "1980-04-27", area: 85000, image: "images/temple.jpeg" }
];

const gallery = document.querySelector("#templeGallery");

function displayTemples(list) {
  gallery.innerHTML = "";

  list.forEach(t => {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = t.image;
    img.alt = t.name;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <strong>${t.name}</strong><br>
      ${t.location}<br>
      Dedicated: ${t.dedicated}<br>
      Area: ${t.area.toLocaleString()} sq ft
    `;

    card.appendChild(img);
    card.appendChild(caption);
    gallery.appendChild(card);
  });
}

// Initial load
displayTemples(temples);

// FILTER LOGIC
function applyFilter(filter) {
  let result = temples;

  if (filter === "old") result = temples.filter(t => new Date(t.dedicated) < new Date("1900-01-01"));
  if (filter === "new") result = temples.filter(t => new Date(t.dedicated) > new Date("2000-01-01"));
  if (filter === "large") result = temples.filter(t => t.area > 90000);
  if (filter === "small") result = temples.filter(t => t.area < 10000);

  displayTemples(result);
}

// Button filters
document.querySelector(".filters").addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    applyFilter(e.target.dataset.filter);
  }
});

// Nav filters
navMenu.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    applyFilter(e.target.dataset.filter);
  }
});
