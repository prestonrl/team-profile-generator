const Employee = require('../lib/Employee');
jest.mock('../lib/Employee.js');


test('creates an Employee', () => {
    const newEmployee = new Employee();

    expect(newEmployee.name).toEqual(expect.any(String));
    expect(newEmployee.id).toEqual(expect.any(Number));
    expect(newEmployee.email).toEqual(expect.any(String));
});