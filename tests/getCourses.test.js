const mongoose = require('mongoose');
const controller = require('../controllers/flowController');
const httpMocks = require('node-mocks-http');
const app = require('../server');
const supertest = require('supertest');

require('dotenv').config();
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

beforeAll(
  async () => await mongoose.connect(db).then(() => console.log('DB connection successful!'))
);
afterAll(
  async () => await mongoose.connection.close().then(() => console.log('DB connection is closed!'))
);

test('GET /course/all', async () => {
  //const post = await Post.create();

  await supertest(app).get('/course/all').expect(200).then(response => {
    // Check type and length
    expect(Array.isArray(response.body['courses'])).toBeTruthy();
    expect(response.body['courses'].length).toBeGreaterThanOrEqual(1);
  });
});

test('GET /course/getCourse', async () => {
  //const post = await Post.create();

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
