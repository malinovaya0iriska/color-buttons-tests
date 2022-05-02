import './App.css';
import { useState } from 'react';

export const replaceCamelCaseWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  return (
    <div >
      <button style={{ backgroundColor:disabled ? 'gray' : buttonColor, color: '#fff' }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}>
        Change to {replaceCamelCaseWithSpaces(newButtonColor)}
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