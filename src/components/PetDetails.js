import React, { useState } from "react";
import { findAnimals } from "../services/services";

const PetDetails = ({ id }) => {
  const [animal, setAnimal] = useState(null);

  React.useEffect(() => {
    const animals = Array.from(findAnimals());
    const selectedAnimal = animals.find((a) => a.id === id);
    setAnimal(selectedAnimal);
  }, [id]);

  if (!animal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Pet Details</h2>
      <p>
        <strong>Name:</strong> {animal.name}
      </p>
      <p>
        <strong>Type:</strong> {animal.type}
      </p>
      <p>
        <strong>Breed:</strong> {animal.breed}
      </p>
      <p>
        <strong>Gender:</strong> {animal.gender}
      </p>
      <p>
        <strong>Age:</strong> {animal.age}
      </p>
      <p>
        <strong>Status:</strong> {animal.status}
      </p>
    </div>
  );
};

export default PetDetails;