// Image slider
let current = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next-slide");

if (nextBtn && slides.length > 0) {
  nextBtn.addEventListener("click", () => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  });
}

// Contact form validation
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
    } else if (!email.includes("@")) {
      formMessage.textContent = "Please enter a valid email.";
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "green";
      form.reset();
    }
  });
}
