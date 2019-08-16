import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  /**
   * Determine if the checkbox should be checked base on the content
   * of the localStorage item "theme"
   */
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);

  /**
   * Everytime checked changes, update the property data-theme in the
   * HTML so it uses the theme we have in localStorage
   */
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  /**
   * Update the state of checked and the content of our theme object
   * in localStorage based on the checkbox toggle
   */
  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");

      setChecked(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click the switch to toggle themes</p>
        <label>
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => toggleThemeChange()}
          />
        </label>
      </header>
    </div>
  );
}

export default App;
