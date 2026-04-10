const aboutData = [
    {
        title: "Mission",
        text: "Empowering BYU Pathway students in Uganda through education, mentorship, and community support.",
        image: "images/mission.webp"
    },
    {
        title: "Vision",
        text: "A future where every student has access to quality education and can transform their community.",
        image: "images/vision.jpg"
    },
    {
        title: "History",
        text: "Founded in 2023 to support students facing financial and educational challenges.",
        image: "images/vision.webp"
    },
    {
        title: "Founder",
        text: "Abraham Leoxingin, a passionate leader committed to uplifting students through education.",
        image: "images/abraham.webp"
    }
];

const container = document.getElementById("about-cards");

aboutData.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("about-card");

    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="card-overlay">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </div>
    `;

    container.appendChild(card);
});