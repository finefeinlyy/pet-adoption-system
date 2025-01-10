const animals = new Map();
const adopters = new Map();

export const registerAnimal = (id, name, type, breed, gender, age, image) => {
  if (animals.has(id)) {
    throw new Error("ID already exists in the system.");
  }

  if (age < 0 || age >= 30) {
    throw new Error("Invalid age. Please enter an age between 0 and 30.");
  }

  if (gender !== "Male" && gender !== "Female") {
    throw new Error("Invalid gender. Please enter 'Male' or 'Female'.");
  }

  const newAnimal = { id, name, type, breed, gender, age, image, status: "Wait for adopted" };
  animals.set(id, newAnimal);
  return newAnimal;
};

export const registerAdopter = (phoneNumber, userName, email, password, income) => {
  if (adopters.has(phoneNumber)) {
    throw new Error("Phone number already exists in the system.");
  }

  if (income < 25000) {
    throw new Error("Income too low. Minimum required income is 25,000.");
  }

  const newAdopter = { phoneNumber, userName, email, password, income };
  adopters.set(phoneNumber, newAdopter);
  return newAdopter;
};

export const getAnimals = () => Array.from(animals.values());

export const adoptAnimal = (id) => {
    if (!animals.has(id)) {
        console.error("Current animals in system:", Array.from(animals.keys()));
      throw new Error("Animal not found.");
    }
    const animal = animals.get(id);
    if (animal.status === "Adopted") {
      throw new Error("This animal has already been adopted.");
    }
    animal.status = "Adopted"; 
  };