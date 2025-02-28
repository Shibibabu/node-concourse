const request = require("supertest");
const app = require("../index");

let server;

beforeAll(() => {
  server = app.listen(4000); // Run tests on a different port
});

afterAll((done) => {
  server.close(done);
});

test("GET / should return 'Hello from Node.js API!'", async () => {
  const response = await request(server).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello from Node.js API!");
});
