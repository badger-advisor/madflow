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

test("GET /user/signin", async () => {

  await supertest(app).post("/user/signin").send({ id: '111778573652836733288' }).expect(200)
    .then((response) => {
      // Check type and length
      let temp = response.body.user
      expect(typeof temp.name).toEqual('string');
      expect(typeof temp.email).toEqual('string');
      expect(typeof temp.profilePicture).toEqual('string');
      expect(typeof temp.googleId).toEqual('string');
    });
});