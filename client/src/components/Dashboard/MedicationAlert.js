import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const MedicationAlert = () => {
  const [medications, setMedications] = useState([]);

  const fetchMedications = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/medications');
      setMedications(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchMedications();
  }, []);


  return (
    <div className="medication-alert flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold mb-4">Medication Alerts</h2>
        <ul className="overflow-auto h-48">
          {medications.map((medication, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <span>
                {medication.name} - Dosage: {medication.dosage}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link to="/medication-alerts">
        <button
          className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
          style={{ marginTop: "-40px" , backgroundColor: "#fe9e0d"}}
        >
          Manage Alerts
        </button>
      </Link>
    </div>
  );
};

export default MedicationAlert;
