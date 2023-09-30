/* ...existing JS ... */

function toggleAnswer() {
  const answerElement = document.getElementById("answer");
  if (answerElement.style.display === "none") {
    answerElement.style.display = "block";
  } else {
    answerElement.style.display = "none";
  }
}
