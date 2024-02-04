import React from "react";
import { Link } from "react-router-dom";

const EmergencyCall = () => {
  const emergencyContacts = [
    { name: "Ambulance", phone: "112" },
    { name: "Daughter", phone: "555-1234" },
    { name: "Doctor", phone: "555-9876" },
    // Add more contacts here
  ];

  return (
    <div className="emergency-call">
      <div>
        <h2 className="text-lg font-semibold mb-4">
          Emergency Call & Contacts
        </h2>
        {emergencyContacts.map((contact, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <span>{contact.name}</span>
            <a href="tel:112" className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition-colors text-sm">
              Call {contact.phone}
            </a>
          </div>
        ))}
      </div>
      <Link to="/emergency-calling">
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full" style={{ backgroundColor: "#fe9e0d" }}>
          + Add Emergency Contact
        </button>
      </Link>
    </div>
  );
};

export default EmergencyCall;
