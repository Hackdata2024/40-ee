import React, { useState, useEffect } from "react";
import styles from "./styles.css";

const Header = () => {
  // Create a state for currentTime
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit", // Include seconds in the time
    })
  );

  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    // Update the time every second
    const timerId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <div
      className={`${styles.header} flex justify-between items-center p-4 rounded-md shadow`}
    >
      <h1 className="text-2xl font-bold">Hi Mr. John</h1>
      <h2 className="text-xl font-semibold">{currentTime}</h2>
      <h3 className="text-lg">{currentDate}</h3>
    </div>
  );
};

export default Header;
