
import { Animal } from "./Animal";

export class Adopter {
  constructor(phoneNumber, userName, email, password, income) {
    this.phoneNumber = phoneNumber;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.income = income;
    this.adoptions = new Map();
  }

  create(animal) {
    const adoptionDate = new Date();
    this.adoptions.set(animal.id, { animal, adoptionDate });
  }

  returnAnimal() {
    for (const [id, adoption] of this.adoptions.entries()) {
      const { animal } = adoption;
      console.log(`Pet returned: ${animal.name}`);
      console.log(`Date Adopted: ${adoption.adoptionDate}`);
      animal.updateStatus();
      console.log(`Pet status updated: ${animal.status}`);
      this.adoptions.delete(id);
    }
  }
}