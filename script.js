function pickMood(mood) {
  document.getElementById("result").innerText =
    "Your mood is: " + mood;
}

function validateForm() {
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  if (name === "" || message === "") {
    document.getElementById("feedback").innerText =
      "❌ Fadlan buuxi dhammaan meelaha!";
    return false;
  }

  document.getElementById("feedback").innerText =
    "✅ Mahadsanid! Fariinta waa la diray.";
  return false;
}