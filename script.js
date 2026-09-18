const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    status.textContent = "Please fill in all fields.";
    return;
  }

  status.textContent =
    `Thanks, ${name}! Your message has been received.`;

  form.reset();

});