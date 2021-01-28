const Manager = require("../lib/Manager");

jest.mock("../lib/Manager.js");

test("creates a manager object", () => {
  const manager = new Manager();

  expect(manager.officeNumber).toEqual(expect.any(Number));
  //expect(manager.getRole()).toEqual(expect.any(String));

  //console.log(manager.getRole());
});
