import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { firstName } = user;
    const { lastName } = user;
    const { emailAddresses } = user;
    const emailAddress = emailAddresses[0].emailAddress;
    const [formData, setFormData] = useState({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: '',
        email: emailAddress,    
        phoneNumber: '',
        emergencyContact: {
            name: '',
            phone: '',
            relationship: '',
        },
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEmergencyContactChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            emergencyContact: {
                ...prevData.emergencyContact,
                [name]: value,
            },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:5000/api/users', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.status === 200) {
                // Handle successful registration
                console.log('Registration successful!');
                navigate('/dashboard');

            } else {
                // Handle registration failure
                console.error('Registration failed.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
            <form onSubmit={handleSubmit}>
                {/* First Name */}
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>

                {/* Date of Birth */}
                <div className="mb-4">
                    <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-bold mb-2">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={emailAddress}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>

                {/* Emergency Contact */}
                <div className="mb-4">
                    <label htmlFor="emergencyName" className="block text-gray-700 text-sm font-bold mb-2">
                        Emergency Contact Name
                    </label>
                    <input
                        type="text"
                        id="emergencyName"
                        name="name"
                        value={formData.emergencyContact.name}
                        onChange={handleEmergencyContactChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="emergencyPhone" className="block text-gray-700 text-sm font-bold mb-2">
                        Emergency Contact Phone
                    </label>
                    <input
                        type="tel"
                        id="emergencyPhone"
                        name="phone"
                        value={formData.emergencyContact.phone}
                        onChange={handleEmergencyContactChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="emergencyRelationship" className="block text-gray-700 text-sm font-bold mb-2">
                        Emergency Contact Relationship
                    </label>
                    <input
                        type="text"
                        id="emergencyRelationship"
                        name="relationship"
                        value={formData.emergencyContact.relationship}
                        onChange={handleEmergencyContactChange}
                        className="border rounded w-full py-2 px-3"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
