window.onload = function() {
  document.getElementById("editor").contentEditable = true;
};

function submitCode() {
  const userCode = document.getElementById("editor").innerText;
  
  // Simulate code execution for the specific challenge
  if (userCode.includes("pd.DataFrame") && userCode.includes("'Name'") && userCode.includes("'Age'")) {
    document.getElementById("output").innerText = "Output: Challenge passed!";
    document.getElementById("answer").innerText = "Answer: You successfully created a DataFrame!";
  } else {
    document.getElementById("output").innerText = "Output: Challenge failed!";
    document.getElementById("answer").innerText = "Answer: Please follow the scenario and hints to complete the challenge.";
  }
}
