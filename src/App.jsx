import { useState } from 'react';

function App() {
  let [Counter, setcounter] = useState(5);
  function addValue() {
    if (Counter >= 20) {
      setcounter(20);
    } else {
      Counter = Counter + 1;
      setcounter(Counter);
    }
  }
  function removevalue() {
    if (Counter <= 0) {
      setcounter(0);
    } else {
      Counter = Counter - 1;
      setcounter(Counter);
    }
  }
  return (
    <div className="main-container">
      <h1 className="text-center">My 1st react project</h1>
      <h2>Counter : {Counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </div>
  );
}

export default App;
