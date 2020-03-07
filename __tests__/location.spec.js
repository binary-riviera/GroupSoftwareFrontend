const isAtLoc = require('../location.js');

describe("isAtLoc function", () => {
  test("it should detect when at exact location", () => {
    const loc = 0.111111;
    const output = true;
    expect(isAtLoc(loc, loc, loc, loc)).toEqual(output);
  });
});