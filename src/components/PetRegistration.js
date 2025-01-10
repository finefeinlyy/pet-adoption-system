import React, { useState } from "react";
import { registerAnimal } from "../services/services";
import { useNavigate } from "react-router-dom";

const RegisterAnimal = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    type: "",
    breed: "",
    gender: "",
    age: "",
    image: null, // เพิ่ม field สำหรับเก็บรูปภาพ
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // ดึงไฟล์แรกจาก input
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result }); // เก็บ Base64
    };

    if (file) {
      reader.readAsDataURL(file); // อ่านไฟล์เป็น Base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      registerAnimal(
        formData.id,
        formData.name,
        formData.type,
        formData.breed,
        formData.gender,
        parseInt(formData.age),
        formData.image // ส่งรูปภาพไปกับข้อมูล
      );
      alert("Animal registered successfully!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 font-poppins">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-burgundy mb-6">
          Register Animal
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Input Fields */}
          <div className="mb-4">
            <input
              name="id"
              placeholder="ID"
              value={formData.id}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mustard"
            />
          </div>
          <div className="mb-4">
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mustard"
            />
          </div>
          <div className="mb-4">
            <input
              name="type"
              placeholder="Type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mustard"
            />
          </div>
          <div className="mb-4">
            <input
              name="breed"
              placeholder="Breed"
              value={formData.breed}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mustard"
            />
          </div>
          <div className="mb-4">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mustard"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              name="age"
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mustard"
            />
          </div>

          {/* Upload Image */}
          <div className="mb-4">
            <label htmlFor="image" className="block mb-2 text-sm">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload} // เรียก handleImageUpload
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>

          {/* Image Preview */}
          {formData.image && (
            <div className="mb-4">
              <img
                src={formData.image}
                alt="Preview"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-burgundy text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterAnimal;