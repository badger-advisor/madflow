const mongoose = require('mongoose');
const app = require('../server');
const supertest = require('supertest');

require('dotenv').config();
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// Setup and teardown
beforeAll(async () => await mongoose.connect(db), 60 * 1000); // give 60 seconds to connect to db, default 5
afterAll(async () => await mongoose.connection.close());

describe('Testing course controller functions', () => {
  test('GET /course/all', async () => {
    await supertest(app).get('/course/all').expect(200).then(response => {
      // Check type and length
      expect(Array.isArray(response.body['courses'])).toBeTruthy();
      expect(response.body['courses'].length).toBeGreaterThanOrEqual(1);
    });
  });

  test('GET /course/getCourse (cs506)', async () => {
    await supertest(app).get('/course/getCourse?courseNumber=CS506').expect(200).then(response => {
      // Check type and length
      let temp = response.body.info;
      expect(typeof temp.courseName).toEqual('string');
      expect(typeof temp.description).toEqual('string');
      expect(typeof temp.credits).toEqual('string');
      expect(typeof temp.lastTaught).toEqual('string');
      expect(typeof response.body.courseNumber).toEqual('string');
      expect(Array.isArray(response.body.prerequisites)).toBeTruthy();
      expect(response.body.prerequisites.length).toBeGreaterThanOrEqual(0);
    });
  });
});
