import React from 'react';
import './App.css';

function App() {
  const handleButtonClick = async () => {
    console.log('Button was clicked');

    try {
      // Send a POST request to your Python backend
      const response = await fetch('http://localhost:5000/trigger-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: 'run' }), // Send a simple JSON payload
      });

      if (response.ok) {
        console.log('Task triggered successfully!');
      } else {
        console.error('Failed to trigger the task');
      }
    } catch (error) {
      console.error('Error triggering task:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Trigger App</h1>
        <button onClick={handleButtonClick}>Trigger Task</button>
      </header>
    </div>
  );
}

export default App;
