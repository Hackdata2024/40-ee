import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext"; // Import useTheme hook
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import { useUser } from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
  // Create a state for currentTime
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit", // Include seconds in the time
      hour12: true, // Use 12-hour format
    })
  );

  const { user } = useUser();
  const { fullName } = user;
  const navigate = useNavigate(); // Initialize useNavigate
  const { signOut } = useClerk(); // Initialize useClerk

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long", // e.g. Thursday
    year: "numeric", // e.g. 2022
    month: "long", // e.g. January
    day: "numeric", // e.g. 1
  });

  const { theme, setTheme } = useTheme(); // Use the useTheme hook

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Toggle the theme
  };

  const handleLogout = async () => {
    await signOut(); // Sign out the user
    navigate("/"); // Redirect to the root URL after logout
  };

  useEffect(() => {
    // Update the time every second
    const timerId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <div
      className={`flex justify-between items-center p-4 rounded-md shadow ${
        theme === "light" ? "bg-light" : "bg-dark"
      }`}
    >
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold">Hi {fullName}</h1>
        <h3 className="text-lg">{currentDate}</h3>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="text-xl font-semibold">{currentTime}</h2>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="focus:outline-none">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button
            onClick={handleLogout}
            className="text-white bg-red-500 hover:bg-red-700 py-1 px-2 rounded transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
