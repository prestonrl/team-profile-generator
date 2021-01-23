class Employee {
  constructor(name = "") {
    this.name = name;
    this.id = "";
    this.email = "";
  }

  getName() {
    return `${this.name}`;
  }

  getId() {
    return `${this.id}`;
  }

  getEmail() {
    return `${this.email}`;
  }
}

module.exports = Employee;
