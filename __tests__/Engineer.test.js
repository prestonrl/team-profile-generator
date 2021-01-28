const Engineer = require('../lib/Engineer.js');

jest.mock('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer();
    console.log(Engineer);

    //expect(engineer.getRole()).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});