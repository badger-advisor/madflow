const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../server');
require('dotenv').config();

const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// Setup and teardown
beforeAll(async () => await mongoose.connect(db), 60 * 1000); // give 60 seconds to connect to db, default 5
afterAll(async () => await mongoose.connection.close());

/** #################### tests begin below #################### */

describe('Connection to database and server', () => {
  test('GET /', async () => {
    await supertest(app).get('/').expect(200);
  });
});
