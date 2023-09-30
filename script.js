/* Updated JS for final functionality */
function toggleAnswer() {
  const answerElement = document.getElementById('answer');
  if (answerElement.style.display === 'none') {
    answerElement.style.display = 'block';
  } else {
    answerElement.style.display = 'none';
  }
}

function submitCode() {
  const userCode = document.getElementById('editor').value;
  const outputElement = document.getElementById('output');
  if (userCode.includes('pd.DataFrame') && userCode.includes("'Name'") && userCode.includes("'Age'")) {
    outputElement.innerHTML = 'Challenge passed!';
  } else {
    outputElement.innerHTML = 'Challenge failed!';
  }
}
