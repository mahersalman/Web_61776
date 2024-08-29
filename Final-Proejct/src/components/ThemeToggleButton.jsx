// ThemeToggleButton.jsx
import React from 'react';
import { ReactSVG } from 'react-svg';
import SunSVG from '../icon/Sun.svg';
import MoonSVG from '../icon/Moon.svg';
import { ThemeToggleButtonStyles } from '../styles/ThemeToggleButtonStyles'; // Import the styles

/*
componeent to toggle the dark and light mode using toggle button
 */
const ThemeToggleButton = () => {
  // Function to handle the theme toggle
  const handleToggle = () => {
    // Retrieve the current theme from localStorage, defaulting to 'light' if not found
    const currentTheme = localStorage.getItem('theme') || 'light';
    // Determine the new theme based on the current theme
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // Save the new theme to localStorage
    localStorage.setItem('theme', newTheme);
    // Toggle the 'dark' class on the body element based on the new theme
    document.body.classList.toggle('dark', newTheme === 'dark');
  };

  // useEffect hook to apply the saved theme when the component mounts
  React.useEffect(() => {
    // Retrieve the saved theme from localStorage, defaulting to 'light' if not found
    const savedTheme = localStorage.getItem('theme') || 'light';
    // If the saved theme is 'dark', add the 'dark' class to the body element
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className={ThemeToggleButtonStyles.container}>
      <input
        className={ThemeToggleButtonStyles.input}
        type='checkbox'
        id='darkmode-toggle'
        defaultChecked={localStorage.getItem('theme') === 'dark'}
        onChange={handleToggle} // Call handleToggle on change
      />
      <label
        className={ThemeToggleButtonStyles.label}
        htmlFor='darkmode-toggle' // Associates the label with the input
      >
        <span className={ThemeToggleButtonStyles.slider} />
        <ReactSVG
          src={SunSVG}
          className={ThemeToggleButtonStyles.sunIcon}
        />
        <ReactSVG
          src={MoonSVG}
          className={ThemeToggleButtonStyles.moonIcon}
        />
      </label>
    </div>
  );
};

export default ThemeToggleButton;