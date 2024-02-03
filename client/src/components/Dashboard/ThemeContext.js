import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.add(theme);
    document.documentElement.classList.remove(
      theme === "light" ? "dark" : "light"
    );

    // Set the CSS variables for the new theme
    if (theme === "light") {
      document.documentElement.style.setProperty("--bg-color", "#ffffff"); // Light background color
      document.documentElement.style.setProperty("--text-color", "#000000"); // Light text color
    } else {
      document.documentElement.style.setProperty("--bg-color", "#000000"); // Dark background color
      document.documentElement.style.setProperty("--text-color", "#ffffff"); // Dark text color
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
