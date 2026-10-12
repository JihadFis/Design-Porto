// ============================================================
// script.js - Contact form only (the rest of the page is static)
//  - Event handling   : submit and input listeners
//  - Form validation  : name, email and message checks
//  - DOM manipulation : error text, red borders, "message sent" notice
// ============================================================

const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");

// Show (or clear) the error for one field. Returns true when the field is valid.
function setError(fieldId, message) {
  document.getElementById(fieldId + "Error").textContent = message;
  document.getElementById(fieldId).classList.toggle("invalid", message !== "");
  return message === "";
}

// Event handling: runs when the Send button is pressed
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const okName = setError("name", name.length < 2 ? "Please enter your name (min. 2 characters)." : "");
  const okEmail = setError("email", !emailPattern.test(email) ? "Please enter a valid email address." : "");
  const okMessage = setError("message", message.length < 10 ? "Message must be at least 10 characters." : "");

  if (okName && okEmail && okMessage) {
    // "Email sent" trigger
    success.textContent = "Message sent! Thanks, " + name + ".";
    success.hidden = false;
    form.reset();
  } else {
    success.hidden = true;
  }
});

// Event handling: clear a field's error as soon as the user edits it
form.querySelectorAll("input, textarea").forEach(function (field) {
  field.addEventListener("input", function () {
    setError(field.id, "");
    success.hidden = true;
  });
});
