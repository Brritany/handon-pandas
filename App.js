import React, { useState } from 'react';
import * as pd from 'pandas-js';

function App() {
  const [code, setCode] = useState("");

  const checkCode = () => {
    try {
      // Execute and validate user's code
      eval(code);
      // Use pandas-js or danfo.js to validate the code
      console.log("Success");
    } catch (e) {
      console.log("Error", e.message);
    }
  };

  return (
    <div>
      <textarea onChange={(e) => setCode(e.target.value)}></textarea>
      <button onClick={checkCode}>Check</button>
    </div>
  );
}

export default App;
