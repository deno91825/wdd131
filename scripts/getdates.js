const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (lastModified) {
  lastModified.textContent = document.lastModified;
}