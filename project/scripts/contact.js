const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Save to localStorage
    localStorage.setItem("contactData", JSON.stringify(formData));

    alert(`Thank you, ${formData.name}! Your message has been saved.`);

    form.reset();
});