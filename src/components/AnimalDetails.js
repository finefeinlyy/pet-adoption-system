import React from "react";
import { useParams } from "react-router-dom";
import { getAnimals } from "../services/services";

const AnimalDetails = () => {
  const { id } = useParams(); // ดึง ID จาก URL
  const animal = getAnimals().find((a) => a.id === id); // ค้นหาสัตว์เลี้ยงที่ตรงกับ ID

  if (!animal) {
    return <div className="p-6 text-center">Animal not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-poppins">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-burgundy mb-4">{animal.name}</h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <p><strong>ID:</strong> {animal.id}</p>
            <p><strong>Type:</strong> {animal.type}</p>
            <p><strong>Breed:</strong> {animal.breed}</p>
            <p><strong>Gender:</strong> {animal.gender}</p>
            <p><strong>Age:</strong> {animal.age} years</p>
            <p><strong>Status:</strong> {animal.status}</p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src={animal.image || "https://via.placeholder.com/150"} // Placeholder image
              alt={animal.name}
              className="rounded-lg shadow-md w-64 h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;