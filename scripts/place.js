// STATIC WEATHER DATA
const temperature = 22; // °C
const windSpeed = 6; // km/h

// WINDCHILL CALCULATION
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

// Determine wind chill or N/A
let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed);
}
document.getElementById("windchill").textContent = windChill;

// Footer JS: year & last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
