document.getElementById("translate-btn").addEventListener("click", () => {
  const textInput = document.getElementById("text-input").value;
  const localeInput = document.getElementById("locale-input").value;
  fetch("app.heroku/api/translate", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      text: textInput,
      locale: localeInput
    })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("output-container").innerHTML = JSON.stringify({original_text: data.text, translated_text: data.translation});
    })
    .catch(err => {
      alert(err)
    })
})