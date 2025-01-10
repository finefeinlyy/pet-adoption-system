import React, { useState, useEffect } from "react";
import { getAnimals, adoptAnimal } from "../services/services";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // สำหรับการค้นหา

  // โหลดข้อมูลสัตว์เลี้ยง
  useEffect(() => {
    setAnimals(getAnimals());
  }, []);

  // กรองข้อมูลสัตว์เลี้ยงตามการค้นหา
  const filteredAnimals = animals.filter(
    (animal) =>
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ฟังก์ชันรับอุปการะสัตว์
  const handleAdopt = (id) => {
    try {
      adoptAnimal(id);
      alert(`Animal with ID ${id} has been adopted!`);
      setAnimals(getAnimals()); // โหลดข้อมูลใหม่
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-poppins">
      <h1 className="text-4xl font-bold text-center text-burgundy mb-8">
        Welcome to Pet Adoption System !
      </h1>

      {/* ช่องค้นหา */}
      <div className="flex justify-center mt-8 mb-8">
  <input
    type="text"
    placeholder="Search by name or type..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-3/4 sm:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-mustard"
  />
</div>

<div className="flex justify-center items-center gap-4 mb-8">
  <Link
    to="/register-animal"
    className="bg-mustard text-burgundy px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-transform duration-300"
  >
    Register Animal
  </Link>
  <Link
    to="/register-adopter"
    className="bg-burgundy text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition-transform duration-300"
  >
    Register Adopter
  </Link>
</div>

      {/* ตารางแสดงสัตว์เลี้ยง */}
      <div className="overflow-x-auto mt-8">
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-mustard text-burgundy">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnimals.map((animal, index) => (
              <tr
                key={animal.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                } hover:bg-gray-200 transition`}
              >
                <td className="px-4 py-2">
                  <Link
                    to={`/animal/${animal.id}`}
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    {animal.id}
                  </Link>
                </td>

                {/* แสดงรูปภาพและชื่อสัตว์ */}
                <td className="px-4 py-2 flex items-center space-x-4">
                  <img
                    src={animal.image || "https://via.placeholder.com/50"}
                    alt={animal.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span>{animal.name}</span>
                </td>

                <td className="px-4 py-2">{animal.type}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded ${
                      animal.status === "Adopted"
                        ? "bg-burgundy text-white"
                        : "bg-mustard text-burgundy"
                    }`}
                  >
                    {animal.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleAdopt(animal.id)}
                    className={`px-4 py-2 rounded ${
                      animal.status === "Adopted"
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-burgundy text-white hover:bg-red-600 transition-transform duration-300"
                    }`}
                    disabled={animal.status === "Adopted"}
                  >
                    Adopt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;