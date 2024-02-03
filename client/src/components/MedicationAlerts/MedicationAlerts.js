import React, { useState, useEffect } from "react";
import axios from "axios";


const useMedicationData = () => {
  const [medications, setMedications] = useState([]);
  const fetchMedication = async () => {
    const { data } = await axios.get('http://localhost:5000/api/medications');
    setMedications(data);
  }

  useEffect(() => {
    fetchMedication();
  }, []);

  return medications;
};

const MedicationAlert = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMedication, setNewMedication] = useState({
    name: "",
    dosage: "",
    endDate: "",
    intakeTimes: [],
    daysOfWeek: [],
  });
  const [newTime, setNewTime] = useState("");

  const medications = useMedicationData(); // Fetch medication data using the custom hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMedication({ ...newMedication, [name]: value });
  };

  const handleAddMedication = () => {
    medications.push({
      user_id: "61453c96e21fd8ec8c3b23ba",
      ...newMedication,
      intakeTimes: [...newMedication.intakeTimes, newTime],
    });
    setShowAddModal(false);
    setNewMedication({
      name: "",
      dosage: "",
      endDate: "",
      intakeTimes: [],
      daysOfWeek: [],
    });
  };

  const handleAddTime = () => {
    if (newTime.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
      setNewMedication({
        ...newMedication,
        intakeTimes: [...newMedication.intakeTimes, newTime],
      });
      setNewTime("");
    } else {
      alert("Please enter a valid time in the format HH:MM.");
    }
  };

  const handleDayOfWeekChange = (e, day) => {
    const { checked } = e.target;
    if (checked) {
      setNewMedication({
        ...newMedication,
        daysOfWeek: [...newMedication.daysOfWeek, day],
      });
    } else {
      setNewMedication({
        ...newMedication,
        daysOfWeek: newMedication.daysOfWeek.filter((d) => d !== day),
      });
    }
  };

  const getNextIntakeTime = (intakeTimes) => {
    const currentTime = new Date();
    for (let time of intakeTimes) {
      const [hours, minutes] = time.split(":");
      const intakeDateTime = new Date();
      intakeDateTime.setHours(hours);
      intakeDateTime.setMinutes(minutes);
      if (intakeDateTime > currentTime) {
        return time;
      }
    }
    return intakeTimes[0];
  };

  const calculateTimeLeft = (nextTime) => {
    const currentTime = new Date();
    const [hours, minutes] = nextTime.split(":");
    const nextDateTime = new Date();
    nextDateTime.setHours(hours);
    nextDateTime.setMinutes(minutes);
    if (nextDateTime < currentTime) {
      nextDateTime.setDate(nextDateTime.getDate() + 1);
    }
    const timeDifference = nextDateTime - currentTime;
    const hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesLeft = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    return `${hoursLeft} hours and ${minutesLeft} minutes`;
  };

  return (
    <div className="p-4 min-h-screen bg-gradient-to-b from-blue-200 to-blue-400">
      <h2 className="text-2xl font-bold mb-4">Medication Alert</h2>
      <button
        onClick={() => setShowAddModal(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition-colors"
      >
        Add Medication
      </button>
      {showAddModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/2">
            <h2 className="text-lg font-bold mb-4">Add New Medication</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={newMedication.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dosage"
              >
                Dosage
              </label>
              <input
                type="text"
                name="dosage"
                value={newMedication.dosage}
                onChange={handleInputChange}
                placeholder="Dosage"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="endDate"
              >
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={newMedication.endDate}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="text"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                placeholder="Intake Time (HH:MM)"
                className="shadow appearance-none border rounded flex-grow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              />
              <button
                onClick={handleAddTime}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Add Time
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Intake Times
              </label>
              <div className="flex flex-wrap">
                {newMedication.intakeTimes.map((time, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Days of the Week
              </label>
              <div className="flex flex-wrap">
                {[
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ].map((day) => (
                  <label
                    key={day}
                    className="inline-flex items-center mr-4 mb-2"
                  >
                    <input
                      type="checkbox"
                      name="daysOfWeek"
                      value={day}
                      checked={newMedication.daysOfWeek.includes(day)}
                      onChange={(e) => handleDayOfWeekChange(e, day)}
                      className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">{day}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              onClick={handleAddMedication}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors mt-4"
            >
              Add Medication
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-wrap -m-4">
        {medications.map((medication, index) => (
          <div key={index} className="p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold mb-2">{medication.name}</h3>
              <p className="text-gray-600 mb-2">Dosage: {medication.dosage}</p>
              <p className="text-gray-600 mb-2">
                Next Dose:{" "}
                {calculateTimeLeft(getNextIntakeTime(medication.intakeTimes))}
              </p>
              <p className="text-gray-600 mb-2">
                End Date: {new Date(medication.endDate).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                Intake Times: {medication.intakeTimes.join(", ")}
              </p>
              <p className="text-gray-600">
                Days of the Week: {medication.daysOfWeek.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default MedicationAlert;
