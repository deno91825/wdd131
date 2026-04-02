// Footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// Menu toggle
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("open");
  navigation.classList.toggle("active");
});

// Temple Data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Maryland, USA",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName:"Managua Nicaragua",
    location:"Managua, Nicaragua",
    dedicated:"26 November 2022",
    area:2323,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-69078.jpg"
  },
  {
    templeName: "Manila Philippines",
    location: "Manila, Philippines",
    dedicated: "25 August 1982",
    area: 2479,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-69095.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Utah, USA",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-69075.jpg"
  }
];

// Extract year correctly
function getYear(dateString) {
  const match = dateString.match(/\d{4}/);
  return match ? parseInt(match[0]) : 0;
}

// Display function
function displayTemples(list) {
  const gallery = document.querySelector(".temple-gallery");
  gallery.innerHTML = "";

  list.forEach(temple => {
    const figure = document.createElement("figure");

    const caption = document.createElement("figcaption");
    caption.classList.add("temple-caption");
    caption.innerHTML = `
      <strong>${temple.templeName}</strong><br>
      ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area.toLocaleString()} sq ft
    `;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    figure.appendChild(caption);
    figure.appendChild(img);
    gallery.appendChild(figure);
  });
}

// Initial load
displayTemples(temples);

// Filters
document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = link.textContent.toLowerCase();
    let result = temples;

    if (filter === "old") {
      result = temples.filter(t => getYear(t.dedicated) < 1900);
    } 
    else if (filter === "new") {
      result = temples.filter(t => getYear(t.dedicated) > 2000);
    } 
    else if (filter === "large") {
      result = temples.filter(t => t.area > 90000);
    } 
    else if (filter === "small") {
      result = temples.filter(t => t.area < 10000);
    }

    displayTemples(result);

    navigation.classList.remove("active");
    hamButton.classList.remove("open");
  });
});