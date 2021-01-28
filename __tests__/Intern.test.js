const Intern = require("../lib/Intern");

jest.mock("../lib/Intern.js");

test("creates an intern object", () => {
  const intern = new Intern();

  expect(intern.officeNumber).toEqual(expect.any(Number));
  //expect(intern.getRole()).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));

  console.log(intern);
});
