
import React, {useState} from 'react';
import './App.css';

function App() {

  // hook
  const [count, setCount] = useState(0) // first thing is name of variable that's going to hold that state second is name of function that changes the variable
  //hook
  const [ans, setData] = useState(0)

  function handleClick(event) {
    console.log("you clicked the button. nicely done.")
    console.log(event)

    const requestOptions = {
      method: 'GET'
    }

    fetch('http://localhost:5000/api/getter/', requestOptions) // Make rquest to this endpoint
      .then(response => response.json()) // Not json format when received so turn it into json
      .then(data => setData(data['data_from_backend']))

  }

  return (
    <div className="App">
      <p>response: {ans}</p>
      <button onClick={handleClick}> Click to GET</button> 


      <p>{count}</p>
      <button onClick = {() => setCount(count + 1)}> Add </button> 
      {/* ^ anonymous function that calls set count when button is clicked */}

    </div>
  );
}

export default App;
