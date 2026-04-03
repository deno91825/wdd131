
const products = [
  { id: "p1", name: "Smartphone" },
  { id: "p2", name: "Laptop" },
  { id: "p3", name: "Tablet" },
  { id: "p4", name: "Smartwatch" },
  { id: "p5", name: "Headphones" }
];

const select = document.querySelector("#product");

if (select) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
  });const products = [
  { id: "p1", name: "Smartphone" },
  { id: "p2", name: "Laptop" },
  { id: "p3", name: "Tablet" },
  { id: "p4", name: "Smartwatch" },
  { id: "p5", name: "Headphones" }
];

const select = document.querySelector("#product");

if (select) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id; 
    option.textContent = product.name;
    select.appendChild(option);
  });
}
}


let count = localStorage.getItem("reviewCount") || 0;
count++;

localStorage.setItem("reviewCount", count);

document.getElementById("counter").textContent = count;