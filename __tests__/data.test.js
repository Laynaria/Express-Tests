const fs = require("node:fs");

const { data } = require("../data.json");

describe("Json tests", () => {
  it("data.json file exist", () => {
    expect(fs.existsSync(`${__dirname}/../data.json`)).toBe(true);
  });

  it("has wilders data", () => {
    expect(data).toStrictEqual([
      { id: 1, name: "Benoît" },
      { id: 2, name: "Anthony" },
      { id: 3, name: "Ayoub" },
      { id: 4, name: "Yavuuz" },
    ]);
  });

  it("has an Ayoub wilder", () => {
    expect(data[2]).toStrictEqual({ id: 3, name: "Ayoub" });
  });

  it("has an a Benoît wilder", () => {
    expect(data[0]).toStrictEqual({ id: 1, name: "Benoît" });
  });
});
