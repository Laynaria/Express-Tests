const fs = require("node:fs");
const { browse, read } = require("../controllers/wildersController");

describe("wildersController tests", () => {
  it("wildersController.js file exist", () => {
    expect(
      fs.existsSync(`${__dirname}/../controllers/wildersController.js`)
    ).toBe(true);
  });

  it("has a browse function", () => {
    expect(typeof browse).toBe("function");
  });

  it("has a read function", () => {
    expect(typeof read).toBe("function");
  });
});
