// client/src/components/MedicationAlerts/MedicationAlerts.js
import React, { useState } from 'react';

const MedicationAlerts = () => {
    // Dummy data for medication alerts (replace with your actual data)
    const dummyMedicationAlerts = [
        { id: 1, name: 'Medication 1', time: '08:00 AM' },
        { id: 2, name: 'Medication 2', time: '12:30 PM' },
        { id: 3, name: 'Medication 3', time: '06:00 PM' },
    ];

    const [medicationAlerts, setMedicationAlerts] = useState(dummyMedicationAlerts);

    return (
        <div className="min-h-screen p-8">
            <h2 className="text-3xl font-semibold mb-6">Medication Alerts</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {medicationAlerts.map((alert) => (
                    <div
                        key={alert.id}
                        className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
                    >
                        <h3 className="text-lg font-semibold mb-2">{alert.name}</h3>
                        <p className="text-gray-600">Time: {alert.time}</p>
                        {/* Add more information as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MedicationAlerts;
