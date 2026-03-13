const currentYear = document.querySelector("#currentyear");
const today = new Date();
currentYear.innerHTML = today.getFullYear();

document.getElementById("lastmodified").innerHTML = document.lastModified;


const hamButton = document.querySelector("#menu");

// Select the navigation menu
const navigation = document.querySelector(".navigation");
hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("open");
  navigation.classList.toggle("active"); // add an "active" class
});