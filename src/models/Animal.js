
export class Animal {
    constructor(id, name, type, breed, gender, age) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.breed = breed;
      this.gender = gender;
      this.age = age;
      this.status = "Wait for adopted";
    }
  
    updateStatus() {
      if (this.status === "Wait for adopted") {
        this.status = "Adopted";
      } else if (this.status === "Adopted") {
        this.status = "Wait for adopted";
      }
      return this.status;
    }
  
    getDetail() {
      return {
        name: this.name,
        type: this.type,
        breed: this.breed,
        gender: this.gender,
        age: this.age,
        id: this.id,
        status: this.status,
      };
    }
  }