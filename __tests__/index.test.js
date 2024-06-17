const fs = require("node:fs");
const supertest = require("supertest");
const { server } = require("../server.js");

describe("Index tests", () => {
  it("Index.js file exist", () => {
    expect(fs.existsSync(`${__dirname}/../index.js`)).toBe(true);
  });

  it("wilders route gives a status 200", async () => {
    const response = await supertest(server()).get("/wilders");
    expect(response.status).toBe(200);
  });

  it("wilders/2 gives a status 200", async () => {
    const response = await supertest(server()).get("/wilders/2");
    expect(response.status).toBe(200);
  });

  it("wilders/4 also gives a status 200", async () => {
    const response = await supertest(server()).get("/wilders/4");
    expect(response.status).toBe(200);
  });

  it("wilders/5 gives a status 404", async () => {
    const response = await supertest(server()).get("/wilders/5");
    expect(response.status).toBe(404);
  });

  it("wilders/2 gives the correct data", async () => {
    const response = await supertest(server()).get("/wilders/2");

    expect(response.body).toStrictEqual({ id: 2, name: "Anthony" });
  });

  it("wilders/4 also gives the correct data", async () => {
    const response = await supertest(server()).get("/wilders/4");

    expect(response.body).toStrictEqual({ id: 4, name: "Yavuz" });
  });

  it("wilders/5 returns an error", async () => {
    const response = await supertest(server()).get("/wilders/5");

    expect(response.body).toStrictEqual({
      Error: "This wilder doesn't exist.",
    });
  });
});
