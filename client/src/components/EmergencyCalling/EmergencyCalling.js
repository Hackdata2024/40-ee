import React, { useState } from "react";

const EmergencyCalling = () => {
  const [emergencyContact, setEmergencyContact] = useState({
    name: "",
    phone: "",
    relationship: "",
  });
  const [emergencyContacts, setEmergencyContacts] = useState([]);

  const handleInputChange = (e) => {
    setEmergencyContact({
      ...emergencyContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddContact = () => {
    setEmergencyContacts([...emergencyContacts, emergencyContact]);
    setEmergencyContact({ name: "", phone: "", relationship: "" });
  };

  const handleCallContact = (phone) => {
    // Implement your call functionality here
    console.log(`Calling ${phone}...`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full flex">
        <div className="w-1/2 mr-4">
          <h2 className="text-2xl font-semibold mb-6">Emergency Calling</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Contact Name
              </label>
              <input
                id="name"
                name="name"
                value={emergencyContact.name}
                onChange={handleInputChange}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                placeholder=" name..."
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Contact Phone
              </label>
              <input
                id="phone"
                name="phone"
                value={emergencyContact.phone}
                onChange={handleInputChange}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="phone..."
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="relationship"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Relationship
              </label>
              <input
                id="relationship"
                name="relationship"
                value={emergencyContact.relationship}
                onChange={handleInputChange}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="relationship..."
              />
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={handleAddContact}
                className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
              >
                Add Contact
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 ml-4">
          <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
          <div className="max-h-64 overflow-auto">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="mb-2 p-4 border rounded-md flex justify-between items-center"
              >
                <div>
                  <p>
                    <strong>Name:</strong> {contact.name}
                  </p>
                  <p>
                    <strong>Phone:</strong> {contact.phone}
                  </p>
                  <p>
                    <strong>Relationship:</strong> {contact.relationship}
                  </p>
                </div>
                <button
                  onClick={() => handleCallContact(contact.phone)}
                  className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
                >
                  Call
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCalling;
