import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']; // Sample options

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      <div className="multiselect-dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedOptions.length > 0
            ? selectedOptions.join(', ')
            : 'Select options'}
        </div>
        {isOpen && (
          <div className="dropdown-content">
            {options.map((option, index) => (
              <label key={index} className="option-label">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionToggle(option)}
                />
                {option}
              </label>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
