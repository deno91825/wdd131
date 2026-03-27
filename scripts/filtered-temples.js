// Footer year & last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// Hamburger menu toggle
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("open");
  navigation.classList.toggle("active");
});

// Temple data
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
    location: "Kensington, Maryland, United States",
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
    location:"Highway to Masaya Managua",
    dedicated:"26 November 2022",
    area:2323,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/managua-nicaragua-temple/managua-nicaragua-temple-69285.jpg"
  },
  {
    templeName: "Manila Philippines",
    location: "Quezon City, Metro Manila Philippines",
    dedicated: "25 August 1982",
    area: 2479,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-44348.jpg"
  }
];

// Function to create temple cards
function displayTemples(templeArray) {
    const gallery = document.querySelector(".temple-gallery");
    gallery.innerHTML = "";
    templeArray.forEach(temple => {
            // inside displayTemples()
    const figure = document.createElement("figure");

    // Create caption first
    const caption = document.createElement("figcaption");
    caption.innerHTML = `
        <strong>${temple.templeName}</strong><br>
        ${temple.location}<br>
        Dedicated: ${temple.dedicated}<br>
        Area: ${temple.area.toLocaleString()} sq ft
    `;
    caption.classList.add("temple-caption"); // optional for styling

    // Then image
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    figure.appendChild(caption);
    figure.appendChild(img);
    gallery.appendChild(figure);
    });
}

// Initial display
displayTemples(temples);

// Navigation filters
document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const filter = link.textContent.toLowerCase();
        let filteredTemples = temples;

        if(filter === "old") {
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        } else if(filter === "new") {
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        } else if(filter === "large") {
            filteredTemples = temples.filter(t => t.area > 90000);
        } else if(filter === "small") {
            filteredTemples = temples.filter(t => t.area < 10000);
        }

        displayTemples(filteredTemples);
    });
});