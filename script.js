/* Updated JS to display the actual program output and expected output */
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
  const programOutputElement = document.getElementById('program-output');
  const resultElement = document.getElementById('result');

  // Simulate the actual output based on the code (this is a simplified example and doesn't run the code)
  if (userCode.includes('pd.DataFrame') && userCode.includes("'Name'") && userCode.includes("'Age'")) {
    programOutputElement.innerHTML = "DataFrame with columns 'Name' and 'Age'";
    resultElement.innerHTML = 'Challenge passed!';
  } else {
    programOutputElement.innerHTML = 'Invalid DataFrame';
    resultElement.innerHTML = 'Challenge failed!';
  }
}
