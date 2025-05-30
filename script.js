document.getElementById("registerForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const response = await fetch('http://localhost:5000/api/user/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  });

  if (response.ok) {
    alert("Registered successfully!");
  } else {
    alert("Error during registration.");
  }
});