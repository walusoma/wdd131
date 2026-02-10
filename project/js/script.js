// ===============================
// Jinja Tourism Hub JavaScript
// ===============================

// Tourist attractions data
const attractions = [
  {
    name: "Source of the Nile",
    description: "The legendary starting point of the world's longest river and a major tourist landmark in Jinja."
  },
  {
    name: "White Water Rafting",
    description: "An exciting adventure experience on the River Nile, attracting visitors from all over the world."
  },
  {
    name: "Bujagali Falls",
    description: "A peaceful and scenic area popular for relaxation, cultural experiences, and nature walks."
  }
];

// ===============================
// Display attractions dynamically
// ===============================
const attractionsContainer = document.querySelector("#attractions");

if (attractionsContainer) {
  attractions.forEach(attraction => {
    attractionsContainer.innerHTML += `
      <article>
        <h3>${attraction.name}</h3>
        <p>${attraction.description}</p>
      </article>
    `;
  });
}

// ===============================
// Contact form handling + localStorage
// ===============================
const contactForm = document.querySelector("#contactForm");
const responseMessage = document.querySelector("#response");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.querySelector("#name").value;

    if (name.trim() !== "") {
      localStorage.setItem("visitorName", name);
      responseMessage.textContent = `Thank you for contacting us, ${name}! We will get back to you soon.`;
    } else {
      responseMessage.textContent = "Please enter your name before submitting the form.";
    }
  });
}
