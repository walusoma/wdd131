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

// Temple array
const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005-08-07", area: 11500, imageUrl: "images/temple.jpeg" },
  { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888-05-21", area: 74792, imageUrl: "images/temple.jpeg" },
  { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015-06-07", area: 96630, imageUrl: "images/temple.jpeg" },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020-05-02", area: 6861, imageUrl: "images/temple.jpeg" },
  { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974-11-19", area: 156558, imageUrl: "images/temple.jpeg" },
  { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986-01-10", area: 9600, imageUrl: "images/temple.jpeg" },
  { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983-12-02", area: 116642, imageUrl: "images/temple.jpeg" },
  { templeName: "Accra Ghana", location: "Accra, Ghana", dedicated: "2004-01-11", area: 20000, imageUrl: "images/accra.jpg" },
  { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019-03-10", area: 12000, imageUrl: "images/rome.jpg" },
  { templeName: "Tokyo Japan", location: "Tokyo, Japan", dedicated: "1980-04-27", area: 85000, imageUrl: "images/temple.jpeg" }
];

// Function to display temple cards
const gallery = document.getElementById("templeGallery");

function displayTemples(filteredTemples) {
  gallery.innerHTML = ""; 

  filteredTemples.forEach(temple => {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy"; 
    card.appendChild(img);

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <strong>${temple.templeName}</strong><br>
      Location: ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area.toLocaleString()} sq ft
    `;
    card.appendChild(caption);

    gallery.appendChild(card);
  });
}

// Initial display
displayTemples(temples);

// Filter functionality
navMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    const filter = e.target.dataset.filter;

    let filtered;
    if (filter === "old") {
      filtered = temples.filter(t => new Date(t.dedicated) < new Date("1900-01-01"));
    } else if (filter === "new") {
      filtered = temples.filter(t => new Date(t.dedicated) > new Date("2000-01-01"));
    } else if (filter === "large") {
      filtered = temples.filter(t => t.area > 90000);
    } else if (filter === "small") {
      filtered = temples.filter(t => t.area < 10000);
    } else {
      filtered = temples; 
    }

    displayTemples(filtered);
  }
});
