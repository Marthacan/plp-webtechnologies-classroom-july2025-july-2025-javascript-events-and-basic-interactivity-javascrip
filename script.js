// Part 1: Event Handling

document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "🎉 You clicked the button!";
});


// Part 2: Interactive Elements


// Light/Dark mode
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
document.getElementById("increment").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  document.getElementById("counter").textContent = count;
});

// FAQ Toggle
document.querySelectorAll(".question").forEach(q => {
  q.addEventListener("click", () => {
    let answer = q.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});


// Part 3: Form Validation

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop form submission
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("formMessage");

  // Simple validation
  if (name === "" || email === "" || password === "") {
    message.textContent = "❌ All fields are required!";
    message.className = "error";
    return;
  }

  // Email regex check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "❌ Enter a valid email address!";
    message.className = "error";
    return;
  }

  // Password strength check
  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters!";
    message.className = "error";
    return;
  }

  message.textContent = "✅ Form submitted successfully!";
  message.className = "success";
});