import React from "react";
import Header from "./Header";
import TaskReminder from "./TaskReminder";
import MedicationAlert from "./MedicationAlert";
import EmergencyCall from "./EmergencyCall";
import NewsComponent from "./PositiveNewsHeadline";
import "./styles.css"; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <Header />
      {/* You can place the ThemeToggle wherever you prefer */}
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        <div className="w-full md:w-1/2 space-y-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <TaskReminder />
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <MedicationAlert />
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <EmergencyCall />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[calc(100vh-4rem)] overflow-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
            <NewsComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
