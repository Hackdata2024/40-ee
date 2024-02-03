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
    console.log(`Calling ${phone}...`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Emergency Contacts
            </h2>
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
                  className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Name..."
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
                  className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone..."
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
                  className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Relationship..."
                />
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={handleAddContact}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Add Contact
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Contacts List
            </h3>
            <div className="overflow-auto max-h-96 bg-gray-50 rounded-lg p-4">
              {emergencyContacts.map((contact, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 bg-white border rounded-lg flex justify-between items-center shadow-sm"
                >
                  <div>
                    <p className="font-semibold text-gray-800">
                      Name: {contact.name}
                    </p>
                    <p className="text-gray-600">Phone: {contact.phone}</p>
                    <p className="text-gray-600">
                      Relationship: {contact.relationship}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCallContact(contact.phone)}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    Call
                  </button>
                </div>
              ))}
              {emergencyContacts.length === 0 && (
                <p className="text-center text-gray-500">
                  No contacts added yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCalling;
