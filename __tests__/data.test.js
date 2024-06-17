const fs = require("node:fs");

describe("Json tests", () => {
  it("data.json file exist", () => {
    expect(fs.existsSync(`${__dirname}/../data.json`)).toBe(true);
  });
});
