const fs = require("node:fs");

describe("Index tests", () => {
  it("Index.js file exist", () => {
    expect(fs.existsSync(`${__dirname}/../index.js`)).toBe(true);
  });
});
