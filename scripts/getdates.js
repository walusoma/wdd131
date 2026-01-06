// Dynamically set the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date in the footer
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
