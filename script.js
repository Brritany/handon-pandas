window.onload = function() {
  document.getElementById("editor").contentEditable = true;
};

function submitCode() {
  const userCode = document.getElementById("editor").innerText;

  // Simulate code execution
  if (userCode.trim() === "import pandas as pd") {
    document.getElementById("output").innerText = "Challenge passed!";
  } else {
    document.getElementById("output").innerText = "Challenge failed!";
  }
}
