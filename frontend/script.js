async function submitCode() {
    const code = document.getElementById('code').value;
    const resultElement = document.getElementById('result');
    
    const response = await fetch('/api/submit_code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
    });
    
    const result = await response.json();
    
    if (response.status === 200) {
        resultElement.innerHTML = 'Correct!';
    } else {
        resultElement.innerHTML = 'Incorrect! ' + (result.error || '');
    }
}
