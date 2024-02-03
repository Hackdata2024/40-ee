// client/src/components/EmergencyCalling/EmergencyCalling.js
import React, { useState } from 'react';

const EmergencyCalling = () => {
    const [emergencyMessage, setEmergencyMessage] = useState('');

    const handleCallEmergency = () => {
        // Add your logic to call emergency services or notify contacts
        console.log('Emergency call initiated with message:', emergencyMessage);
        // Reset the message after calling
        setEmergencyMessage('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-6">Emergency Calling</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="emergencyMessage" className="block text-gray-700 text-sm font-semibold mb-2">
                            Emergency Message
                        </label>
                        <textarea
                            id="emergencyMessage"
                            name="emergencyMessage"
                            value={emergencyMessage}
                            onChange={(e) => setEmergencyMessage(e.target.value)}
                            rows="4"
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Type your emergency message..."
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={handleCallEmergency}
                            className="bg-red-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-red-600"
                        >
                            Call Emergency
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmergencyCalling;
