import React from "react";

const MedicationAlert = () => {
  const medications = ["8:00 AM - Blood Pressure Pill", "1:00 PM - Vitamin D"];

  return (
    <div className="medication-alert flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Medication Alerts
        </h2>
        <ul className="overflow-auto h-48">
          {medications.map((medication, index) => (
            <li key={index} className="mb-2 text-gray-600">
              {medication}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
        style={{ marginTop: "-40px" }}
      >
        + Add Alert
      </button>
    </div>
  );
};

export default MedicationAlert;
