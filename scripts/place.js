const currentYear = document.querySelector("#currentyear");
const today = new Date();
currentYear.innerHTML = today.getFullYear();

document.getElementById("lastmodified").innerHTML = document.lastModified;

// WEATHER VALUES (STATIC)
const temp = 25; // °C
const windSpeed = 10; // km/h

// WIND CHILL FUNCTION
function calculateWindChill(t, v) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(2);
}

// CONDITIONS CHECK
let windChill = "N/A";

if (temp <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temp, windSpeed) + " °C";
}

document.getElementById("windchill").textContent = windChill;