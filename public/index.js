document.getElementById("translate-btn").addEventListener("click", () => {
  const textInput = document.getElementById("text-input").value;
  const localeInput = document.getElementById("locale-input").value;
  fetch("https://chunk-english-translator-96133efd5b65.herokuapp.com/api/translate", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      text: textInput,
      locale: localeInput
    })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("output-container").innerHTML = data.translation.replace(/"/g, "");
    })
    .catch(err => {
      alert(err)
    })
})