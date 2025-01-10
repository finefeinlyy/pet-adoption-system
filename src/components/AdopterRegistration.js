import React, { useState } from "react";
import { registerAdopter } from "../services/services";
import { useNavigate } from "react-router-dom";

const RegisterAdopter = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    userName: "",
    email: "",
    password: "",
    income: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      registerAdopter(
        formData.phoneNumber,
        formData.userName,
        formData.email,
        formData.password,
        parseFloat(formData.income)
      );
      alert("Adopter registered successfully!");
      navigate("/"); // กลับไปหน้า Dashboard
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center font-poppins">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-burgundy mb-6">
          Register Adopter
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mustard"
            />
          </div>
          <div className="mb-4">
            <input
              name="userName"
              placeholder="Name"
              value={formData.userName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mustard"
            />
          </div>
          <div className="mb-4">
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mustard"
            />
          </div>
          <div className="mb-4">
            <input
              name="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mustard"
            />
          </div>
          <div className="mb-4">
            <input
              name="income"
              placeholder="Income"
              type="number"
              value={formData.income}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mustard"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-burgundy text-white px-4 py-2 rounded hover:bg-red-600 hover:scale-105 transition-transform duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterAdopter;