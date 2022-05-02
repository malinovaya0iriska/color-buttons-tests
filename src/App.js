import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div >
      <button style={{ backgroundColor: buttonColor, color: '#fff' }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}>
        Change to {newButtonColor}
      </button>
      <input type="checkbox" 
      id="disable-button"
      defaulValue={disabled}
      area-checked={disabled}
      onChange={(e)=>setDisabled(e.target.checked)}/>
      <label htmlFor="disable-button">
        Disable button
      </label>
    </div>
  );
}

export default App;