const mongoose = require('mongoose');
const controller = require('../controllers/flowController');
const httpMocks = require('node-mocks-http');
const app = require("../server");
const supertest = require("supertest");

require('dotenv').config();
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

beforeAll(
  async () => await mongoose.connect(db).then(() => console.log('DB connection successful!'))
);
afterAll(
  async () => await mongoose.connection.close().then(() => console.log('DB connection is closed!'))
);

test("GET /flow/getUserFlows", async () => {
  //const post = await Post.create();

  await supertest(app).get("/flow/getUserFlows").send({ googleId: '111778573652836733288' }).expect(200)
    .then((response) => {
      // Check type and length
      expect(Array.isArray(response.body['flows'])).toBeTruthy();
      expect(response.body['flows'].length).toBeGreaterThanOrEqual(0);
    });
});