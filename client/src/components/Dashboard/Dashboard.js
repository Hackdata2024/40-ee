import React from "react";
import Header from "./Header";
import TaskReminder from "./TaskReminder";
import MedicationAlert from "./MedicationAlert";
import EmergencyCall from "./EmergencyCall";
import NewsComponent from "./PositiveNewsHeadline";
import { useTheme } from "./ThemeContext"; // Import useTheme

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme(); // Use the useTheme hook

  return (
    <div
      className={`w-full h-full ${
        theme === "light" ? "bg-light" : "bg-dark dark:bg-dark"
      }`}
    >
      <div className="mb-4">
        <Header toggleTheme={toggleTheme} /> {/* Set the header */}
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-4 h-full">
        <div className="flex flex-col w-full md:w-1/2 space-y-4 ml-8 h-full">
          <div className="bg dark:bg-dark rounded-lg shadow-lg overflow-hidden h-full">
            <TaskReminder />
          </div>
          <div className="bg dark:bg-dark rounded-lg shadow-lg overflow-hidden h-full">
            <MedicationAlert />
          </div>
          <div className="bg dark:bg-dark rounded-lg shadow-lg overflow-hidden h-full">
            <EmergencyCall />
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 h-[calc(100vh-4rem)] overflow-auto ml-auto">
          <div className="bg-white dark:bg-dark rounded-lg shadow-lg overflow-hidden h-full">
            <NewsComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
