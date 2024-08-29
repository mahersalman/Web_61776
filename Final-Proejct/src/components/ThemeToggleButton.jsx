// ThemeToggleButton.jsx
import React from 'react';
import { ReactSVG } from 'react-svg';
import SunSVG from '../icon/Sun.svg';
import MoonSVG from '../icon/Moon.svg';
import { ThemeToggleButtonStyles } from '../styles/ThemeToggleButtonStyles'; // Import the styles

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
    if (newTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  // useEffect hook to apply the saved theme when the component mounts
  React.useEffect(() => {
    // Retrieve the saved theme from localStorage, defaulting to 'light' if not found
    const savedTheme = localStorage.getItem('theme') || 'light';
    // Apply the saved theme on initial render
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []); // Empty dependency array means this effect runs once on mount

  // Determine if the theme is currently dark
  const isDarkMode = localStorage.getItem('theme') === 'dark';

  return (
    <div className={ThemeToggleButtonStyles.container}>
      <input
        className={ThemeToggleButtonStyles.input}
        type='checkbox'
        id='darkmode-toggle'
        checked={isDarkMode} // Ensure the checkbox reflects the current theme
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
